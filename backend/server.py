from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# LLM Key
EMERGENT_LLM_KEY = os.environ['EMERGENT_LLM_KEY']

# ClaimSphere system prompt
CLAIMSPHERE_SYSTEM_PROMPT = """You are the ClaimSphere RCM virtual assistant. You represent ClaimSphere, a trusted healthcare revenue cycle management company based in Cheyenne, Wyoming.

COMPANY INFO:
- Name: ClaimSphere RCM
- Phone: +1 (307) 400-1621
- Email: info@claimspherercm.com
- Address: 525 Randall Ave Ste 100, Cheyenne, WY 82001
- Founded: 2021 | 50+ Employees | 10+ Healthcare Partners
- Tagline: "Trusted Healthcare Revenue Cycle Solutions for U.S. Providers"

SERVICES:
1. Medical Billing — End-to-end billing: claim submission, payment posting, AR follow-up
2. Medical Coding — Certified coders: ICD-10, CPT, HCPCS coding, audit support
3. RCM Solutions — Full cycle management, analytics dashboard, performance reports
4. Consulting — Process optimization, staff training, compliance review
5. Credentialing — Payer enrollment, re-credentialing, status tracking

KEY STATS:
- 99% Claim Accuracy Rate
- 99% Reduction in Denials
- 5+ Years Experience
- 10+ Healthcare Partners

WHY CHOOSE US:
- HIPAA Compliant — Highest data security and privacy standards
- 99% Accuracy Rate — Industry-leading, minimizing denials
- 24/7 Support — Dedicated account managers
- Advanced Technology — AI-powered analytics, real-time insights
- Transparent Pricing — No hidden fees, tailored to practice size
- Proven Results — 20-40% increase in collections for providers

VALUES: Curiosity, Empathy, Integrity, Innovation, Excellence

MISSION: Through intuitive technology and expert revenue cycle management, ClaimSphere RCM empowers healthcare providers to optimize performance while minimizing administrative burden.

VISION: Empowering healthcare organizations through precision, reliability, and client-focused revenue cycle management.

CERTIFICATIONS: HIPAA Certified, AAPC Member, AHIMA Approved

INSTRUCTIONS:
- Be professional, friendly, and concise
- Answer questions about ClaimSphere's services, pricing inquiries, and healthcare RCM topics
- For pricing details, encourage users to call +1 (307) 400-1621 or email info@claimspherercm.com for a personalized quote
- For scheduling consultations, direct users to the contact section or phone number
- If asked about topics outside ClaimSphere or healthcare RCM, politely redirect the conversation
- Keep responses under 150 words unless a detailed explanation is specifically requested
"""

# In-memory chat sessions (keyed by session_id)
chat_sessions = {}

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    reply: str
    session_id: str


@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/chatbot", response_model=ChatResponse)
async def chatbot(req: ChatRequest):
    session_id = req.session_id or str(uuid.uuid4())

    if session_id not in chat_sessions:
        chat = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=session_id,
            system_message=CLAIMSPHERE_SYSTEM_PROMPT
        )
        chat.with_model("gemini", "gemini-2.5-flash")
        chat_sessions[session_id] = chat

    chat = chat_sessions[session_id]
    user_msg = UserMessage(text=req.message)
    response = await chat.send_message(user_msg)

    # Store in MongoDB
    await db.chat_messages.insert_one({
        "session_id": session_id,
        "role": "user",
        "content": req.message,
        "timestamp": datetime.now(timezone.utc).isoformat()
    })
    await db.chat_messages.insert_one({
        "session_id": session_id,
        "role": "assistant",
        "content": response,
        "timestamp": datetime.now(timezone.utc).isoformat()
    })

    return ChatResponse(reply=response, session_id=session_id)


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
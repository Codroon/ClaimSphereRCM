# ClaimSphere RCM - Product Requirements Document

## Original Problem Statement
Build a professional web experience for "ClaimSphere RCM," a healthcare revenue cycle management service. A corporate med-tech aesthetic with glassmorphism, smooth animations, and sections: Hero, About, Services, Why Choose Us, Testimonials, Blog, Contact, and a Gemini AI Chatbot.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI (port 3000)
- **Backend**: FastAPI + MongoDB (port 8001)
- **Deployment**: Vercel (frontend), Render (backend), MongoDB Atlas (DB)
- **AI Integration**: Gemini 2.5 Flash via emergentintegrations (Emergent LLM Key)

## What's Been Implemented
- Full multi-section landing page (Hero, About, DemoVideo, Services, WhyChooseUs, Testimonials, BlogSection, Contact, Footer)
- Header with dual-logo scroll transition and Pricing modal
- Blog section with 4 articles and individual blog post pages
- Gemini AI Chatbot - floating widget (bottom-right), answers ClaimSphere RCM questions
  - Backend: POST /api/chatbot with session management, MongoDB chat storage
  - Frontend: Sleek ChatBot.jsx component available site-wide
- Custom styling: glassmorphism, flip cards, animations, gradient text

## Key Endpoints
- `GET /api/` - Health check
- `GET/POST /api/status` - Status checks (MongoDB)
- `POST /api/chatbot` - AI chatbot (Gemini via emergentintegrations)

## Prioritized Backlog
### P1
- Connect Pricing Modal form to backend/service
- Blog images (replace non-functional placeholders)

### P2
- Add 2-3 more pages (user TBD)
- Review TwoForms contact form integration

### P3
- Persist chat sessions to MongoDB (currently in-memory)
- Admin view for pricing form submissions

"""
Backend tests for ClaimSphere RCM Chatbot API
Tests: /api/chatbot endpoint, multi-turn conversations, session management
"""
import pytest
import requests
import os
import time

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthCheck:
    """Basic API health check tests"""
    
    def test_api_root_endpoint(self):
        """Test that the API root endpoint is accessible"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Hello World"
        print("✓ API root endpoint working")


class TestChatbotEndpoint:
    """Tests for POST /api/chatbot endpoint"""
    
    def test_chatbot_basic_message(self):
        """Test sending a basic message to chatbot"""
        response = requests.post(
            f"{BASE_URL}/api/chatbot",
            json={"message": "Hello, what is ClaimSphere?"},
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 200
        data = response.json()
        
        # Verify response structure
        assert "reply" in data, "Response should contain 'reply' field"
        assert "session_id" in data, "Response should contain 'session_id' field"
        
        # Verify data types
        assert isinstance(data["reply"], str), "Reply should be a string"
        assert isinstance(data["session_id"], str), "Session ID should be a string"
        assert len(data["reply"]) > 0, "Reply should not be empty"
        assert len(data["session_id"]) > 0, "Session ID should not be empty"
        
        print(f"✓ Chatbot responded with session_id: {data['session_id'][:8]}...")
    
    def test_chatbot_returns_relevant_response(self):
        """Test that chatbot returns relevant info about ClaimSphere services"""
        response = requests.post(
            f"{BASE_URL}/api/chatbot",
            json={"message": "What services does ClaimSphere offer?"},
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 200
        data = response.json()
        
        # Check that response mentions services
        reply_lower = data["reply"].lower()
        # Should mention at least one of the services
        services_keywords = ["billing", "coding", "rcm", "credentialing", "consulting", "revenue"]
        has_service_mention = any(keyword in reply_lower for keyword in services_keywords)
        assert has_service_mention, f"Response should mention ClaimSphere services. Got: {data['reply'][:200]}"
        
        print("✓ Chatbot returned relevant service information")
    
    def test_chatbot_multi_turn_conversation(self):
        """Test multi-turn conversation with same session_id"""
        # First message - get session_id
        response1 = requests.post(
            f"{BASE_URL}/api/chatbot",
            json={"message": "Tell me about medical billing"},
            headers={"Content-Type": "application/json"}
        )
        assert response1.status_code == 200
        data1 = response1.json()
        session_id = data1["session_id"]
        
        # Wait a bit for AI processing
        time.sleep(1)
        
        # Second message - use same session_id
        response2 = requests.post(
            f"{BASE_URL}/api/chatbot",
            json={"message": "What about the accuracy rate?", "session_id": session_id},
            headers={"Content-Type": "application/json"}
        )
        assert response2.status_code == 200
        data2 = response2.json()
        
        # Verify session_id is preserved
        assert data2["session_id"] == session_id, "Session ID should be preserved across turns"
        assert len(data2["reply"]) > 0, "Follow-up response should not be empty"
        
        print(f"✓ Multi-turn conversation works with session_id: {session_id[:8]}...")
    
    def test_chatbot_new_session_without_session_id(self):
        """Test that new session is created when no session_id provided"""
        response = requests.post(
            f"{BASE_URL}/api/chatbot",
            json={"message": "Hi there!"},
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 200
        data = response.json()
        
        # Should create a new session
        assert "session_id" in data
        assert len(data["session_id"]) == 36, "Session ID should be a valid UUID"
        
        print("✓ New session created when no session_id provided")
    
    def test_chatbot_empty_message_handling(self):
        """Test chatbot behavior with empty message"""
        response = requests.post(
            f"{BASE_URL}/api/chatbot",
            json={"message": ""},
            headers={"Content-Type": "application/json"}
        )
        # Should either return 400 or handle gracefully
        # Based on implementation, it may still process empty message
        assert response.status_code in [200, 400, 422]
        print(f"✓ Empty message handled with status: {response.status_code}")
    
    def test_chatbot_contact_info_query(self):
        """Test that chatbot provides contact information when asked"""
        response = requests.post(
            f"{BASE_URL}/api/chatbot",
            json={"message": "How can I contact ClaimSphere?"},
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 200
        data = response.json()
        
        reply_lower = data["reply"].lower()
        # Should mention contact info
        contact_keywords = ["307", "400", "1621", "email", "info@claimspherercm", "phone", "call"]
        has_contact_info = any(keyword in reply_lower for keyword in contact_keywords)
        assert has_contact_info, f"Response should include contact information. Got: {data['reply'][:200]}"
        
        print("✓ Chatbot provides contact information")


class TestStatusEndpoint:
    """Tests for /api/status endpoint"""
    
    def test_create_status_check(self):
        """Test creating a status check"""
        response = requests.post(
            f"{BASE_URL}/api/status",
            json={"client_name": "TEST_chatbot_test"},
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 200
        data = response.json()
        
        assert "id" in data
        assert "client_name" in data
        assert data["client_name"] == "TEST_chatbot_test"
        
        print("✓ Status check created successfully")
    
    def test_get_status_checks(self):
        """Test retrieving status checks"""
        response = requests.get(f"{BASE_URL}/api/status")
        assert response.status_code == 200
        data = response.json()
        
        assert isinstance(data, list)
        print(f"✓ Retrieved {len(data)} status checks")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])

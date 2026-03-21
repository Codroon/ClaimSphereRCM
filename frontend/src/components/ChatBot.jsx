import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm the ClaimSphere RCM assistant. How can I help you with your revenue cycle management needs today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', content: trimmed }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, session_id: sessionId })
      });

      if (!res.ok) throw new Error('Failed to get response');

      const data = await res.json();
      setSessionId(data.session_id);
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "I'm sorry, I'm having trouble connecting right now. Please try again or call us at +1 (307) 400-1621." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const formatMessage = (text) => {
    // Basic markdown-like formatting
    return text
      .split('\n')
      .map((line, i) => {
        // Bold
        const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return <p key={i} className="mb-1 last:mb-0" dangerouslySetInnerHTML={{ __html: formatted }} />;
      });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        data-testid="chatbot-toggle-btn"
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 ${
          isOpen && !isMinimized
            ? 'bg-[#003366] rotate-0'
            : 'bg-gradient-to-br from-[#008080] to-[#006060]'
        }`}
        style={{
          boxShadow: isOpen && !isMinimized
            ? '0 4px 20px rgba(0, 51, 102, 0.4)'
            : '0 4px 24px rgba(0, 128, 128, 0.4)'
        }}
      >
        {isOpen && !isMinimized ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          data-testid="chatbot-window"
          className={`fixed bottom-24 right-6 z-[998] w-[380px] max-w-[calc(100vw-2rem)] transition-all duration-300 origin-bottom-right ${
            isMinimized ? 'h-14 overflow-hidden' : 'h-[520px]'
          }`}
          style={{
            borderRadius: '16px',
            boxShadow: '0 12px 48px rgba(0, 51, 102, 0.2), 0 0 0 1px rgba(0, 128, 128, 0.1)',
            animation: 'chatSlideUp 0.3s ease-out'
          }}
        >
          <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden">
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #003366 0%, #004d80 50%, #006060 100%)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-tight">ClaimSphere Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#50C878] animate-pulse" />
                    <span className="text-white/70 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                data-testid="chatbot-minimize-btn"
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Minus className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div
                  data-testid="chatbot-messages"
                  className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
                  style={{ background: '#f7f9fc' }}
                >
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-[#008080] text-white rounded-2xl rounded-br-md'
                            : 'bg-white text-[#1a2b3c] rounded-2xl rounded-bl-md border border-gray-100'
                        }`}
                        style={
                          msg.role === 'assistant'
                            ? { boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }
                            : {}
                        }
                      >
                        {formatMessage(msg.content)}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white text-[#1a2b3c] rounded-2xl rounded-bl-md border border-gray-100 px-4 py-3"
                        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                        <div className="flex gap-1.5 items-center">
                          <span className="w-2 h-2 bg-[#008080] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-[#008080] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-[#008080] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex-shrink-0 px-4 py-3 border-t border-gray-100 bg-white">
                  <div className="flex items-center gap-2">
                    <input
                      data-testid="chatbot-input"
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message..."
                      disabled={isLoading}
                      className="flex-1 px-4 py-2.5 bg-[#f7f9fc] border border-gray-200 rounded-xl text-sm text-[#1a2b3c] placeholder:text-gray-400 focus:outline-none focus:border-[#008080] focus:ring-1 focus:ring-[#008080]/20 transition-all disabled:opacity-50"
                    />
                    <button
                      data-testid="chatbot-send-btn"
                      onClick={sendMessage}
                      disabled={!input.trim() || isLoading}
                      className="w-10 h-10 rounded-xl bg-[#008080] hover:bg-[#006d6d] disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
                    >
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    Powered by ClaimSphere AI
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

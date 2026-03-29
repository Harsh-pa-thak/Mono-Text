import { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../services/aiService';

export default function AIChat({ blogContent, initialMessage }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize with the summary if provided
  useEffect(() => {
    if (initialMessage && messages.length === 0) {
      setMessages([{ role: 'model', text: initialMessage }]);
    }
  }, [initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // Keep only the last 6 messages to save tokens and prevent huge payloads
      const historyToKeep = messages.slice(-6);
      const res = await sendChatMessage(input, historyToKeep, blogContent);
      setMessages([...newMessages, { role: 'model', text: res.text }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'model', text: `❌ Error: ${err.message || 'Failed to connect to AI.'}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-chat-container">
      <div className="ai-chat-header">
        <span style={{ fontSize: '1.2rem' }}>✨</span>
        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Chat with AI</span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Gemini 2.5</span>
      </div>

      <div className="ai-chat-messages">
        {messages.length === 0 && !loading && (
          <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.85rem', marginTop: '1rem' }}>
            Ask anything about this blog!
          </div>
        )}
        
        {messages.map((msg, idx) => (
          <div key={idx} className={`ai-chat-message-row ${msg.role}`}>
            {msg.role === 'model' && (
              <div className="ai-chat-avatar">AI</div>
            )}
            <div className="ai-chat-bubble">
              {msg.text}
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="ai-chat-message-row model">
            <div className="ai-chat-avatar">AI</div>
            <div className="ai-chat-bubble typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="ai-chat-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a follow-up question..."
          className="ai-chat-input"
          disabled={loading}
        />
        <button type="submit" className="ai-chat-submit" disabled={!input.trim() || loading}>
          ➤
        </button>
      </form>
    </div>
  );
}

import { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../services/aiService';

const SUGGESTIONS = [
  'Summarize the key takeaways',
  'What are the main concepts?',
  'Give me a simplified explanation',
  'What should I learn next?',
];

function renderText(text) {
  // Basic markdown: **bold**, `code`, newlines
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br/>');
}

export default function AIChat({ blogContent, initialMessage, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (initialMessage && messages.length === 0) {
      setMessages([{ role: 'model', text: initialMessage }]);
      setShowSuggestions(true);
    }
  }, [initialMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    setShowSuggestions(false);
    const userMessage = { role: 'user', text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const historyToKeep = messages.slice(-6);
      const res = await sendChatMessage(text, historyToKeep, blogContent);
      setMessages([...newMessages, { role: 'model', text: res.text }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'model', text: `❌ ${err.message || 'Failed to connect to AI.'}` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestion = (suggestion) => {
    setInput(suggestion);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="ai-chat-container">
      {/* Header */}
      <div className="ai-chat-header">
        <div className="ai-chat-header-left">
          <div className="ai-chat-logo">
            <span className="ai-sparkle-icon">✦</span>
          </div>
          <div>
            <div className="ai-chat-title">AI Assistant</div>
            <div className="ai-chat-subtitle">Powered by Gemini 2.5</div>
          </div>
        </div>
        <div className="ai-chat-header-right">
          <div className="ai-status-dot" />
          <span className="ai-status-text">Online</span>
          {onClose && (
            <button className="ai-chat-close-btn" onClick={onClose} aria-label="Close AI Chat">✕</button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="ai-chat-messages">
        {messages.length === 0 && !loading && (
          <div className="ai-chat-empty">
            <div className="ai-chat-empty-icon">✦</div>
            <p className="ai-chat-empty-title">Ask me anything</p>
            <p className="ai-chat-empty-sub">I've read this article and can help you understand it better.</p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div key={idx} className={`ai-chat-message-row ${msg.role}`}>
            {msg.role === 'model' && (
              <div className="ai-chat-avatar">✦</div>
            )}
            <div
              className="ai-chat-bubble"
              dangerouslySetInnerHTML={{ __html: renderText(msg.text) }}
            />
            {msg.role === 'user' && (
              <div className="ai-chat-avatar user-avatar">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="ai-chat-message-row model">
            <div className="ai-chat-avatar">✦</div>
            <div className="ai-chat-bubble typing">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {showSuggestions && messages.length <= 1 && !loading && (
        <div className="ai-suggestions">
          {SUGGESTIONS.map((s) => (
            <button key={s} className="ai-suggestion-chip" onClick={() => handleSuggestion(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="ai-chat-input-area">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a follow-up question…"
          className="ai-chat-input"
          disabled={loading}
          autoComplete="off"
        />
        <button type="submit" className="ai-chat-submit" disabled={!input.trim() || loading} aria-label="Send">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}

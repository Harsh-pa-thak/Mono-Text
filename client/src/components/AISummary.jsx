import { useState } from 'react';
import { summarize } from '../services/aiService';
import { useToast } from './Toast';

export default function AISummary({ content, onSummarize }) {
  const { showToast } = useToast();
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSummarize = async () => {
    try {
      setLoading(true);
      const data = await summarize(content);

      if (onSummarize) {
        onSummarize(data.summary);
      } else {
        setSummary(data.summary);
        setDone(true);
      }
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  if (done && summary && !onSummarize) {
    return (
      <div className="ai-summary-box">
        <div className="ai-summary-header">
          <div className="ai-summary-badge">
            <span className="ai-badge-icon">✦</span>
            <span>AI Summary</span>
          </div>
          <span className="ai-summary-model">Gemini 2.5</span>
        </div>
        <p className="ai-summary-text">{summary}</p>
        <button
          onClick={() => { setSummary(''); setDone(false); }}
          className="ai-summary-dismiss"
        >
          Dismiss
        </button>
      </div>
    );
  }

  return (
    <div className="ai-cta-banner">
      <div className="ai-cta-glow" />
      <div className="ai-cta-left">
        <div className="ai-cta-icon">✦</div>
        <div>
          <div className="ai-cta-title">Too long? Let AI summarize it</div>
          <div className="ai-cta-sub">Get a smart, concise summary</div>
        </div>
      </div>
      <button
        className="ai-cta-btn"
        onClick={handleSummarize}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="ai-btn-spinner" />
            Summarizing…
          </>
        ) : (
          <>
            <span>✦</span>
            Summarize with AI
          </>
        )}
      </button>
    </div>
  );
}

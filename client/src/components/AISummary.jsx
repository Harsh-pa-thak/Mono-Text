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
        <div className="ai-summary-label">
          AI Summary
        </div>
        <p className="ai-summary-text">{summary}</p>
        <button
          onClick={() => { setSummary(''); setDone(false); }}
          style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-tertiary)', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          Dismiss
        </button>
      </div>
    );
  }

  return (
    <button
      className="btn-secondary"
      onClick={handleSummarize}
      disabled={loading}
      style={{ marginTop: '1rem' }}
    >
      {loading ? 'Summarizing...' : 'AI Summarize'}
    </button>
  );
}

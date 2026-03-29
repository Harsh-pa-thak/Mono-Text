
// POST /ai/summarize

const summarize = async (req, res, next) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Content is required for summarization' });
    }

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
      return res.status(503).json({ error: 'Gemini API key not configured. Please add it to server/.env' });
    }

    // Strip HTML, collapse whitespace, then take only first 600 chars
    // to stay well within free-tier token limits (one small request)
    const plainText = content
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 600);

    const { GoogleGenAI } = require('@google/genai');
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Short prompt = fewer tokens = stays in free tier
    const prompt = `Summarize this blog excerpt in 2 sentences:\n\n${plainText}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    const summary = response.text;

    res.json({ summary });
  } catch (error) {
    if (error.message?.includes('API_KEY_INVALID')) {
      return res.status(401).json({ error: 'Invalid Gemini API key' });
    }
    next(error);
  }
};

// POST /ai/chat
const chat = async (req, res, next) => {
  try {
    const { message, history = [], blogContent } = req.body;

    if (!message || !blogContent) {
      return res.status(400).json({ error: 'Message and blog content are required' });
    }

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
      return res.status(503).json({ error: 'Gemini API key not configured.' });
    }

    // Limit context to ~1000 characters to save free-tier tokens
    const plainText = blogContent
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 1000);

    const { GoogleGenAI } = require('@google/genai');
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Format previous messages for the Gemini SDK
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Append the new user message
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: `You are an AI reading assistant helping a user understand a blog post. Answer questions based on this excerpt:\n\n---\n${plainText}\n---\nKeep responses conversational, concise (2-4 sentences max), and helpful.`,
      }
    });

    res.json({ text: response.text });
  } catch (error) {
    if (error.message?.includes('API_KEY_INVALID')) {
      return res.status(401).json({ error: 'Invalid Gemini API key' });
    }
    next(error);
  }
};

module.exports = { summarize, chat };

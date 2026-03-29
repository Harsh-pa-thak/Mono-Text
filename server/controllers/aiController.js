const { GoogleGenerativeAI } = require('@google/generative-ai');

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

    // Strip HTML tags for clean text input
    const plainText = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Please provide a concise, engaging 2-3 sentence summary of the following blog post content. Focus on the key insights and main takeaways. Keep it conversational and informative:\n\n${plainText}`;

    const result = await model.generateContent(prompt);
    const summary = result.response.text();

    res.json({ summary });
  } catch (error) {
    if (error.message?.includes('API_KEY_INVALID')) {
      return res.status(401).json({ error: 'Invalid Gemini API key' });
    }
    next(error);
  }
};

module.exports = { summarize };

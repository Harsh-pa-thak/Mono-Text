import api from './api';

export const summarize = (content) =>
  api.post('/ai/summarize', { content }).then((r) => r.data);

export const sendChatMessage = (message, history, blogContent) =>
  api.post('/ai/chat', { message, history, blogContent }).then((r) => r.data);

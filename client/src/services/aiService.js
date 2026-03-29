import api from './api';

export const summarize = (content) =>
  api.post('/ai/summarize', { content }).then((r) => r.data);

import api from './api';

export const getComments = (blogId) => api.get(`/comments/${blogId}`).then((r) => r.data);
export const addComment = (blogId, data) =>
  api.post(`/comments/${blogId}`, data).then((r) => r.data);

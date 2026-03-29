import api from './api';

export const getBlogs = () => api.get('/blogs').then((r) => r.data);
export const getBlogById = (id) => api.get(`/blogs/${id}`).then((r) => r.data);
export const createBlog = (data) => api.post('/blogs', data).then((r) => r.data);
export const deleteBlog = (id, author) =>
  api.delete(`/blogs/${id}`, { data: { author } }).then((r) => r.data);

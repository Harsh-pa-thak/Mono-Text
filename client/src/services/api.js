import axios from 'axios';

// Using Vite proxy so base URL is just '/'
const api = axios.create({
  baseURL: '/',
  headers: { 'Content-Type': 'application/json' },
});

// Response interceptor for error normalization
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const message = err.response?.data?.error || err.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

export default api;

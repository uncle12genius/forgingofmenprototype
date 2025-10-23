// src/api/index.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000/api',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // if you use cookies/auth
});

// optional response interceptor (errors / refresh token)
apiClient.interceptors.response.use(
  res => res,
  err => Promise.reject(err.response ?? err)
);

export default apiClient;


import axios from 'axios';


const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, 
});


apiClient.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err.response ?? err)
);

export default apiClient;

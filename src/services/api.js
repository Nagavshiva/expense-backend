import axios from 'axios';

const api = axios.create({
  baseURL: 'https://expense-tracker-backend-z4lr.onrender.com/api', // Update this to your backend's base URL
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

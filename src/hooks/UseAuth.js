import { useState } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

export default function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Login failed');
      }
      
      // Store token in localStorage
      if (result.data.token) {
        localStorage.setItem('adminToken', result.data.token);
        localStorage.setItem('adminUser', JSON.stringify(result.data.user));
      }
      
      return result.data;
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
  };

  const getCurrentUser = () => {
    const userStr = localStorage.getItem('adminUser');
    return userStr ? JSON.parse(userStr) : null;
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem('adminToken');
  };

  return {
    login,
    logout,
    getCurrentUser,
    isAuthenticated,
    loading,
    error
  };
}
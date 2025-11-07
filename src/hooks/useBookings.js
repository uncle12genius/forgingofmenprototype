import { useState } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

export default function useBookings() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAuthToken = () => {
    return localStorage.getItem('adminToken');
  };

  const fetchBookings = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = getAuthToken();
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch bookings');
      }
      
      return result.data;
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (id, statusData) => {
    setLoading(true);
    setError(null);
    try {
      const token = getAuthToken();
      const response = await fetch(`${API_BASE_URL}/bookings/${id}/status`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(statusData)
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to update booking status');
      }
      
      return result.data;
    } catch (error) {
      console.error("Error updating booking status:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const scheduleSession = async (id, scheduleData) => {
    setLoading(true);
    setError(null);
    try {
      const token = getAuthToken();
      const response = await fetch(`${API_BASE_URL}/bookings/${id}/schedule`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(scheduleData)
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to schedule session');
      }
      
      return result.data;
    } catch (error) {
      console.error("Error scheduling session:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchBookings,
    updateBookingStatus,
    scheduleSession,
    loading,
    error
  };
}
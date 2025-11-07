import { useState } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

export default function useEvents() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAuthToken = () => {
    return localStorage.getItem('adminToken');
  };

  const getEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch events');
      }
      
      return result.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (eventData) => {
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('title', eventData.title);
      formData.append('description', eventData.description);
      formData.append('event_date', eventData.date);
      formData.append('event_time', eventData.time);
      formData.append('venue', eventData.venue);
      formData.append('meeting_link', eventData.meetingLink || '');
      
      if (eventData.image) {
        formData.append('image', eventData.image);
      }

      const token = getAuthToken();
      const response = await fetch(`${API_BASE_URL}/events`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to create event');
      }
      
      return result.data;
    } catch (error) {
      console.error("Error creating event:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (eventId) => {
    setLoading(true);
    setError(null);
    try {
      const token = getAuthToken();
      const response = await fetch(`${API_BASE_URL}/events/${eventId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to delete event');
      }
      
      return result;
    } catch (error) {
      console.error("Error deleting event:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateEvent = async (eventId, updates) => {
    setLoading(true);
    setError(null);
    try {
      const token = getAuthToken();
      const response = await fetch(`${API_BASE_URL}/events/${eventId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to update event');
      }
      
      return result.data;
    } catch (error) {
      console.error("Error updating event:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    getEvents,
    createEvent,
    deleteEvent,
    updateEvent,
    loading,
    error
  };
}
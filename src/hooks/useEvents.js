import { useState } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

export default function useEvents() {
  const [loading, setLoading] = useState(false);

  const getEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      const result = await response.json();
      
      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (eventData) => {
    setLoading(true);
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

      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/events`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const result = await response.json();
      
      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error creating event:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (eventId) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/events/${eventId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      
      if (result.success) {
        return result;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateEvent = async (eventId, updates) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/events/${eventId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
      });

      const result = await response.json();
      
      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error updating event:", error);
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
    loading
  };
}
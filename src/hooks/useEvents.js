
import { useState, useEffect, useCallback } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

export default function useEvents() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]); // normalized events array

  const getAuthToken = () => {
    return localStorage.getItem('adminToken');
  };

  // internal fetch that returns data (same behavior as before)
  const getEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch events');
      }

      // ensure result.data is an array
      const raw = Array.isArray(result.data) ? result.data : [];
      // normalize events: ensure `.id` and `.date` fields exist
      const normalized = raw.map((ev) => {
        const id = ev.id ?? ev._id ?? ev.event_id ?? null;
        // prefer event.date, else event.event_date
        const dateValue = ev.date ?? ev.event_date ?? ev.eventDate ?? null;
        // convert to ISO string if present
        const date = dateValue ? new Date(dateValue).toISOString() : null;

        return {
          ...ev,
          id,
          date,
        };
      });

      setEvents(normalized);
      return normalized;
    } catch (err) {
      console.error('Error fetching events:', err);
      setError(err.message || 'Error fetching events');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // call getEvents on mount
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        await getEvents();
      } catch (err) {
        // already handled in getEvents
      }
    };
    if (mounted) load();
    return () => { mounted = false; };
  }, [getEvents]);

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

      // refresh events after creation
      await getEvents();

      return result.data;
    } catch (error) {
      console.error('Error creating event:', error);
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

      // refresh events after deletion
      await getEvents();

      return result;
    } catch (error) {
      console.error('Error deleting event:', error);
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

      // refresh events after update
      await getEvents();

      return result.data;
    } catch (error) {
      console.error('Error updating event:', error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // split into upcoming and past based on date
  const now = new Date();
  const upcomingEvents = events.filter((ev) => {
    if (!ev?.date) return false;
    const evDate = new Date(ev.date);
    return evDate >= now;
  });

  const pastEvents = events.filter((ev) => {
    if (!ev?.date) return false;
    const evDate = new Date(ev.date);
    return evDate < now;
  });

  return {
    getEvents,
    createEvent,
    deleteEvent,
    updateEvent,
    loading,
    error,
    upcomingEvents,
    pastEvents
  };
}

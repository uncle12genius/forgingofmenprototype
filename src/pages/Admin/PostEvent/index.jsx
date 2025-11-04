import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useEvents from "../../../hooks/useEvents";
import CreateEventForm from './CreateEventForm';
import EventManagement from './EventManagement';

export default function PostEvent() {
  const { createEvent, deleteEvent, updateEvent, getEvents, loading } = useEvents();
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('create');

  // Load events on component mount
  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const eventsData = await getEvents();
      setEvents(eventsData || []);
    } catch (err) {
      console.error('Error loading events:', err);
      setError('Failed to load events');
    }
  };

  const handleCreateEvent = async (formData) => {
    setError(null);
    try {
      await createEvent(formData);
      await loadEvents();
      setActiveTab('manage');
    } catch (err) {
      console.error(err);
      setError(err?.message || 'Failed to create event');
    }
  };

  const handleDeleteEvent = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await deleteEvent(eventId);
        await loadEvents();
      } catch (err) {
        console.error('Error deleting event:', err);
        setError('Failed to delete event');
      }
    }
  };

  const handleMarkAsPast = async (eventId) => {
    try {
      await updateEvent(eventId, { status: 'past' });
      await loadEvents();
    } catch (err) {
      console.error('Error updating event:', err);
      setError('Failed to update event status');
    }
  };

  const handleMarkAsUpcoming = async (eventId) => {
    try {
      await updateEvent(eventId, { status: 'upcoming' });
      await loadEvents();
    } catch (err) {
      console.error('Error updating event:', err);
      setError('Failed to update event status');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-700 to-teal-600 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Event Management</h1>
          <p className="text-green-100 text-lg">
            Create and manage your events in one place
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('create')}
              className={`flex-1 py-4 px-6 font-semibold text-center transition-all duration-200 ${
                activeTab === 'create'
                  ? 'bg-green-50 text-green-700 border-b-2 border-green-500'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create Event
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`flex-1 py-4 px-6 font-semibold text-center transition-all duration-200 ${
                activeTab === 'manage'
                  ? 'bg-green-50 text-green-700 border-b-2 border-green-500'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Manage Events ({events.length})
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        {/* Content */}
        {activeTab === 'create' && (
          <CreateEventForm 
            onSubmit={handleCreateEvent}
            loading={loading}
          />
        )}

        {activeTab === 'manage' && (
          <EventManagement
            events={events}
            onDeleteEvent={handleDeleteEvent}
            onMarkAsPast={handleMarkAsPast}
            onMarkAsUpcoming={handleMarkAsUpcoming}
          />
        )}
      </div>
    </div>
  );
}
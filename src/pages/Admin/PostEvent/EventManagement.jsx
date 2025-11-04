import React from 'react';
import EventCard from './EventCard';

export default function EventManagement({ events, onDeleteEvent, onMarkAsPast, onMarkAsUpcoming }) {
  // Filter events
  const upcomingEvents = events.filter(event => 
    event.status !== 'past' && new Date(event.date) >= new Date().setHours(0,0,0,0)
  );
  const pastEvents = events.filter(event => 
    event.status === 'past' || new Date(event.date) < new Date().setHours(0,0,0,0)
  );

  return (
    <div className="space-y-6">
      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
          Upcoming Events ({upcomingEvents.length})
        </h2>
        
        {upcomingEvents.length === 0 ? (
          <EmptyState type="upcoming" />
        ) : (
          <div className="grid gap-4">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                type="upcoming"
                onDelete={onDeleteEvent}
                onMarkAsPast={onMarkAsPast}
                onMarkAsUpcoming={onMarkAsUpcoming}
              />
            ))}
          </div>
        )}
      </div>

      {/* Past Events */}
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="w-3 h-3 bg-gray-400 rounded-full mr-3"></span>
          Past Events ({pastEvents.length})
        </h2>
        
        {pastEvents.length === 0 ? (
          <EmptyState type="past" />
        ) : (
          <div className="grid gap-4">
            {pastEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                type="past"
                onDelete={onDeleteEvent}
                onMarkAsPast={onMarkAsPast}
                onMarkAsUpcoming={onMarkAsUpcoming}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyState({ type }) {
  const icon = type === 'upcoming' ? (
    <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ) : (
    <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const message = type === 'upcoming' ? 'No upcoming events found.' : 'No past events found.';

  return (
    <div className="text-center py-8 text-gray-500">
      {icon}
      <p>{message}</p>
    </div>
  );
}
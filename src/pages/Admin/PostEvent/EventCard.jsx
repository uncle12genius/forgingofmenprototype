import React from 'react';

export default function EventCard({ event, type, onDelete, onMarkAsPast, onMarkAsUpcoming }) {
  const isUpcoming = type === 'upcoming';

  return (
    <div className={`border rounded-xl p-4 transition-colors ${
      isUpcoming 
        ? 'border-green-200 hover:bg-green-50' 
        : 'border-gray-200 hover:bg-gray-50'
    }`}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${
            isUpcoming ? 'text-gray-800' : 'text-gray-600'
          }`}>
            {event.title}
          </h3>
          <p className={`mt-1 ${isUpcoming ? 'text-gray-600' : 'text-gray-500'}`}>
            {event.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-2 text-sm">
            <span className={`flex items-center ${
              isUpcoming ? 'text-gray-500' : 'text-gray-400'
            }`}>
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(event.date).toLocaleDateString()} at {event.time}
            </span>
            <span className={`flex items-center ${
              isUpcoming ? 'text-gray-500' : 'text-gray-400'
            }`}>
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {event.venue}
            </span>
            {event.meetingLink && (
              <span className={`flex items-center ${
                isUpcoming ? 'text-blue-500' : 'text-blue-400'
              }`}>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Virtual Event
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2 ml-4">
          {isUpcoming ? (
            <button
              onClick={() => onMarkAsPast(event.id)}
              className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-600 transition-colors"
            >
              Mark as Past
            </button>
          ) : (
            <button
              onClick={() => onMarkAsUpcoming(event.id)}
              className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
            >
              Mark as Upcoming
            </button>
          )}
          <button
            onClick={() => onDelete(event.id)}
            className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
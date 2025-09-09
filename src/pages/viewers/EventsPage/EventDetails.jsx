import React, { useState } from "react";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import EventDetails2 from './EventsDetails2';

function EventDetails({ onViewEventDetails }) {  
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Sample event data
  const events = [
    {
      id: 1,
      title: "Mindfulness Meditation Workshop",
      date: "2023-11-15",
      time: "6:00 PM - 7:30 PM",
      location: "Community Wellness Center",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      description: "Join us for a guided meditation session to reduce stress and improve focus. Perfect for beginners and experienced practitioners alike.",
      fullDescription: "Join us for a guided meditation session to reduce stress and improve focus. This workshop is perfect for both beginners and experienced practitioners alike. Our certified instructors will guide you through various mindfulness techniques that you can incorporate into your daily routine."
    },
    {
      id: 2,
      title: "Coping with Anxiety Seminar",
      date: "2023-11-20",
      time: "5:30 PM - 7:00 PM",
      location: "Online Event",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
      description: "Learn practical strategies to manage anxiety in daily life from licensed therapists.",
      fullDescription: "Learn practical strategies to manage anxiety in daily life from our licensed therapists. This seminar will cover cognitive-behavioral techniques, breathing exercises, and mindfulness practices that can help you manage anxiety symptoms. You'll also have the opportunity to ask questions during the Q&A session."
    }
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventDetails(true);
    onViewEventDetails(true); // Notify App component
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setShowEventDetails(false);
    setSelectedEvent(null);
    onViewEventDetails(false); // Notify App component
  };

  // If showing event details, render the EventDetails2 component
  if (showEventDetails && selectedEvent) {
    return (
      <EventDetails2 
        event={selectedEvent} 
        onBack={handleBackClick}
      />
    );
  }

  
  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-8 px-4 sm:px-6 lg:px-7" id="Events">

      <div className="max-w-4x mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Upcoming Events</h1>
        </div>

        {/* Horizontal Events Container */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col md:flex-row md:max-w-2xl"
              onClick={() => handleEventClick(event)}
            >
              {/* Event Image - Top on mobile, left on desktop */}
              <div className="relative md:w-2/5">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 md:h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  Upcoming
                </div>
              </div>

              {/* Event Content */}
              <div className="p-5 md:w-3/5">
                <h2 className="text-lg font-semibold text-green-900 mb-2 line-clamp-1">
                  {event.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                {/* Event Details */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center text-sm text-gray-700">
                    <Calendar className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="flex items-center text-green-600 font-medium text-sm">
                  <span>View details</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no events) */}
        {events.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-green-800 mb-2">No upcoming events</h3>
            <p className="text-green-600">Check back later for new events and workshops.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventDetails;
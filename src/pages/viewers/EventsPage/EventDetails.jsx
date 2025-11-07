import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import useEvents from "../../../hooks/useEvents";






function EventDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  const { upcomingEvents, pastEvents, loading, error } = useEvents();
  
  const events = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const handleViewDetails = (event) => {
    if (activeTab === "upcoming") {
      navigate(`/event/${event.id}`);
    }
  };

  const handleUpcomingEventsClick = () => {
    setActiveTab("upcoming");
  };

  if (loading) {
    return (
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center py-12">
          <div className="text-red-500 text-lg mb-4">Error loading events</div>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Events</h1>
        
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === "past"
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Past Events
          </button>
          
          <button
            onClick={handleUpcomingEventsClick}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === "upcoming"
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Upcoming Events
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap">
        {events.map((event) => (
          <div
            key={event.id}
            className={`flex-1 bg-white rounded-xl shadow-md overflow-hidden min-w-[300px] max-w-md mx-auto md:mx-0 ${
              activeTab === "upcoming" 
                ? "cursor-pointer hover:shadow-lg transition" 
                : "opacity-80"
            }`}
            onClick={() => activeTab === "upcoming" && handleViewDetails(event)}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = '/images/event-placeholder.jpg'; // Add a fallback image
              }}
            />

            <div className="p-5 flex flex-col justify-between h-64">
              <div>
                <h2 className="text-lg font-semibold text-green-900 mb-2 line-clamp-1">
                  {event.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="truncate">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="truncate">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>

              <div className={`mt-4 flex items-center text-sm font-medium transition ${
                activeTab === "upcoming" 
                  ? "text-green-600 hover:text-green-700 cursor-pointer" 
                  : "text-gray-500 cursor-default"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                if (activeTab === "upcoming") {
                  handleViewDetails(event);
                }
              }}>
                <span>
                  {activeTab === "upcoming" ? "View details" : "Past Event"}
                </span>
                {activeTab === "upcoming" && <ArrowRight className="w-4 h-4 ml-1" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {events.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No {activeTab} events
          </h3>
          <p className="text-gray-500">
            {activeTab === "upcoming" 
              ? "Check back later for upcoming events!" 
              : "No past events to display."
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default EventDetails;
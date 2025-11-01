import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Mindfulness Meditation Workshop",
    date: "2024-12-15",
    time: "6:00 PM - 7:30 PM",
    location: "Community Wellness Center",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Join us for a guided meditation session to reduce stress and improve focus."
  },
  {
    id: 2,
    title: "Coping with Anxiety Seminar",
    date: "2024-12-20",
    time: "5:30 PM - 7:00 PM",
    location: "Online Event",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Learn practical strategies to manage anxiety in daily life from licensed therapists."
  }
];

const pastEvents = [
  {
    id: 3,
    title: "Mental Health Awareness Conference",
    date: "2024-11-10",
    time: "9:00 AM - 4:00 PM",
    location: "City Convention Center",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Annual conference focusing on mental health awareness and community support."
  },
  {
    id: 4,
    title: "Stress Management Workshop",
    date: "2024-10-25",
    time: "3:00 PM - 5:00 PM",
    location: "Wellness Hub",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Interactive workshop teaching effective stress management techniques."
  }
];

function EventDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  
  const events = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const handleViewDetails = (event) => {
    if (activeTab === "upcoming") {
      navigate(`/event/${event.id}`);
    }
    // Past events don't redirect anywhere
  };

  const handleUpcomingEventsClick = () => {
    setActiveTab("upcoming");
  };

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
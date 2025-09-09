import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

// Sample events data (replace with your real data)
const events = [
  {
    id: 1,
    title: "Mindfulness Meditation Workshop",
    date: "2023-11-15",
    time: "6:00 PM - 7:30 PM",
    location: "Community Wellness Center",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Join us for a guided meditation session to reduce stress and improve focus."
  },
  {
    id: 2,
    title: "Coping with Anxiety Seminar",
    date: "2023-11-20",
    time: "5:30 PM - 7:00 PM",
    location: "Online Event",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
    description: "Learn practical strategies to manage anxiety in daily life from licensed therapists."
  }
];

function EventDetails() {
  const navigate = useNavigate();

  const handleViewDetails = (event) => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="events">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Upcoming Events</h1>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex-1 bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition min-w-[300px] max-w-md mx-auto md:mx-0"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col justify-between h-64">
              <div>
                <h2 className="text-lg font-semibold text-green-900 mb-2 line-clamp-1">{event.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="truncate">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
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

              <div
                className="mt-4 flex items-center text-green-600 font-medium text-sm cursor-pointer hover:text-green-700 transition"
                onClick={() => handleViewDetails(event)}
              >
                <span>View details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDetails;
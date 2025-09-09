import React, { useState } from "react";
import { Calendar, Clock, MapPin, ArrowLeft, MessageCircle, Send } from "lucide-react";

function EventDetails2({ event, onBack }) {
  const [comment, setComment] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setShowToast(true);
      setComment("");
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-green-700 mb-6 hover:text-green-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Events
        </button>

        {/* Header */}
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Event Details</h1>

        {/* Event Poster */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
          <img
            src={event.image}
            alt="Event Poster"
            className="w-full h-56 sm:h-64 object-cover"
          />
          <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Upcoming
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-4">{event.title}</h2>
          <p className="text-gray-700 mb-6">
            {event.fullDescription}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <Calendar className="w-5 h-5 text-green-600 mr-3" />
              <span className="font-medium">
                {new Date(event.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Clock className="w-5 h-5 text-green-600 mr-3" />
              <span className="font-medium">{event.time}</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 text-green-600 mr-3" />
              <span className="font-medium">{event.location}</span>
            </div>
          </div>
          
          <a
            href="https://example.com/event"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-teal-600 transition-all shadow-md"
          >
            Join Event Here
          </a>
        </div>

        {/* Comment Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
            Comments
          </h3>
          
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex items-start space-x-3">
              <div className="flex-1">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your thoughts about this event..."
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={!comment.trim()}
                className="bg-gradient-to-r from-green-600 to-teal-500 text-white p-3 rounded-xl hover:from-green-700 hover:to-teal-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center animate-fade-in">
          <div className="w-5 h-5 bg-white text-green-600 rounded-full flex items-center justify-center mr-2">
            ✓
          </div>
          Thank you for your comment!
        </div>
      )}
    </div>
  );
}

export default EventDetails2;
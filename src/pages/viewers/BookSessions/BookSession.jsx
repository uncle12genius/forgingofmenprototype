import React, { useState } from 'react';

const BookSession = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    sessionType: '',
    reason: ''
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show toast message
    setShowToast(true);
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      sessionType: '',
      reason: ''
    });

    // Hide toast after 5 seconds with wiggle animation
    setTimeout(() => {
      const toast = document.getElementById('success-toast');
      if (toast) {
        toast.classList.add('wiggle-out');
        setTimeout(() => {
          setShowToast(false);
        }, 500);
      }
    }, 5000);
  };

  const closeToast = () => {
    const toast = document.getElementById('success-toast');
    if (toast) {
      toast.classList.add('wiggle-out');
      setTimeout(() => {
        setShowToast(false);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-600 to-teal-500 py-8 px-4 flex items-center justify-center">
      {/* Horizontal Card Layout */}
      <div className="max-w-4xl w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Header/Info */}
        <div className="md:w-2/5 bg-gradient-to-b from-green-600 to-teal-500 p-8 text-white flex flex-col justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-4">
              Book Your Therapy Session
            </h1>
            <p className="text-green-100 mb-6">
              We're here to help you on your journey to better mental health and well-being.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Professional Therapists</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Confidential & Secure</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Flexible Scheduling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-3/5 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone and Session Type in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Type *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sessionType"
                      value="virtual"
                      checked={formData.sessionType === 'virtual'}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Virtual Session</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sessionType"
                      value="physical"
                      checked={formData.sessionType === 'physical'}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Physical Session</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Reason - Full width */}
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Therapy *
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Please share what brings you to therapy today..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-teal-500 text-white py-3 px-4 rounded-md hover:from-green-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-medium transition duration-200"
            >
              Book Session
            </button>
          </form>
        </div>
      </div>

      {/* Modal Overlay Toast */}
      {showToast && (
        <div className="fixed inset-0 bg-transparent bg-opacity-100 flex items-center justify-center p-4 z-50">
          <div 
            id="success-toast"
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-scaleIn"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h3>
            
            <p className="text-gray-600 mb-6">
              We've received your booking request. Our team will contact you within 24 hours to schedule your session.
            </p>
            
            <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-teal-500 rounded-full mx-auto mb-4"></div>
            
            <p className="text-sm text-gray-500">
              You'll receive a confirmation email shortly.
            </p>
            
            <button
              onClick={closeToast}
              className="mt-6 text-green-600 hover:text-green-700 font-medium text-sm transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes wiggleOut {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          25% {
            transform: scale(1.05) rotate(3deg);
          }
          50% {
            transform: scale(1.05) rotate(-3deg);
          }
          75% {
            transform: scale(0.95) rotate(2deg);
          }
          100% {
            transform: scale(0) rotate(0);
            opacity: 0;
          }
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        
        .wiggle-out {
          animation: wiggleOut 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BookSession;
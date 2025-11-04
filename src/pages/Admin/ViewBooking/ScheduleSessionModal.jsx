import React, { useState } from 'react';

export default function ScheduleSessionModal({ user, onClose, onSchedule }) {
  const [scheduleData, setScheduleData] = useState({
    date: '',
    time: '',
    duration: '60',
    notes: '',
    meetingType: 'virtual',
    meetingLink: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSchedule({
      ...scheduleData,
      userId: user.id || user._id,
      userName: user.user?.name || user.userName
    });
  };

  const handleChange = (e) => {
    setScheduleData({
      ...scheduleData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex shadow-2xl">
        {/* Left Side - Client Information */}
        <div className="w-2/5 bg-gradient-to-b from-green-600 to-teal-500 text-white p-6 flex flex-col">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Schedule Session</h2>
            
            {/* Client Info Card */}
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm mb-4">
              <div className="text-center mb-3">
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg font-bold text-white">
                    {(user.user?.name?.charAt(0) || user.userName?.charAt(0) || 'U').toUpperCase()}
                  </span>
                </div>
                <h3 className="font-bold text-sm mb-1">{user.user?.name || user.userName}</h3>
                <p className="text-green-100 text-xs">{user.user?.email || user.email}</p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center">
                  <svg className="w-3 h-3 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{user.user?.phone || user.phone || 'No phone'}</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-3 h-3 mr-2 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>{user.sessionType || 'Individual Therapy'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Therapy Reason */}
          <div>
            <h4 className="font-semibold text-green-100 text-sm mb-2">Therapy Focus</h4>
            <p className="text-green-200 text-xs leading-relaxed">
              {user.reason || user.therapyReason || 'No specific reason provided'}
            </p>
          </div>
        </div>

        {/* Right Side - Schedule Form */}
        <div className="w-3/5 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-800">Schedule Details</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4">
              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={scheduleData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Time *</label>
                  <input
                    type="time"
                    name="time"
                    value={scheduleData.time}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              {/* Duration and Meeting Type */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Duration *</label>
                  <select
                    name="duration"
                    value={scheduleData.duration}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">120 minutes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Meeting Type *</label>
                  <select
                    name="meetingType"
                    value={scheduleData.meetingType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="virtual">Virtual Meeting</option>
                    <option value="in-person">In-Person</option>
                    <option value="phone">Phone Call</option>
                  </select>
                </div>
              </div>

              {/* Meeting Link (Conditional) */}
              {scheduleData.meetingType === 'virtual' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Meeting Link *</label>
                  <input
                    type="url"
                    name="meetingLink"
                    value={scheduleData.meetingLink}
                    onChange={handleChange}
                    placeholder="https://meet.google.com/xxx-xxxx-xxx"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              )}

              {/* Session Notes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Session Notes</label>
                <textarea
                  name="notes"
                  value={scheduleData.notes}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Add any specific notes or instructions for this session..."
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                />
              </div>

              {/* Session Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 text-sm mb-2">Session Summary</h4>
                <div className="text-xs text-green-700 space-y-1">
                  <p><strong>Date:</strong> {scheduleData.date || 'Not selected'}</p>
                  <p><strong>Time:</strong> {scheduleData.time || 'Not selected'}</p>
                  <p><strong>Duration:</strong> {scheduleData.duration} minutes</p>
                  <p><strong>Type:</strong> {scheduleData.meetingType}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 p-4 border-t border-gray-200 bg-gray-50">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-lg hover:from-green-700 hover:to-teal-600 transition-colors shadow-lg text-sm font-semibold"
              >
                Schedule Session
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
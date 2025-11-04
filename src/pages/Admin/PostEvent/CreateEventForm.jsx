import React, { useState } from 'react';

export default function CreateEventForm({ onSubmit, loading }) {
  const [form, setForm] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    meetingLink: '',
    description: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setForm({ ...form, image: null });
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    // Reset form
    setForm({
      title: '',
      date: '',
      time: '',
      venue: '',
      meetingLink: '',
      description: '',
      image: null,
    });
    setImagePreview(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload Section */}
        <div className="text-center">
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Event Banner Image
          </label>
          {imagePreview ? (
            <div className="relative inline-block">
              <img 
                src={imagePreview} 
                alt="Event banner preview" 
                className="w-64 h-40 object-cover rounded-lg shadow-md border-2 border-green-200"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
              >
                ×
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-green-300 rounded-2xl p-8 bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="event-image"
              />
              <label htmlFor="event-image" className="cursor-pointer">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-green-700 font-medium">Click to upload event banner</p>
                  <p className="text-green-500 text-sm mt-1">PNG, JPG, JPEG up to 5MB</p>
                </div>
              </label>
            </div>
          )}
        </div>

        {/* Form Fields */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Event Title *</label>
          <input 
            name="title" 
            value={form.title} 
            onChange={onChange} 
            required 
            placeholder="Enter the event title"
            className="w-full border border-green-200 p-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition-all duration-200 placeholder-green-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Event Date *</label>
            <input 
              type="date" 
              name="date" 
              value={form.date} 
              onChange={onChange} 
              required 
              className="w-full border border-green-200 p-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Event Time *</label>
            <input 
              type="time" 
              name="time" 
              value={form.time} 
              onChange={onChange} 
              required 
              className="w-full border border-green-200 p-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Venue/Location *</label>
          <input 
            name="venue" 
            value={form.venue} 
            onChange={onChange} 
            required 
            placeholder="Enter the event venue or location"
            className="w-full border border-green-200 p-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition-all duration-200 placeholder-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Meeting Link (Virtual Events)</label>
          <input 
            type="url"
            name="meetingLink" 
            value={form.meetingLink} 
            onChange={onChange} 
            placeholder="https://meet.google.com/xxx-xxxx-xxx"
            className="w-full border border-green-200 p-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition-all duration-200 placeholder-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Event Description *</label>
          <textarea 
            name="description" 
            value={form.description} 
            onChange={onChange} 
            required
            rows="6"
            placeholder="Describe the event, agenda, speakers, and what attendees can expect..."
            className="w-full border border-green-200 p-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition-all duration-200 placeholder-green-400 resize-none"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            type="submit" 
            disabled={loading} 
            className="flex-1 bg-gradient-to-r from-green-600 to-teal-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-teal-600 disabled:opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            {loading ? 'Creating Event...' : 'Create Event'}
          </button>
        </div>
      </form>
    </div>
  );
}
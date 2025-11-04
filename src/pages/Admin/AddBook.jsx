import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from '../../hooks/useBooks'; 

export default function AddBook() {
  const { createBook, loading } = useBooks();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    price: '',
    image: null,
  });
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      
      // Create image preview
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

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createBook(form);
      navigate('/admin');
    } catch (err) {
      console.error(err);
      setError(err?.message || 'Failed to add book');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-700 to-teal-600 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Add New Book</h1>
          <p className="text-green-100 text-lg">
            Fill in the details below to add a new book to the collection
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={submit} className="space-y-6">
            {/* Image Upload Section */}
            <div className="text-center">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Book Cover Image
              </label>
              
              {imagePreview ? (
                <div className="relative inline-block">
                  <img 
                    src={imagePreview} 
                    alt="Book cover preview" 
                    className="w-48 h-60 object-cover rounded-lg shadow-md border-2 border-green-200"
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
                    id="book-image"
                  />
                  <label htmlFor="book-image" className="cursor-pointer">
                    <div className="text-center">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-green-700 font-medium">Click to upload book cover</p>
                      <p className="text-green-500 text-sm mt-1">PNG, JPG, JPEG up to 5MB</p>
                    </div>
                  </label>
                </div>
              )}
            </div>

            {/* Title Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Book Title *
              </label>
              <input 
                name="title" 
                value={form.title} 
                onChange={onChange} 
                required 
                placeholder="Enter the book title"
                className="w-full border border-green-200 p-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition-all duration-200 placeholder-green-400"
              />
            </div>

            {/* Author Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Author Name *
              </label>
              <input 
                name="author" 
                value={form.author} 
                onChange={onChange} 
                required 
                placeholder="Enter the author's name"
                className="w-full border border-green-200 p-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition-all duration-200 placeholder-green-400"
              />
            </div>

            {/* Price Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-green-600 font-semibold">$</span>
                </div>
                <input 
                  type="number"
                  name="price" 
                  value={form.price} 
                  onChange={onChange} 
                  required 
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full border border-green-200 p-4 pl-10 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50 transition-all duration-200 placeholder-green-400"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="text-green-500 text-sm">USD</span>
                </div>
              </div>
              <p className="text-green-600 text-sm mt-2 font-medium">
                Enter the price in US dollars
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button 
                type="submit" 
                disabled={loading} 
                className="flex-1 bg-gradient-to-r from-green-600 to-teal-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-teal-600 disabled:opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding Book...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Book
                  </>
                )}
              </button>
              
              <button 
                type="button"
                onClick={() => navigate('/admin')}
                className="px-8 py-4 rounded-xl font-semibold border-2 border-green-200 text-green-700 hover:bg-green-50 transition-all duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-green-200 text-sm">
            All fields marked with * are required
          </p>
        </div>
      </div>
    </div>
  );
}
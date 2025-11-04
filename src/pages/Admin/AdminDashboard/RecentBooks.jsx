import React from "react";
import { Link } from "react-router-dom";

export default function RecentBooks({ books, loading }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recent Books</h2>
        <Link
          to="/admin/add-book"
          className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center"
        >
          View all
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {books.length > 0 ? (
            books.slice(0, 5).map((book, i) => (
              <div key={i} className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">${book.price || '0.00'}</p>
                  <p className="text-xs text-gray-500">Available</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-gray-500">No books added yet</p>
              <p className="text-gray-400 text-sm mt-1">Start by adding your first book</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
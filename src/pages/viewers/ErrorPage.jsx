import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4 py-8">
      <div className="max-w-sm w-full text-center">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <div className="bg-gradient-to-r from-green-600 to-teal-500 p-3 rounded-full">
            <AlertCircle className="w-12 h-12 text-white" />
          </div>
        </div>
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500 mb-3">
          404
        </h1>
        
        {/* Message */}
        <h2 className="text-xl font-bold text-green-800 mb-2">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-6 text-base">
          The page you're looking for doesn't exist.
        </p>
        
        {/* Home Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg shadow-sm hover:from-green-700 hover:to-teal-600 transition-all"
        >
          <Home className="w-4 h-4 mr-1.5" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
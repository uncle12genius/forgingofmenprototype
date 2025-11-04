import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, toggleSidebar, currentPath }) {

  const isActiveLink = (path) => {
    return currentPath === path;
  };

  const menuItems = [
    {
      path: "/admin",
      label: "Dashboard",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      path: "/admin/add-book",
      label: "E-Resources",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      path: "/admin/post-event",
      label: "Events",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      path: "/admin/booking",
      label: "Therapy Booking",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ];

  return (
    <div 
      className={`bg-gradient-to-b from-green-800 to-teal-700 shadow-2xl transition-all duration-300 ease-in-out ${
        sidebarOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-6 border-b border-green-600">
        {sidebarOpen && (
          <div>
            <h2 className="text-xl font-bold text-white">Admin Panel</h2>
            <p className="text-green-200 text-sm mt-1">Welcome back</p>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-green-700 transition-colors text-white"
        >
          {sidebarOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-4 rounded-xl transition-all duration-200 group ${
                  isActiveLink(item.path) 
                    ? "bg-white text-green-700 shadow-lg" 
                    : "text-green-100 hover:bg-green-700 hover:text-white hover:shadow-md"
                }`}
              >
                {item.icon}
                {sidebarOpen && (
                  <span className="ml-4 font-semibold">{item.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      
    </div>
  );
}
import React from "react";
import { Link } from "react-router-dom";

export default function QuickActions() {
  const actions = [
    {
      to: "/admin/add-book",
      title: "Add New Book",
      description: "Add to E-Resources",
      gradient: "from-green-500 to-teal-500",
      hoverGradient: "from-green-600 to-teal-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
    {
      to: "/admin/post-event",
      title: "Create Event",
      description: "Schedule new event",
      gradient: "from-teal-500 to-green-500",
      hoverGradient: "from-teal-600 to-green-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      to: "/admin/booking",
      title: "Manage Bookings",
      description: "View therapy sessions",
      gradient: "from-green-600 to-teal-600",
      hoverGradient: "from-green-700 to-teal-700",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.to}
            className={`flex items-center p-4 bg-gradient-to-r ${action.gradient} text-white rounded-xl hover:bg-gradient-to-r ${action.hoverGradient} transition-all duration-200 shadow-lg hover:shadow-xl group`}
          >
            <div className="p-3 bg-white bg-opacity-20 rounded-lg mr-4">
              {action.icon}
            </div>
            <div>
              <h3 className="font-semibold">{action.title}</h3>
              <p className="text-green-100 text-sm">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
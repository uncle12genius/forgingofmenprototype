import React from "react";
import { Link } from "react-router-dom";
import StatsCards from "./StatsCards";
import RecentBooks from "./RecentBooks";
import QuickActions from "./QuickActions";

export default function DashboardContent({ sidebarOpen, toggleSidebar, books, loading }) {
  const stats = {
    totalBooks: books.length,
    totalEvents: 0,
    totalBookings: 0,
    pendingBookings: 0
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        {/* Header with toggle button for mobile */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={toggleSidebar}
            className="p-3 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome back, Evans! 👋</h1>
          <p className="text-gray-600 text-lg">Here's what's happening with your platform today.</p>
        </div>

        {/* Quick Stats */}
        <StatsCards stats={stats} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentBooks books={books} loading={loading} />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
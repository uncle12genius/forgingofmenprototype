import React, { useEffect, useState } from 'react';
import useBookings from '../../../hooks/useBookings';
import UserDetailsModal from './UserDetailsModal';
import ScheduleSessionModal from './ScheduleSessionModal';

export default function ViewBookings() {
  const { fetchBookings, updateBookingStatus, scheduleSession } = useBookings();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  
  useEffect(() => {
    let mounted = true;
    
    async function load() {
      setLoading(true);
      try {
        const res = await fetchBookings();
        if (mounted) {
          setBookings(res ?? []);
        }
      } catch (err) {
        console.error('Error loading bookings:', err);
        if (mounted) {
          setError('Failed to fetch bookings');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }
    
    load();
    
    // Cleanup function to prevent state updates after unmount
    return () => {
      mounted = false;
    };
  }, []); // Empty dependency array - runs only once on mount

  const changeStatus = async (id, status) => {
    try {
      await updateBookingStatus(id, { status });
      // Update local state to reflect the change
      setBookings(prev => prev.map(b => 
        (b.id === id || b._id === id) ? { ...b, status } : b
      ));
    } catch (err) {
      console.error(err);
      setError('Failed to update booking status');
    }
  };

  const handleViewUserDetails = (booking) => {
    setSelectedUser(booking);
    setShowUserModal(true);
  };

  const handleScheduleSession = (booking) => {
    setSelectedUser(booking);
    setShowScheduleModal(true);
  };

  const handleCloseModals = () => {
    setShowUserModal(false);
    setShowScheduleModal(false);
    setSelectedUser(null);
  };

  const handleConfirmSchedule = async (scheduleData) => {
    try {
      await scheduleSession(scheduleData);
      // You can add a success message or update the booking status here
      console.log('Session scheduled:', scheduleData);
      handleCloseModals();
    } catch (err) {
      console.error('Error scheduling session:', err);
      setError('Failed to schedule session');
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-r from-green-700 to-teal-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Loading bookings...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-gradient-to-r from-green-700 to-teal-600 flex items-center justify-center">
      <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl max-w-md">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-700 to-teal-600 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Therapy Session Bookings</h1>
          <p className="text-green-100 text-lg">
            Manage and schedule therapy sessions with clients
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-xl mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.filter(b => b.status === 'pending').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-xl mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.filter(b => b.status === 'approved').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-xl mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-gray-900">
                  {bookings.filter(b => b.status === 'rejected').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">All Bookings</h2>
          </div>

          {bookings.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-gray-500 text-lg">No bookings found</p>
              <p className="text-gray-400 mt-2">When clients book sessions, they will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Session Type</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Booking Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking, index) => (
                    <tr key={booking.id ?? booking._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-green-500 to-teal-400 rounded-full flex items-center justify-center text-white font-semibold">
                            {booking.user?.name?.charAt(0) || booking.userName?.charAt(0) || 'U'}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {booking.user?.name || booking.userName || 'Unknown User'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.user?.email || booking.email || '—'}</div>
                        <div className="text-sm text-gray-500">{booking.user?.phone || booking.phone || '—'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.sessionTitle || booking.session?.title || '—'}</div>
                        <div className="text-sm text-gray-500">{booking.sessionType || 'Individual'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(booking.date || booking.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          booking.status === 'approved' 
                            ? 'bg-green-100 text-green-800' 
                            : booking.status === 'rejected' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status || 'pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewUserDetails(booking)}
                            className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-lg transition-colors"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => handleScheduleSession(booking)}
                            className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-lg transition-colors"
                          >
                            Schedule
                          </button>
                          <button
                            onClick={() => changeStatus(booking.id ?? booking._id, 'approved')}
                            className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-lg transition-colors"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => changeStatus(booking.id ?? booking._id, 'rejected')}
                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-lg transition-colors"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {showUserModal && selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={handleCloseModals}
          onSchedule={() => {
            setShowUserModal(false);
            setShowScheduleModal(true);
          }}
        />
      )}

      {showScheduleModal && selectedUser && (
        <ScheduleSessionModal
          user={selectedUser}
          onClose={handleCloseModals}
          onSchedule={handleConfirmSchedule}
        />
      )}
    </div>
  );
}
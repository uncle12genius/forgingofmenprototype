import React, { useEffect, useState } from 'react';
import useBookings from '../../hooks/useBookings'; 

export default function ViewBookings() {
  const { fetchBookings, updateBookingStatus } = useBookings();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        const res = await fetchBookings();
        if (mounted) setBookings(res ?? []);
      } catch (err) {
        console.error(err);
        if (mounted) setError('Failed to fetch bookings');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [fetchBookings]);

  const changeStatus = async (id, status) => {
    try {
      await updateBookingStatus(id, { status });
      setBookings(prev => prev.map(b => (b.id === id || b._id === id) ? { ...b, status } : b));
    } catch (err) {
      console.error(err);
      
    }
  };

  if (loading) return (
    <div className="p-6 flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-3">Loading bookings...</span>
    </div>
  );
  
  if (error) return (
    <div className="p-6">
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
        {error}
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Therapy Bookings</h1>

      {bookings.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-lg">No bookings found.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left">
                <th className="p-4 font-semibold text-gray-700 border-b">#</th>
                <th className="p-4 font-semibold text-gray-700 border-b">User</th>
                <th className="p-4 font-semibold text-gray-700 border-b">Session</th>
                <th className="p-4 font-semibold text-gray-700 border-b">Date</th>
                <th className="p-4 font-semibold text-gray-700 border-b">Status</th>
                <th className="p-4 font-semibold text-gray-700 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={b.id ?? b._id} className="hover:bg-gray-50">
                  <td className="p-4 border-b">{i + 1}</td>
                  <td className="p-4 border-b">{b.user?.name ?? b.userName ?? '—'}</td>
                  <td className="p-4 border-b">{b.sessionTitle ?? b.session?.title ?? '—'}</td>
                  <td className="p-4 border-b">{new Date(b.date).toLocaleString()}</td>
                  <td className="p-4 border-b">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      b.status === 'approved' ? 'bg-green-100 text-green-800' :
                      b.status === 'rejected' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {b.status ?? 'pending'}
                    </span>
                  </td>
                  <td className="p-4 border-b">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => changeStatus(b.id ?? b._id, 'approved')} 
                        className="px-3 py-1 rounded bg-green-600 text-white text-sm hover:bg-green-700 transition-colors"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => changeStatus(b.id ?? b._id, 'rejected')} 
                        className="px-3 py-1 rounded bg-red-600 text-white text-sm hover:bg-red-700 transition-colors"
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
  );
}
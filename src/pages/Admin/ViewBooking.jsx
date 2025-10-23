import React, { useEffect, useState } from 'react';

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

  if (loading) return <div className="p-6">Loading bookings...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">View Bookings</h1>

      {bookings.length === 0 ? <p>No bookings found.</p> : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">#</th>
              <th className="p-2">User</th>
              <th className="p-2">Session</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={b.id ?? b._id} className="border-b">
                <td className="p-2 align-top">{i + 1}</td>
                <td className="p-2 align-top">{b.user?.name ?? b.userName ?? '—'}</td>
                <td className="p-2 align-top">{b.sessionTitle ?? b.session?.title ?? '—'}</td>
                <td className="p-2 align-top">{new Date(b.date).toLocaleString()}</td>
                <td className="p-2 align-top">{b.status ?? 'pending'}</td>
                <td className="p-2 align-top">
                  <button onClick={() => changeStatus(b.id ?? b._id, 'approved')} className="mr-2 px-2 py-1 rounded bg-green-600 text-white">Approve</button>
                  <button onClick={() => changeStatus(b.id ?? b._id, 'rejected')} className="px-2 py-1 rounded bg-red-600 text-white">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

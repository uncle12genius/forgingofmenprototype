import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { useBooks } from "./hooks/useBooks";
// import { useEvents } from "./hooks/useEvents";


export default function AdminDashboard() {
  const { listBooks } = useBooks();
  const { listEvents } = useEvents();

  const [books, setBooks] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        const b = await listBooks();
        const e = await listEvents();
        if (mounted) {
          setBooks(b ?? []);
          setEvents(e ?? []);
        }
      } catch (err) {
      
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [listBooks, listEvents]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>

      <div className="flex gap-4 mb-6">
        <Link to="add-book" className="px-4 py-2 rounded bg-blue-600 text-white">Add Book</Link>
        <Link to="post-event" className="px-4 py-2 rounded bg-green-600 text-white">Post Event</Link>
        <Link to="bookings" className="px-4 py-2 rounded bg-gray-700 text-white">View Bookings</Link>
      </div>

      {loading ? <p>Loading summary...</p> : (
        <div className="grid grid-cols-2 gap-6">
          <section className="border p-4 rounded">
            <h2 className="font-medium mb-2">Recent Books</h2>
            {books.length === 0 ? <p>No books yet.</p> : (
              <ul>
                {books.slice(0,5).map(b => (
                  <li key={b.id ?? b._id} className="py-1">
                    <strong>{b.title}</strong> — <span>{b.author}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="border p-4 rounded">
            <h2 className="font-medium mb-2">Upcoming Events</h2>
            {events.length === 0 ? <p>No events yet.</p> : (
              <ul>
                {events.slice(0,5).map(ev => (
                  <li key={ev.id ?? ev._id} className="py-1">
                    <strong>{ev.title}</strong> — <span>{new Date(ev.date).toLocaleDateString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useEvents from '../../hooks/useEvents';

export default function PostEvent() {
  const { createEvent, loading } = useEvents();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });
  const [error, setError] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createEvent(form);
      // optional: toast
      navigate('/admin');
    } catch (err) {
      console.error(err);
      setError(err?.message || 'Failed to post event');
    }
  };

  return (
    <div className="p-6 max-w-lg">
      <h1 className="text-xl font-semibold mb-4">Post Event</h1>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm">Title</label>
          <input name="title" value={form.title} onChange={onChange} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Date</label>
          <input type="date" name="date" value={form.date} onChange={onChange} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Location</label>
          <input name="location" value={form.location} onChange={onChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm">Description</label>
          <textarea name="description" value={form.description} onChange={onChange} className="w-full border p-2 rounded" />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <div>
          <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-green-600 text-white">
            {loading ? 'Posting...' : 'Post Event'}
          </button>
        </div>
      </form>
    </div>
  );
}

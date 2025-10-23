import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useBooks from '../../hooks/useBooks';

export default function AddBook() {
  const { createBook, loading } = useBooks();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
  });
  const [error, setError] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createBook(form);
      // optional: toast success
      navigate('/admin'); // back to dashboard or list
    } catch (err) {
      console.error(err);
      setError(err?.message || 'Failed to add book');
    }
  };

  return (
    <div className="p-6 max-w-lg">
      <h1 className="text-xl font-semibold mb-4">Add Book</h1>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm">Title</label>
          <input name="title" value={form.title} onChange={onChange} required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Author</label>
          <input name="author" value={form.author} onChange={onChange} required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Description</label>
          <textarea name="description" value={form.description} onChange={onChange} className="w-full border p-2 rounded" />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <div>
          <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-blue-600 text-white">
            {loading ? 'Adding...' : 'Add Book'}
          </button>
        </div>
      </form>
    </div>
  );
}


import { useState } from 'react';
import * as booksApi from '../api/books';

export default function useBooks() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBook = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const res = await booksApi.addBook(payload);
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const listBooks = async (params) => {
    try {
      const res = await booksApi.fetchBooks(params);
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  return { createBook, listBooks, loading, error };
}

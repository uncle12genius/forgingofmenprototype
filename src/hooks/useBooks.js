import { useState } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

export default function useBooks() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAuthToken = () => {
    return localStorage.getItem('adminToken');
  };

  const listBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/books`);
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch books');
      }
      
      return result.data;
    } catch (error) {
      console.error("Error fetching books:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createBook = async (bookData) => {
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('title', bookData.title);
      formData.append('author', bookData.author);
      formData.append('price', bookData.price);
      formData.append('description', bookData.description || '');
      
      if (bookData.image) {
        formData.append('image', bookData.image);
      }

      const token = getAuthToken();
      const response = await fetch(`${API_BASE_URL}/books`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to create book');
      }
      
      return result.data;
    } catch (error) {
      console.error("Error creating book:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    listBooks,
    createBook,
    loading,
    error
  };
}
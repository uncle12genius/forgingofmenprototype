import { useState } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

export default function useBooks() {
  const [loading, setLoading] = useState(false);

  const listBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/books`);
      const result = await response.json();
      
      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createBook = async (bookData) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', bookData.title);
      formData.append('author', bookData.author);
      formData.append('price', bookData.price);
      formData.append('description', bookData.description || '');
      
      if (bookData.image) {
        formData.append('image', bookData.image);
      }

      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/books`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const result = await response.json();
      
      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    listBooks,
    createBook,
    loading
  };
}
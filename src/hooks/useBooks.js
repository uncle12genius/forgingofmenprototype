import { useState } from 'react';

export default function useBooks() {
  const [loading, setLoading] = useState(false);

  const listBooks = async () => {
    setLoading(true);
    try {
      // Mock data - replace with actual API call
      return [
        { id: 1, title: "Book 1", author: "Author 1" },
        { id: 2, title: "Book 2", author: "Author 2" }
      ];
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const createBook = async (bookData) => {
    setLoading(true);
    try {
      // Mock API call - replace with actual implementation
      console.log("Creating book:", bookData);
      return { success: true };
    } catch (error) {
      throw new Error("Failed to create book");
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
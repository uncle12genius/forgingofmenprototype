import { useState } from 'react';

export default function useEvents() {
  const [loading, setLoading] = useState(false);

  const createEvent = async (eventData) => {
    setLoading(true);
    try {
      // Mock API call - replace with actual implementation
      console.log("Creating event:", eventData);
      return { success: true };
    } catch (error) {
      throw new Error("Failed to create event");
    } finally {
      setLoading(false);
    }
  };

  return {
    createEvent,
    loading
  };
}
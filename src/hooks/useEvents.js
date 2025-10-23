
import { useState, useEffect } from "react";

export function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents([
        { id: 1, name: "Event Alpha" },
        { id: 2, name: "Event Beta" },
      ]);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return { events, loading, setEvents };
}

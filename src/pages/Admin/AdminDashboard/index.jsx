import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useBooks from "../../../hooks/useBooks"; 
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";

export default function AdminDashboard() {
  const { listBooks, loading } = useBooks();
  const [books, setBooks] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    async function loadBooks() {
      try {
        const data = await listBooks();
        setBooks(data || []);
      } catch (err) {
        console.error("Error loading books:", err);
      }
    }
    loadBooks();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar}
        currentPath={location.pathname}
      />
      
      <DashboardContent 
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        books={books}
        loading={loading}
      />
    </div>
  );
}
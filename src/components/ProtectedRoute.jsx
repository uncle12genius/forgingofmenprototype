// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

  // If not logged in, redirect to login
  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  // Otherwise, allow access
  return children;
}

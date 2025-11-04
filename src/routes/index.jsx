import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './publicRoutes';
import AdminRoutes from './adminRoutes';
import ProtectedRoute from '../components/ProtectedRoute';
import ErrorBoundary from '../components/ErrorBoundary';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/*" element={<PublicRoutes />} />
      
      {/* Protected Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <ErrorBoundary>
              <AdminRoutes />
            </ErrorBoundary>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
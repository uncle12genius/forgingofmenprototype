import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AddBook from '../pages/Admin/AddBook';
import PostEvent from '../pages/Admin/PostEvent';
import ViewBooking from '../pages/Admin/ViewBooking';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route index element={<AdminDashboard />} />
      <Route path="add-book" element={<AddBook />} />
      <Route path="post-event" element={<PostEvent />} />
      <Route path="booking" element={<ViewBooking />} />
    </Routes>
  );
};

export default AdminRoutes;
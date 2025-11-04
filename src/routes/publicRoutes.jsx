import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/viewers/Home';
import AboutUs from '../pages/viewers/AboutUs';
import EventDetails from '../pages/viewers/EventsPage/EventDetails';
import EventDetails2 from '../pages/viewers/EventsPage/EventDetails2';
import Approach from '../pages/viewers/Approach';
import Resources from '../pages/viewers/E-Resources/Resources';
import BookSession from '../pages/viewers/BookSessions/BookSession';
import ErrorPage from '../pages/viewers/ErrorPage';
import AdminLogin from '../pages/Admin/AdminLogin';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <AboutUs />
            </section>
            <section id="events">
              <EventDetails />
            </section>
            <section id="approach">
              <Approach />
            </section>
          </>
        }
      />

      <Route path="/event/:id" element={<EventDetails2 />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/book-session" element={<BookSession />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default PublicRoutes;
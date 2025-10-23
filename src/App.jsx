// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/viewers/Home";
import AboutUs from "./pages/viewers/AboutUs";
import EventDetails from "./pages/viewers/EventsPage/EventDetails";
import EventDetails2 from "./pages/viewers/EventsPage/EventDetails2";
import Resources from "./pages/viewers/E-Resources/Resources";
import ErrorPage from "./pages/viewers/ErrorPage";
import Footer from "./components/Footer";

import AdminLogin from "./pages/Admin/AdminLogin";       // <-- exact filename/casing
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddBook from "./pages/Admin/AddBook";
import PostEvent from "./pages/Admin/PostEvent";
import ViewBooking from "./pages/Admin/ViewBooking";   // <-- exact filename/casing

import ProtectedRoute from "./components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

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
              </>
            }
          />

          <Route path="/event/:id" element={<EventDetails2 />} />
          <Route path="/resources" element={<Resources />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected admin area */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <Routes>
                    <Route index element={<AdminDashboard />} />
                    <Route path="add-book" element={<AddBook />} />
                    <Route path="post-event" element={<PostEvent />} />
                    <Route path="booking" element={<ViewBooking />} />
                  </Routes>
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

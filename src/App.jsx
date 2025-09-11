
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/viewers/Home";
import AboutUs from "./pages/viewers/AboutUs";
import EventDetails from "./pages/viewers/EventsPage/EventDetails";
import EventDetails2 from "./pages/viewers/EventsPage/EventDetails2";
import Resources from "./pages/viewers/E-Resources/Resources";

import ErrorPage from "./pages/viewers/ErrorPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Main landing page */}
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

          {/* Event details page */}
          <Route path="/event/:id" element={<EventDetails2 />} />
          <Route path="/Resources" element={<Resources />} />
          {/* <Route path="/book" element={<BookSession />} /> */}
          {/* Catch-all route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

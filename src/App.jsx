import React, { useState } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/viewers/Home";
import AboutUs from "./pages/viewers/AboutUs";
import EventDetails from "./pages/viewers/EventsPage/EventDetails";
import Footer from "./components/Footer";

const App = () => {
  const [viewingEventDetails, setViewingEventDetails] = useState(false);

  return (
    <div className="App">
      <Navbar />

      {!viewingEventDetails ? (
        <>
          <div id="home"><Home /></div>
          <div id="about"><AboutUs /></div>
          <div id="events"><EventDetails /></div>
          
        </>
      ) : (
        <EventDetails />
      )}

      <Footer />
    </div>
  );
};

export default App;

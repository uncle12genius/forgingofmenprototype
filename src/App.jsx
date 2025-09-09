import React, { useState } from 'react'
import Navbar from './components/NavBar'
import Home from './pages/viewers/Home'
import AboutUs from './pages/viewers/AboutUs'
import EventDetails from './pages/viewers/EventsPage/EventDetails'
import Footer from './components/Footer'

const App = () => {
  const [viewingEventDetails, setViewingEventDetails] = useState(false);

  const handleViewEventDetails = (isViewing) => {
    setViewingEventDetails(isViewing);
  };

  return (
    <div className='App'>
      {/* Navigation Bar - Always visible */}
      <Navbar/>
      
      {/* Main Content - Conditionally render based on viewing state */}
      {!viewingEventDetails ? (
        <>
          <Home/>
          <AboutUs/>
          <EventDetails onViewEventDetails={handleViewEventDetails}/>
        </>
      ) : (
        <EventDetails onViewEventDetails={handleViewEventDetails}/>
      )}
      
      {/* Footer - Always visible */}
      <Footer/>
    </div>
  )
}

export default App
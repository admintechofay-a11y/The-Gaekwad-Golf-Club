import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Course from './pages/Course.jsx';
import Holes from './pages/Holes.jsx';
import Booking from './pages/Booking.jsx';
import Academy from './pages/Academy.jsx';
import Membership from './pages/Membership.jsx';
import Dining from './pages/Dining.jsx';
import News from './pages/News.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Packages from './pages/Packages.jsx';
import Tour from './pages/Tour.jsx';
import RoyalConcierge from './components/layout/RoyalConcierge.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/holes" element={<Holes />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/members" element={<Navigate to="/membership" replace />} />
        <Route path="/shop" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Persistent Royal Concierge Floating Widget */}
      <RoyalConcierge />
    </BrowserRouter>
  );
}

App.propTypes = {};

export default App;

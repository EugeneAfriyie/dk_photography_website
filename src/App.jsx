// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
// import Test from './Pages/Home/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery /> } /> {/* Placeholder */}
        <Route path="/services" element={} /> {/* Placeholder */}
        <Route path="/contact" element={<Contact /> } /> {/* Placeholder */}
      </Routes>
    </Router>
  );
};

export default App;
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/Components/About';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Home/Components/Services';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery /> } /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contact /> } /> 
      </Routes>
    </Router>
  );
};

export default App;
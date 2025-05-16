// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Test from './Pages/Home/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<div>Gallery Page</div>} /> {/* Placeholder */}
        <Route path="/services" element={<div>Services Page</div>} /> {/* Placeholder */}
        <Route path="/contact" element={<div>Contact Page</div>} /> {/* Placeholder */}
      </Routes>
    </Router>
  );
};

export default App;
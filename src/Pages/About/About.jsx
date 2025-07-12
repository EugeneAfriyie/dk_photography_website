// src/components/About.jsx
import React from 'react';
import HeroCarousel from './Components/HeroCarousel';
import IntroductionSection from './Components/IntroductionSection';
import MissionSection from './Components/MissionSection';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <HeroCarousel />
        <IntroductionSection />

        <MissionSection />
      </div>
    </div>
  );
};

export default About;
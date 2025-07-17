import React, { useState, useEffect, Component } from 'react';
import HeroCarousel from './Components/HeroCarousel';
import IntroductionSection from './Components/IntroductionSection';
import MissionSection from './Components/MissionSection';
import Header from '../Home/Components/Header';
import LocationSection from './Components/LocationSection';
import Footer from '../../Components/Footer';
import Ads from './Components/Ads';
import { motion } from 'framer-motion';
import GallerySection from './Components/GallerySection';
import ServicesSection from './Components/ServicesSection';
import TestimonialSection from './Components/TestimonialSection';
import Testmonial from '../Home/Components/Testmonial';
import { galleryImages, locationsData, servicesData, testimonials } from '../Home/data';
import GalleryPreview from '../Home/Components/PageGallery';
import Services from '../Home/Components/Services';
import ToTop from './Components/ToTop';
import Studio_Location from '../Home/Studio_Location';


class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div className="text-white text-center py-8">Something went wrong.</div>;
    }
    return this.props.children;
  }
}

const About = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [Show, setshow] = useState(2000);




  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 overflow-hidden">
         <ErrorBoundary>
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          </ErrorBoundary>

      <div className="max-w-7xl mx-auto">
        <HeroCarousel />
        <IntroductionSection />
        <MissionSection />
        <LocationSection />
        <Ads />

         <ErrorBoundary>
                      <Services servicesData={servicesData} />
                    </ErrorBoundary>
       

           <ErrorBoundary>
          <GalleryPreview galleryImages={galleryImages}/>
         </ErrorBoundary>

         <ErrorBoundary>
          <Studio_Location locations={locationsData} />
        </ErrorBoundary>


           <Testmonial
            items={testimonials}
            interval={7000}
            autoPlay={true}
          />
        <Footer />
      </div>

   <ToTop Showtop={Show} />
    </div>
  );
};

export default About;
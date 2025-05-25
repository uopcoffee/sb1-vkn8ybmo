import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import WhyChoose from '../components/home/WhyChoose';
import Testimonial from '../components/home/Testimonial';
import BottomCTA from '../components/home/BottomCTA';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Ballast Financial – Startup CFO & Accounting Services"
        description="Outsourced CFO, accounting, and finance operations for venture-backed startups. Ballast Financial streamlines your financial processes and provides steady guidance so you can scale with confidence."
      />
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <Testimonial />
      <BottomCTA />
    </>
  );
};

export default Home;
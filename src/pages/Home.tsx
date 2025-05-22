import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import WhyChoose from '../components/home/WhyChoose';
import Testimonial from '../components/home/Testimonial';
import BottomCTA from '../components/home/BottomCTA';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Ballast Financial | Steady guidance for startups';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <Testimonial />
      <BottomCTA />
    </>
  );
};

export default Home;
import React, { useEffect } from 'react';
import { setMeta } from '../utils/seo';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import WhyChoose from '../components/home/WhyChoose';
import BottomCTA from '../components/home/BottomCTA';

const Home: React.FC = () => {
  useEffect(() => {
    setMeta({
      title: 'Ballast Financial – Startup CFO & Accounting Services',
      description:
        'Outsourced CFO, accounting, and finance operations for venture-backed startups. Ballast Financial streamlines your financial processes and provides steady guidance so you can scale with confidence.',
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <BottomCTA />
    </>
  );
};

export default Home;
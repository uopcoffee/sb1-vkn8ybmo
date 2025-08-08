import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const EULA = lazy(() => import('./pages/EULA'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const BlogList = lazy(() => import('./pages/blog/BlogList'));
const BlogPost = lazy(() => import('./pages/blog/BlogPost'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Resources = lazy(() => import('./pages/Resources'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<div className="pt-24 text-center">Loading…</div>}>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
          <Route path="eula" element={<EULA />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
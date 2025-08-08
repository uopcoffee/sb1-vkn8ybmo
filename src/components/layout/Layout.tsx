import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Analytics from '../common/Analytics';

const Layout: React.FC = () => {
  return (
    <>
      <Analytics />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white text-primary-700 px-4 py-2 rounded shadow"
      >
        Skip to content
      </a>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content" role="main" className="flex-grow focus:outline-none">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  const { pathname } = useLocation();

  // Scroll to top automatically when navigation path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] dark:bg-slate-900">
      {/* Premium header navigation */}
      <Navbar />

      {/* Main page content area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer information */}
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, X, BookOpen, User, HelpCircle, LogOut, LayoutDashboard, ChevronDown, Sun, Moon } from 'lucide-react';
import { logout } from '../store/slices/authSlice';
import { fetchSettings } from '../store/slices/settingsSlice';
import useDarkMode from '../hooks/useDarkMode';

export default function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { settings } = useSelector((state) => state.settings);

  useEffect(() => {
    if (!settings) {
      dispatch(fetchSettings());
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, settings]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    dispatch(logout());
    closeMenu();
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Scholar', href: '/about' },
    { label: 'Articles', href: '/articles' },
    { label: 'Fatwas', href: '/fatwas' },
    { label: 'Q&As', href: '/qa' },
    { label: 'Publications', href: '/publications' },
    { label: 'Lectures', href: '/lectures' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
  ];

  const scholarName = settings?.scholarInfo?.fullName || 'Dr. Islamic Scholar';
  const scholarTitle = settings?.scholarInfo?.title || 'Mufti & Shariah Educator';

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-slate-900 shadow-md border-b border-[#EAE3CF] dark:border-slate-800/80 py-2'
          : 'bg-[#FAF9F5]/95 dark:bg-slate-950/90 border-b border-[#EAE3CF]/55 dark:border-slate-800/40 backdrop-blur-xs py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Scholar Branding / Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-95 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-[#0A4D27] flex items-center justify-center shadow-md">
            {/* Calligraphy seal or book icon representing knowledge */}
            <BookOpen className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <span className="block text-lg font-bold text-[#0A4D27] dark:text-emerald-400 leading-none tracking-wide">
              {scholarName.toUpperCase()}
            </span>
            <span className="block text-[11px] text-[#C5A85C] dark:text-amber-400/90 font-semibold mt-0.5 font-serif">
              {scholarTitle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.href ||
              (link.href !== '/' && location.pathname.startsWith(link.href));

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#0A4D27] dark:text-emerald-400 font-semibold border-b-2 border-[#0A4D27] dark:border-emerald-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#0A4D27] dark:hover:text-emerald-400'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side CTA & Admin indicators */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 mr-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5" />}
          </button>
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Link
                to="/admin/dashboard"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0A4D27] hover:bg-[#063018] rounded transition-colors"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-[#D4AF37]" />
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 rounded border border-red-200 transition-colors"
                title="Logout"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <Link
              to="/ask"
              className="flex items-center gap-1.5 px-4.5 py-2 text-sm font-bold text-slate-800 bg-[#E5C05E] hover:bg-[#D4AF37] rounded-full shadow-sm hover:shadow-md transition-all font-serif"
            >
              <HelpCircle className="w-4 h-4" />
              Ask Question
            </Link>
          )}
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center lg:hidden gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
          {!isAuthenticated && (
            <Link
              to="/ask"
              className="px-3 py-1.5 text-xs font-bold text-slate-800 bg-[#E5C05E] hover:bg-[#D4AF37] rounded-full shadow-sm"
            >
              Ask Q
            </Link>
          )}
          <button
            onClick={toggleMenu}
            className="p-1.5 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300" onClick={closeMenu}>
          <div
            className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform border-l dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#0A4D27] dark:text-emerald-400" />
                  <span className="font-bold text-[#0A4D27] dark:text-emerald-400 text-md">Navigation</span>
                </div>
                <button onClick={closeMenu} className="p-1 rounded text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    location.pathname === link.href ||
                    (link.href !== '/' && location.pathname.startsWith(link.href));

                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={closeMenu}
                      className={`px-3 py-2.5 rounded text-base font-medium transition-all ${
                        isActive
                          ? 'bg-[#0A4D27]/10 dark:bg-emerald-950/20 text-[#0A4D27] dark:text-emerald-400 font-semibold'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#0A4D27] dark:hover:text-emerald-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/admin/dashboard"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-semibold text-white bg-[#0A4D27] hover:bg-[#063018] rounded"
                  >
                    <LayoutDashboard className="w-4 h-4 text-[#D4AF37]" />
                    Admin Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-semibold text-red-700 bg-red-50 hover:bg-red-100 rounded border border-red-200"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout Admin
                  </button>
                </>
              ) : (
                <Link
                  to="/admin/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded border border-slate-200 dark:border-slate-700"
                >
                  <User className="w-4 h-4" />
                  Admin Login
                </Link>
              )}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

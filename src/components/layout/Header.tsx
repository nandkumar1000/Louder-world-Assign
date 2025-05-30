import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Calendar, MapPin } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-primary-800">Sydney<span className="text-accent-500">Events</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-neutral-700 hover:text-primary-500">Home</Link>
            <Link to="/about" className="text-neutral-700 hover:text-primary-500">About</Link>
            <Link to="/contact" className="text-neutral-700 hover:text-primary-500">Contact</Link>
            <Link to="/#categories" className="text-neutral-700 hover:text-primary-500">Categories</Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search events..." 
                className="h-10 rounded-full border-none bg-neutral-100 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <Calendar className="h-8 w-8 text-primary-500" />
                <span className="text-xl font-bold text-primary-800">Sydney<span className="text-accent-500">Events</span></span>
              </Link>
              <button
                className="rounded-md bg-primary-500 p-2 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search events..." 
                className="w-full rounded-full border-none bg-neutral-100 py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <nav className="flex flex-col space-y-6">
              <Link to="/" className="text-lg font-medium text-neutral-800 hover:text-primary-500">Home</Link>
              <Link to="/about" className="text-lg font-medium text-neutral-800 hover:text-primary-500">About</Link>
              <Link to="/contact" className="text-lg font-medium text-neutral-800 hover:text-primary-500">Contact</Link>
              <Link to="/#categories" className="text-lg font-medium text-neutral-800 hover:text-primary-500">Categories</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header
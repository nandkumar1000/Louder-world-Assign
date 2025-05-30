import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-accent-500" />
              <span className="text-xl font-bold">Sydney<span className="text-accent-500">Events</span></span>
            </Link>
            <p className="mt-4 text-neutral-300">
              Discover the best events happening in Sydney. From concerts to exhibitions, we've got you covered.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-neutral-300 transition-colors hover:text-accent-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 transition-colors hover:text-accent-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 transition-colors hover:text-accent-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 transition-colors hover:text-accent-500">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 transition-colors hover:text-white">Home</Link></li>
              <li><Link to="/#events" className="text-neutral-300 transition-colors hover:text-white">All Events</Link></li>
              <li><Link to="/#categories" className="text-neutral-300 transition-colors hover:text-white">Categories</Link></li>
              <li><Link to="/#venues" className="text-neutral-300 transition-colors hover:text-white">Venues</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/?category=music" className="text-neutral-300 transition-colors hover:text-white">Music</Link></li>
              <li><Link to="/?category=arts" className="text-neutral-300 transition-colors hover:text-white">Arts & Culture</Link></li>
              <li><Link to="/?category=food" className="text-neutral-300 transition-colors hover:text-white">Food & Drink</Link></li>
              <li><Link to="/?category=sports" className="text-neutral-300 transition-colors hover:text-white">Sports</Link></li>
              <li><Link to="/?category=family" className="text-neutral-300 transition-colors hover:text-white">Family</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
            <p className="mb-4 text-neutral-300">Get the latest events delivered to your inbox.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="rounded-md border-none bg-primary-700 px-4 py-2 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button 
                type="submit" 
                className="rounded-md bg-accent-500 px-4 py-2 font-medium text-neutral-800 transition-colors hover:bg-accent-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-700 pt-6 text-center text-sm text-neutral-400">
          <p>© 2025 Sydney Events. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
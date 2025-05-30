import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative mb-12 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg" 
          alt="Sydney Opera House" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/50"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Discover Amazing Events in <span className="text-accent-500">Sydney</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-neutral-100 md:text-xl"
          >
            Find the best concerts, exhibitions, festivals, and more happening across the city
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search for events..." 
                className="h-12 w-full rounded-md border-none bg-white pl-12 pr-4 text-neutral-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button className="btn btn-secondary h-12 whitespace-nowrap px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Find Events
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 160"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path 
            fill="#F9FAFB" 
            fillOpacity="1" 
            d="M0,128L80,117.3C160,107,320,85,480,80C640,75,800,85,960,90.7C1120,96,1280,96,1360,96L1440,96L1440,192L1360,192C1280,192,1120,192,960,192C800,192,640,192,480,192C320,192,160,192,80,192L0,192Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
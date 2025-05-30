import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEvents } from '../../context/EventContext';

const FeaturedEvents: React.FC = () => {
  const { events } = useEvents();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Get featured events (first 3)
  const featuredEvents = events.slice(0, 3);
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col justify-between md:flex-row md:items-center">
          <h2 className="text-3xl font-bold text-neutral-800">Featured Events</h2>
          <Link 
            to="/#events" 
            className="mt-4 flex items-center text-primary-500 hover:text-primary-600 md:mt-0"
          >
            View all events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Link to={`/event/${event.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <span className="mb-2 inline-block rounded bg-accent-500 px-2 py-1 text-xs font-semibold text-neutral-800">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{event.name}</h3>
                    <p className="mt-1 text-sm text-white">{event.date} • {event.time}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
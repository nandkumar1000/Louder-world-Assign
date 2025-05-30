import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CalendarDays, Clock, MapPin, Tag, ArrowLeft, DollarSign, Share2, Heart } from 'lucide-react';
import { format } from 'date-fns';
import { useEvents } from '../context/EventContext';
import { useModal } from '../context/ModalContext';
import { motion } from 'framer-motion';

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getEventById } = useEvents();
  const { openModal } = useModal();
  const [isLoading, setIsLoading] = useState(true);
  
  const event = id ? getEventById(id) : undefined;
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-[50vh] items-center justify-center px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600"></div>
          <p className="mt-4 text-neutral-600">Loading event details...</p>
        </div>
      </div>
    );
  }
  
  if (!event) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-lg bg-error-500 bg-opacity-10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-neutral-800">Event Not Found</h2>
          <p className="mb-6 text-neutral-600">The event you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const handleGetTickets = () => {
    openModal(event.name, event.ticketUrl);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="mb-6 inline-flex items-center text-primary-500 hover:text-primary-600">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Events
      </Link>
      
      <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="relative h-64 md:h-96">
          <img 
            src={event.imageUrl} 
            alt={event.name} 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-2 inline-block rounded bg-accent-500 px-2 py-1 text-xs font-semibold text-neutral-800">
                {event.category}
              </span>
              <h1 className="mb-2 text-2xl font-bold text-white md:text-4xl">
                {event.name}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white">
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {format(new Date(event.date), 'EEEE, MMMM do, yyyy')}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {event.time}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-4 text-xl font-bold text-neutral-800">About This Event</h2>
              <p className="mb-6 whitespace-pre-line text-neutral-600">
                {event.description}
              </p>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {event.tags && event.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <h2 className="mb-4 text-xl font-bold text-neutral-800">Event Details</h2>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-primary-500" />
                  <div>
                    <h3 className="font-medium text-neutral-800">Venue</h3>
                    <p className="text-neutral-600">{event.venue}</p>
                    <p className="text-neutral-600">{event.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CalendarDays className="mr-3 h-5 w-5 text-primary-500" />
                  <div>
                    <h3 className="font-medium text-neutral-800">Date & Time</h3>
                    <p className="text-neutral-600">
                      {format(new Date(event.date), 'EEEE, MMMM do, yyyy')} at {event.time}
                    </p>
                  </div>
                </div>
                
                {event.price && (
                  <div className="flex items-start">
                    <DollarSign className="mr-3 h-5 w-5 text-primary-500" />
                    <div>
                      <h3 className="font-medium text-neutral-800">Price</h3>
                      <p className="text-neutral-600">{event.price}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg border border-neutral-200 bg-neutral-50 p-6"
          >
            <h2 className="mb-4 text-xl font-bold text-neutral-800">Get Your Tickets</h2>
            
            <div className="mb-6">
              <p className="mb-2 text-sm text-neutral-600">Event Date:</p>
              <p className="font-medium text-neutral-800">
                {format(new Date(event.date), 'MMMM do, yyyy')}
              </p>
            </div>
            
            <div className="mb-6">
              <p className="mb-2 text-sm text-neutral-600">Venue:</p>
              <p className="font-medium text-neutral-800">{event.venue}</p>
            </div>
            
            {event.price && (
              <div className="mb-6">
                <p className="mb-2 text-sm text-neutral-600">Price:</p>
                <p className="font-medium text-neutral-800">{event.price}</p>
              </div>
            )}
            
            <button
              onClick={handleGetTickets}
              className="btn btn-secondary mb-4 w-full"
            >
              GET TICKETS
            </button>
            
            <div className="flex justify-between">
              <button className="flex items-center text-neutral-600 hover:text-primary-500">
                <Heart className="mr-1 h-4 w-4" />
                Save
              </button>
              <button className="flex items-center text-neutral-600 hover:text-primary-500">
                <Share2 className="mr-1 h-4 w-4" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
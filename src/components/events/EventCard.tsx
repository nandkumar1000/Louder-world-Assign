import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, MapPin, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { useModal } from '../../context/ModalContext';
import { Event } from '../../types/event';
import { motion } from 'framer-motion';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const { openModal } = useModal();
  
  const handleGetTickets = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal(event.name, event.ticketUrl);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1, 
        ease: "easeOut" 
      }}
    >
      <Link to={`/event/${event.id}`} className="block h-full">
        <div className="card group h-full overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={event.imageUrl} 
              alt={event.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
              <div className="inline-block rounded bg-primary-500 px-2 py-1 text-xs font-semibold">
                {event.category}
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="mb-2 text-lg font-bold text-neutral-800 line-clamp-2">
              {event.name}
            </h3>
            
            <div className="mb-3 flex flex-col space-y-2">
              <div className="flex items-center text-sm text-neutral-600">
                <CalendarDays className="mr-2 h-4 w-4 text-primary-500" />
                {format(new Date(event.date), 'EEEE, MMMM do, yyyy')}
              </div>
              
              <div className="flex items-center text-sm text-neutral-600">
                <Clock className="mr-2 h-4 w-4 text-primary-500" />
                {event.time}
              </div>
              
              <div className="flex items-center text-sm text-neutral-600">
                <MapPin className="mr-2 h-4 w-4 text-primary-500" />
                {event.venue}
              </div>
            </div>
            
            <p className="mb-4 text-sm text-neutral-600 line-clamp-2">
              {event.description}
            </p>
            
            <div className="mt-auto">
              <button
                onClick={handleGetTickets}
                className="btn btn-secondary w-full"
              >
                GET TICKETS
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
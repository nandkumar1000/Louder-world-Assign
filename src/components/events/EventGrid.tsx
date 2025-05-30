import React, { useState } from 'react';
import EventCard from './EventCard';
import { Event } from '../../types/event';
import { ChevronDown, Filter } from 'lucide-react';

interface EventGridProps {
  events: Event[];
  title?: string;
}

const EventGrid: React.FC<EventGridProps> = ({ events, title = "Upcoming Events" }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const categories = [...new Set(events.map(event => event.category))];
  
  const filteredEvents = selectedCategory 
    ? events.filter(event => event.category === selectedCategory)
    : events;
  
  return (
    <div className="mb-12">
      <div className="mb-6 flex flex-col justify-between md:flex-row md:items-center">
        <h2 className="text-2xl font-bold text-neutral-800 md:text-3xl">{title}</h2>
        
        <div className="mt-4 md:mt-0">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            <Filter className="h-4 w-4" />
            <span>Filter</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          {showFilters && (
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  selectedCategory === '' 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                }`}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    selectedCategory === category 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {filteredEvents.length === 0 ? (
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
          <p className="text-lg text-neutral-600">No events found</p>
          <button
            onClick={() => setSelectedCategory('')}
            className="mt-4 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventGrid;
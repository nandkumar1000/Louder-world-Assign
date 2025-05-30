import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import FeaturedEvents from '../components/home/FeaturedEvents';
import EventGrid from '../components/events/EventGrid';
import Newsletter from '../components/home/Newsletter';
import { useEvents } from '../context/EventContext';

const HomePage: React.FC = () => {
  const { events, isLoading, error } = useEvents();
  
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedEvents />
      
      <section id="events" className="py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600"></div>
              <p className="mt-4 text-neutral-600">Loading events...</p>
            </div>
          ) : error ? (
            <div className="rounded-lg bg-error-500 bg-opacity-10 p-6 text-center text-error-500">
              <p className="text-lg font-medium">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 rounded-md bg-error-500 px-4 py-2 text-sm font-medium text-white hover:bg-error-600"
              >
                Try Again
              </button>
            </div>
          ) : (
            <EventGrid events={events} />
          )}
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
};

export default HomePage;
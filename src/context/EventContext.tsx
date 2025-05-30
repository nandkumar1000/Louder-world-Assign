import React, { createContext, useContext, useState, useEffect } from 'react';
import { Event } from '../types/event';
import { mockEvents } from '../data/mockEvents';

interface EventContextType {
  events: Event[];
  isLoading: boolean;
  error: string | null;
  getEventById: (id: string) => Event | undefined;
  refreshEvents: () => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchEvents = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call to a backend service
      // For now, we'll use mock data
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setEvents(mockEvents);
    } catch (err) {
      setError('Failed to fetch events. Please try again later.');
      console.error('Error fetching events:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchEvents();
    
    // In a real application, you might set up a WebSocket or polling to get updates
    const intervalId = setInterval(() => {
      fetchEvents();
    }, 60000); // Refresh every minute
    
    return () => clearInterval(intervalId);
  }, []);
  
  const getEventById = (id: string) => {
    return events.find(event => event.id === id);
  };
  
  const refreshEvents = () => {
    fetchEvents();
  };
  
  return (
    <EventContext.Provider value={{ events, isLoading, error, getEventById, refreshEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};
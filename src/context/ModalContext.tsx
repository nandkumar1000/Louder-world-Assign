import React, { createContext, useContext, useState } from 'react';
import EmailModal from '../components/ui/EmailModal';

interface ModalContextType {
  openModal: (eventName: string, ticketUrl: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [ticketUrl, setTicketUrl] = useState('');
  
  const openModal = (name: string, url: string) => {
    setEventName(name);
    setTicketUrl(url);
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };
  
  const handleSubmit = (email: string, optIn: boolean) => {
    // In a real app, this would send the email to a backend service
    console.log('Email submitted:', email, 'Opt-in:', optIn);
  };
  
  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <EmailModal
        isOpen={isOpen}
        onClose={closeModal}
        eventName={eventName}
        onSubmit={handleSubmit}
        ticketUrl={ticketUrl}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
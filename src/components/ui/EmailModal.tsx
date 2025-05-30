import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventName: string;
  onSubmit: (email: string, optIn: boolean) => void;
  ticketUrl: string;
}

const EmailModal: React.FC<EmailModalProps> = ({ 
  isOpen, 
  onClose, 
  eventName, 
  onSubmit,
  ticketUrl
}) => {
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(true);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    onSubmit(email, optIn);
    
    // Redirect to ticket URL
    window.open(ticketUrl, '_blank');
    onClose();
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-800"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-neutral-800">
                Get Tickets for {eventName}
              </h3>
              <p className="text-neutral-600">
                Enter your email to continue to the ticket page
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className="input w-full"
                  placeholder="your.email@example.com"
                  required
                />
                {error && <p className="mt-1 text-sm text-error-500">{error}</p>}
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={optIn}
                    onChange={(e) => setOptIn(e.target.checked)}
                    className="h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-neutral-600">
                    I'd like to receive updates about events in Sydney
                  </span>
                </label>
              </div>
              
              <div className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Continue to Tickets
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-outline w-full"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EmailModal;
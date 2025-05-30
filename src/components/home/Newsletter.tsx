import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the email to a backend service
    setIsSubmitted(true);
  };
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-50 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
            <Bell className="h-8 w-8 text-primary-600" />
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-neutral-800">Never Miss an Event</h2>
          <p className="mb-8 max-w-xl text-neutral-600">
            Subscribe to our newsletter and be the first to know about upcoming events, exclusive offers, and more!
          </p>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-lg bg-success-500 bg-opacity-10 p-4 text-success-500"
            >
              <p className="text-lg font-medium">Thank you for subscribing!</p>
              <p className="mt-1">We'll keep you updated with the latest events in Sydney.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="input flex-1"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
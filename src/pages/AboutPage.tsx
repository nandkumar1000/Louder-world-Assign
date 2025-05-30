import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Globe, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Curated Events',
      description: 'We carefully select and showcase the best events happening in Sydney.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by and for the Sydney community to enhance local experiences.',
    },
    {
      icon: Globe,
      title: 'Always Updated',
      description: 'Our platform automatically updates to ensure you never miss an event.',
    },
    {
      icon: Heart,
      title: 'Personalized Experience',
      description: 'Find events that match your interests and preferences.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold text-neutral-800">About Sydney Events</h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-600">
          Discover the best events in Sydney, from concerts and exhibitions to food festivals and cultural celebrations.
        </p>
      </motion.div>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mb-4 text-2xl font-bold text-neutral-800">Our Mission</h2>
          <p className="mb-4 text-neutral-600">
            At Sydney Events, we're passionate about connecting people with incredible experiences across our beautiful city. Our mission is to make it easy for everyone to discover and attend the events that matter to them.
          </p>
          <p className="text-neutral-600">
            We believe that great events bring people together, create lasting memories, and make our community stronger. That's why we've built a platform that automatically aggregates and showcases the best events Sydney has to offer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-64 overflow-hidden rounded-lg md:h-auto"
        >
          <img
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
            alt="Sydney Opera House"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="mb-8 text-center text-2xl font-bold text-neutral-800">What Makes Us Different</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-lg bg-white p-6 text-center shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-800">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="rounded-lg bg-primary-50 p-8 text-center"
      >
        <h2 className="mb-4 text-2xl font-bold text-neutral-800">Join Our Community</h2>
        <p className="mx-auto mb-6 max-w-2xl text-neutral-600">
          Be part of Sydney's most vibrant events community. Subscribe to our newsletter and never miss an exciting event in your area.
        </p>
        <form className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <input
            type="email"
            placeholder="Your email address"
            className="input flex-1"
          />
          <button type="submit" className="btn btn-primary whitespace-nowrap">
            Subscribe Now
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AboutPage
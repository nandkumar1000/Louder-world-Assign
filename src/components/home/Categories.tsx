import React from 'react';
import { Music, Palette, Utensils, Trophy, Users, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    id: 'music',
    name: 'Music',
    description: 'Concerts, festivals, and live performances',
    icon: Music,
    color: 'bg-blue-500',
  },
  {
    id: 'arts',
    name: 'Arts & Culture',
    description: 'Exhibitions, theater, and cultural events',
    icon: Palette,
    color: 'bg-purple-500',
  },
  {
    id: 'food',
    name: 'Food & Drink',
    description: 'Food festivals, wine tastings, and culinary experiences',
    icon: Utensils,
    color: 'bg-yellow-500',
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Matches, tournaments, and sporting events',
    icon: Trophy,
    color: 'bg-green-500',
  },
  {
    id: 'family',
    name: 'Family',
    description: 'Kid-friendly events and family activities',
    icon: Users,
    color: 'bg-pink-500',
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Comedy shows, movies, and special events',
    icon: Ticket,
    color: 'bg-red-500',
  }
];

const Categories: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="categories" className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-800">Explore by Category</h2>
          <p className="mx-auto max-w-2xl text-neutral-600">
            Discover events that match your interests across different categories in Sydney
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="card group cursor-pointer p-6 transition-all hover:bg-primary-50"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${category.color} text-white`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-800 group-hover:text-primary-600">
                {category.name}
              </h3>
              <p className="text-neutral-600">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSubmitStatus(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold text-neutral-800">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-600">
          Have questions about events in Sydney? We're here to help! Get in touch with our team.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg bg-white p-8 shadow-lg"
        >
          <h2 className="mb-6 text-2xl font-bold text-neutral-800">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-neutral-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="input w-full"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="mr-2 h-4 w-4 animate-spin\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4\" fill="none" />
                    <path className="opacity-75\" fill="currentColor\" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </span>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="rounded-md bg-success-500 bg-opacity-10 p-4 text-success-500">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-md bg-error-500 bg-opacity-10 p-4 text-error-500">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-neutral-800">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-primary-500" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">Email</h3>
                  <p className="text-neutral-600">info@sydneyevents.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-primary-500" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">Phone</h3>
                  <p className="text-neutral-600">+91 6367173271</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 text-primary-500" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">Office</h3>
                  <p className="text-neutral-600">
                    Gurugram<br />
                    New Delhi<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-neutral-800">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-600">Monday - Friday</span>
                <span className="font-medium text-neutral-800">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Saturday</span>
                <span className="font-medium text-neutral-800">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Sunday</span>
                <span className="font-medium text-neutral-800">Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage
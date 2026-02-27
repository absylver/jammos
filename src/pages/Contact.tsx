import ContactComponent from '../components/Contact';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="bg-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team for inquiries, quotes, and support.
          </p>
        </div>
      </section>
      <ContactComponent />
    </div>
  );
}

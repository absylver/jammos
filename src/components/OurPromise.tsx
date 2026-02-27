import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const promises = [
  "Delivering quality without compromise",
  "Upholding the highest standards of safety and professionalism",
  "Applying innovation and technology to drive efficiency",
  "Creating sustainable and long-term value for our clients"
];

export default function OurPromise() {
  return (
    <section className="py-20 bg-[var(--color-primary)] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-accent)] font-semibold tracking-wide uppercase text-sm mb-3">Our Promise</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Committed to Excellence in Every Brick and Beam
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              At Jammos Construction, we don't just build structures; we build relationships and trust. Our commitment to quality and integrity is the foundation of everything we do.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {promises.map((promise, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-200">{promise}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction Site Meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium italic">
                  "We approach every project with a deep understanding of client objectives, regulatory requirements, and environmental considerations."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

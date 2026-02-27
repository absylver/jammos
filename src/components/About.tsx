import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Construction Site" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Engineers Planning" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--color-primary)] text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-[var(--color-accent)]">18+</p>
              <p className="text-sm font-medium uppercase tracking-wider mt-1">Years of<br/>Experience</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-accent)] font-semibold tracking-wide uppercase text-sm mb-3">About Jammos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
              A Legacy of Strength & Innovation Since 2006
            </h3>
            <p className="text-[var(--color-secondary)] text-lg mb-8 leading-relaxed">
              Jammos Construction Nigeria Limited is a leading indigenous construction firm dedicated to transforming the African infrastructure landscape. We blend technical expertise with local insight to deliver projects that drive economic growth.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-cta)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--color-primary)]">Our Mission</h4>
                  <p className="text-[var(--color-secondary)] text-sm mt-1">To deliver superior construction solutions through innovation, integrity, and sustainable practices.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-cta)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--color-primary)]">Our Vision</h4>
                  <p className="text-[var(--color-secondary)] text-sm mt-1">To be the preferred partner for infrastructure development in Nigeria and West Africa.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-cta)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--color-primary)]">Core Values</h4>
                  <p className="text-[var(--color-secondary)] text-sm mt-1">Safety, Quality, Integrity, and Teamwork form the bedrock of our operations.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

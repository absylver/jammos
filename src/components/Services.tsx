import { motion } from 'motion/react';
import { Building2, Wrench, RadioTower, ClipboardCheck, Factory } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Civil & Building Engineering',
    description: 'Residential complexes, commercial skyscrapers, and public infrastructure built with precision.',
    image: 'https://images.unsplash.com/photo-1590644365607-1c5a38d07d36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Factory,
    title: 'Mechanical & Industrial',
    description: 'Industrial plant construction, HVAC systems, and heavy machinery installation.',
    image: 'https://images.unsplash.com/photo-1581094794329-cd1096a7a438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: RadioTower,
    title: 'Telecom Infrastructure',
    description: 'Tower construction, fiber optic laying, and network infrastructure development.',
    image: 'https://images.unsplash.com/photo-1565619624098-e65925df35e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: ClipboardCheck,
    title: 'Project Management',
    description: 'Comprehensive oversight from conception to completion, ensuring time and budget adherence.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Wrench,
    title: 'EPC / Turnkey Projects',
    description: 'Full-service Engineering, Procurement, and Construction solutions for complex needs.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-[var(--color-accent)] font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            Comprehensive Construction Solutions
          </h3>
          <div className="h-1 w-20 bg-[var(--color-cta)] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)]/0 transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20">
                  <service.icon className="w-6 h-6 text-[var(--color-cta)]" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-cta)] transition-colors">
                  {service.title}
                </h4>
                <p className="text-[var(--color-secondary)] text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-cta)] transition-colors">
                  Learn more <span className="ml-2">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

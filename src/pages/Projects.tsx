import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Eko Atlantic Tower',
    category: 'Commercial',
    location: 'Victoria Island, Lagos',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A 25-story mixed-use skyscraper featuring luxury apartments and Grade A office spaces.',
  },
  {
    title: 'Dangote Refinery Access Road',
    category: 'Infrastructure',
    location: 'Lekki Free Zone',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Construction of 15km heavy-duty access road with drainage and street lighting.',
  },
  {
    title: 'Abuja National Stadium Renovation',
    category: 'Public Works',
    location: 'Abuja, FCT',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive structural reinforcement and modernization of the main bowl facilities.',
  },
  {
    title: 'Shell Residential Estate',
    category: 'Residential',
    location: 'Port Harcourt, Rivers',
    image: 'https://images.unsplash.com/photo-1600596542815-2a4d9f010730?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Development of a 50-unit luxury residential estate with integrated utilities and security.',
  },
  {
    title: 'MTN Data Center',
    category: 'Industrial',
    location: 'Ikeja, Lagos',
    image: 'https://images.unsplash.com/photo-1558494949-efc02570fbc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'State-of-the-art Tier III data center construction with advanced cooling and power systems.',
  },
  {
    title: 'Lagos Light Rail Blue Line',
    category: 'Infrastructure',
    location: 'Marina - Mile 2',
    image: 'https://images.unsplash.com/photo-1461353214406-61b5f6416d9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Structural engineering support for the elevated rail track sections.',
  },
];

export default function Projects() {
  return (
    <div className="pt-20">
      <section className="bg-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing our commitment to excellence across residential, commercial, and industrial sectors.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold px-3 py-1 rounded-full z-20">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--color-secondary)] mb-3">
                    <span className="w-1.5 h-1.5 bg-[var(--color-cta)] rounded-full" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-cta)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-secondary)] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-cta)] transition-colors">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

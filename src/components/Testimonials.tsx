import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Jammos Construction delivered our commercial complex ahead of schedule and within budget. Their attention to detail is unmatched.",
    author: "Alhaji Musa Ibrahim",
    role: "CEO, Ibrahim Holdings",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Professionalism at its peak. The engineering team solved complex structural challenges with innovative solutions.",
    author: "Engr. Chioma Okonkwo",
    role: "Project Director, State Infrastructure Board",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "We rely on Jammos for all our industrial facility maintenance. They are reliable, safety-conscious, and efficient.",
    author: "David Johnson",
    role: "Operations Manager, West African Manufacturing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--color-accent)] font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
            Trusted by Industry Leaders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-gray-100 w-12 h-12 rotate-180" />
              
              <div className="relative z-10">
                <p className="text-[var(--color-secondary)] italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-accent)]"
                  />
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

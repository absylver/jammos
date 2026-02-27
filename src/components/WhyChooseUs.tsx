import { motion } from 'motion/react';
import { ShieldCheck, Award, HardHat, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Est. 2006',
    description: 'Over 18 years of proven excellence in the Nigerian construction industry.',
  },
  {
    icon: ShieldCheck,
    title: 'CAC Registered',
    description: 'Fully licensed and compliant with all regulatory bodies in Nigeria.',
  },
  {
    icon: HardHat,
    title: 'HSE Compliant',
    description: 'Uncompromising commitment to Health, Safety, and Environment standards.',
  },
  {
    icon: TrendingUp,
    title: 'EPC Expertise',
    description: 'End-to-end Engineering, Procurement, and Construction capabilities.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0A1F44 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-accent)] font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            Engineering Trust, <br /> Delivering Excellence
          </h3>
          <p className="text-[var(--color-secondary)] text-lg">
            We combine global best practices with deep local knowledge to deliver projects that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[var(--color-background)] p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[var(--color-primary)] mb-3">{feature.title}</h4>
              <p className="text-[var(--color-secondary)] leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

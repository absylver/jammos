import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Construction Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-primary)]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm font-semibold tracking-wider mb-6 border border-[var(--color-accent)]/30 backdrop-blur-sm">
            RC 1043373 • ESTABLISHED 2006
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Building the Future with <br />
            <span className="text-[var(--color-accent)]">Excellence, Innovation, & Sustainability</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Leading indigenous construction, engineering, and project management company delivering high-quality, value-driven solutions across Nigeria’s built environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-[var(--color-cta)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 rounded-xl font-semibold text-lg text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

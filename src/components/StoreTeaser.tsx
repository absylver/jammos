import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

export default function StoreTeaser() {
  return (
    <section id="store" className="py-24 bg-[var(--color-primary)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-[var(--color-accent)] text-sm font-medium mb-6 border border-white/10">
              <ShoppingCart size={16} />
              <span>Jammos Store</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Premium Construction Materials & Tools
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Source high-quality building materials, safety gear, and professional tools directly from our trusted supply chain. Quality you can build on.
            </p>
            <ul className="space-y-3 mb-10 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                Certified Cement & Aggregates
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                Professional Power Tools
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                Safety Equipment (PPE)
              </li>
            </ul>
            <button className="bg-[var(--color-cta)] text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 group">
              Visit Online Store
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction Tools" 
                className="rounded-2xl shadow-2xl border-4 border-white/10"
              />
              
              {/* Floating Product Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Helmet" className="w-12 h-12 object-contain mix-blend-multiply" />
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-primary)]">Safety Helmet Pro</p>
                    <p className="text-[var(--color-cta)] font-bold">₦15,000</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

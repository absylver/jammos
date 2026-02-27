import { HardHat, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white/10 p-2 rounded-lg">
                <HardHat className="h-6 w-6 text-[var(--color-accent)]" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                JAMMOS
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building the future with excellence, innovation, and sustainability. Your trusted partner in construction and engineering since 2006.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[var(--color-accent)] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[var(--color-accent)] transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-[var(--color-accent)] transition-colors">Projects</a></li>
              <li><a href="#store" className="hover:text-[var(--color-accent)] transition-colors">Store</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Civil Engineering</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Building Construction</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Project Management</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Telecom Infrastructure</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Procurement</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on our latest projects and industry news.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-accent)] flex-1"
              />
              <button className="bg-[var(--color-accent)] text-[var(--color-primary)] px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
                Go
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jammos Construction Nigeria Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

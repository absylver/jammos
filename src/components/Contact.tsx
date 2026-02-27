import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-[var(--color-accent)] font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
              Let's Build Something Great Together
            </h3>
            <p className="text-[var(--color-secondary)] text-lg mb-10">
              Ready to start your next project? Contact our team for a consultation or quote. We are ready to serve you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-background)] p-3 rounded-lg text-[var(--color-cta)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] mb-1">Head Office</h4>
                  <p className="text-[var(--color-secondary)]">
                    124 Ahmadu Bello Way,<br />
                    Victoria Island, Lagos,<br />
                    Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-background)] p-3 rounded-lg text-[var(--color-cta)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] mb-1">Phone</h4>
                  <p className="text-[var(--color-secondary)]">+234 800 JAMMOS NG</p>
                  <p className="text-[var(--color-secondary)]">+234 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-background)] p-3 rounded-lg text-[var(--color-cta)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] mb-1">Email</h4>
                  <p className="text-[var(--color-secondary)]">projects@jammosconstruction.com</p>
                  <p className="text-[var(--color-secondary)]">info@jammosconstruction.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-background)] p-3 rounded-lg text-[var(--color-cta)]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] mb-1">Working Hours</h4>
                  <p className="text-[var(--color-secondary)]">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-[var(--color-secondary)]">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-[500px] relative shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728929198668!2d3.4194!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ac37c3d2b07%3A0x66c3428b4e72086e!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1645523456789!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
            
            {/* Contact Form Overlay (Optional, keeping simple for now) */}
            <div className="absolute bottom-6 right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <h4 className="font-bold text-[var(--color-primary)] mb-2">Send us a message</h4>
              <button className="w-full bg-[var(--color-primary)] text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors">
                Open Contact Form
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

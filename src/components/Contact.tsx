import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-[var(--color-accent)] font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
              Start Your Project with Us
            </h3>
            <p className="text-[var(--color-secondary)] text-lg mb-10">
              We welcome enquiries from developers, institutions, contractors, and private clients. Contact Jammos Construction Nigeria Limited today and let us deliver your project with excellence, innovation, and integrity.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-background)] p-3 rounded-lg text-[var(--color-cta)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] mb-1">Head Office</h4>
                  <p className="text-[var(--color-secondary)]">
                    7, Fadeyi Street, Owode Estate,<br />
                    Ibeshe Road, Ikorodu,<br />
                    Lagos State, Nigeria
                  </p>
                  <p className="text-xs text-gray-400 mt-1">RC: 1043373</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-background)] p-3 rounded-lg text-[var(--color-cta)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] mb-1">Phone</h4>
                  <p className="text-[var(--color-secondary)]">0706 447 5221</p>
                  <p className="text-[var(--color-secondary)]">0818 588 5425</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-background)] p-3 rounded-lg text-[var(--color-cta)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] mb-1">Email</h4>
                  <p className="text-[var(--color-secondary)]">jammosconstruct@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-background)] p-3 rounded-lg text-[var(--color-cta)]">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] mb-1">Website</h4>
                  <p className="text-[var(--color-secondary)]">www.jammosconstruct.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-[500px] relative shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.385794827014!2d3.505!3d6.600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103be90000000001%3A0x0!2sIkorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1645523456789!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
            
            {/* Contact Form Overlay */}
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

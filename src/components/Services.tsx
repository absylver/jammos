import { motion } from 'motion/react';
import { Building2, Wrench, RadioTower, ClipboardCheck, Factory, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Building2,
    title: 'Civil & Building Engineering',
    description: 'We design, construct, and manage a wide range of civil and building projects.',
    details: [
      'Residential developments (low-rise and multi-storey)',
      'Commercial and office complexes',
      'Educational and institutional facilities',
      'Industrial buildings and warehouses',
      'Renovation, refurbishment, and facility upgrades',
      'Drainage systems, culverts, and stormwater management',
      'Road construction, pavements, and earthworks',
      'Concrete works, foundations, and structural systems'
    ],
    image: 'https://images.unsplash.com/photo-1590644365607-1c5a38d07d36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Factory,
    title: 'Mechanical & Industrial Engineering',
    description: 'Supporting industrial, manufacturing, and Oil & Gas projects with precision.',
    details: [
      'Mechanical fabrication and installation',
      'Structural steel fabrication and erection',
      'Industrial and process piping systems',
      'Storage tank construction and installation',
      'Equipment installation, alignment, and commissioning',
      'Industrial maintenance, repairs, and upgrades'
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-cd1096a7a438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: RadioTower,
    title: 'Telecommunications Infrastructure',
    description: 'Reliable civil and structural solutions for telecom infrastructure.',
    details: [
      'Telecom tower construction and installation',
      'Base Transceiver Station (BTS) civil works',
      'Foundation and access road construction',
      'Equipment platforms, shelters, and ancillary structures'
    ],
    image: 'https://images.unsplash.com/photo-1565619624098-e65925df35e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: ClipboardCheck,
    title: 'Project Management & Consultancy',
    description: 'Ensuring cost efficiency, risk control, and project success.',
    details: [
      'Project and construction management',
      'Quantity surveying and commercial management',
      'Cost planning, budgeting, and cost control',
      'Bills of Quantities (BOQs) and technical specifications',
      'Estimating and tender documentation',
      'Procurement and contract administration'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: HardHat,
    title: 'EPC & Turnkey Project Delivery',
    description: 'Complete Engineering, Procurement, and Construction (EPC) solutions.',
    details: [
      'Turnkey project delivery',
      'Multidisciplinary coordination',
      'Schedule and risk management',
      'Quality assurance and control'
    ],
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
            Integrated Construction & Engineering Solutions
          </h3>
          <p className="text-[var(--color-secondary)] max-w-3xl text-lg mb-6">
            Jammos Construction Nigeria Limited delivers end-to-end construction and engineering services across multiple disciplines. Our services are executed by experienced professionals using modern equipment, structured project controls, and global best practices.
          </p>
          <div className="h-1 w-20 bg-[var(--color-cta)] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row"
            >
              <div className="lg:w-2/5 relative min-h-[300px]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/10"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  <service.icon className="w-8 h-8 text-[var(--color-cta)]" />
                </div>
              </div>
              
              <div className="p-6 md:p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  {service.title}
                </h4>
                <p className="text-[var(--color-secondary)] text-lg mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-[var(--color-secondary)]">{detail}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <Link to="/contact" className="inline-flex items-center text-sm font-semibold text-[var(--color-cta)] hover:text-orange-700 transition-colors border border-[var(--color-cta)] px-6 py-3 rounded-lg hover:bg-orange-50">
                    Request Service
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Target, Lightbulb, Shield, Leaf, Users, Award, Gavel, HardHat } from 'lucide-react';

export default function AboutFull() {
  return (
    <div className="bg-white">
      {/* Company Profile Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-primary)] text-3xl font-bold mb-6">Company Profile</h2>
            <div className="prose prose-lg text-[var(--color-secondary)]">
              <p className="mb-4">
                Jammos Construction Nigeria Limited is an indigenous construction, engineering, and project management company incorporated in Nigeria and registered with the Corporate Affairs Commission under RC 1043373. Since our establishment in 2006, we have steadily evolved into a diversified and reputable organization serving public and private-sector clients across multiple sectors of the economy.
              </p>
              <p className="mb-4">
                Our strength lies in our ability to integrate engineering expertise, disciplined project management, operational efficiency, and digital innovation to deliver reliable, cost-effective, and sustainable construction solutions. We approach every project with a deep understanding of client objectives, regulatory requirements, and environmental considerations.
              </p>
              <p>
                Beyond physical construction, our technology-enabled platform enhances access to construction inputs and professional services, reinforcing our role as a trusted partner across the construction ecosystem.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Jammos Construction Site" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border-l-4 border-[var(--color-accent)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[var(--color-primary)]/10 rounded-full">
                  <Target className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)]">Our Vision</h3>
              </div>
              <p className="text-[var(--color-secondary)] text-lg leading-relaxed">
                To become a globally recognized indigenous construction and e-commerce company, known for innovation, excellence, integrity, and sustainable project delivery.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border-l-4 border-[var(--color-cta)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[var(--color-cta)]/10 rounded-full">
                  <Lightbulb className="w-8 h-8 text-[var(--color-cta)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)]">Our Mission</h3>
              </div>
              <p className="text-[var(--color-secondary)] text-lg leading-relaxed">
                To provide integrated Engineering, Procurement, and Construction (EPC) solutions through engineering excellence, digital innovation, and sustainable practices—delivering projects efficiently, on time, to global standards, and at competitive cost.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[var(--color-accent)] font-semibold tracking-wide uppercase text-sm mb-3">Our Culture</h2>
          <h3 className="text-3xl font-bold text-[var(--color-primary)]">Core Values</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: Award, title: "Excellence", text: "We pursue superior quality and continuous improvement in every project we execute." },
            { icon: Lightbulb, title: "Innovation", text: "We embrace technology, creative engineering, and digital solutions to enhance efficiency and value." },
            { icon: Shield, title: "Integrity", text: "We conduct our business with honesty, transparency, and accountability." },
            { icon: Leaf, title: "Sustainability", text: "We prioritize environmentally responsible practices and long-lasting project outcomes." },
            { icon: Users, title: "Client-Centricity", text: "We place our clients at the center of our decision-making, ensuring tailored and timely solutions." }
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 mx-auto bg-[var(--color-background)] rounded-full flex items-center justify-center mb-4 text-[var(--color-primary)]">
                <value.icon size={24} />
              </div>
              <h4 className="font-bold text-[var(--color-primary)] mb-2">{value.title}</h4>
              <p className="text-sm text-[var(--color-secondary)]">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ethics & HSE */}
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="text-[var(--color-accent)] w-8 h-8" />
                <h3 className="text-2xl font-bold">Ethics, Compliance & Governance</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Jammos Construction Nigeria Limited operates under a robust governance and compliance framework designed to uphold ethical conduct, regulatory adherence, and operational transparency.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Ethical Standards:</strong> Zero-tolerance policy toward corruption, fraud, and unethical business practices.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Regulatory Compliance:</strong> Strict adherence to CAC regulations, Nigerian construction codes, and labor laws.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <HardHat className="text-[var(--color-cta)] w-8 h-8" />
                <h3 className="text-2xl font-bold">Health, Safety & Environment (HSE)</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Safety is a core operational priority. We implement comprehensive HSE management systems to protect workers, clients, and host communities while minimizing environmental impact.
              </p>
              <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                <p className="text-sm text-gray-200 italic">
                  "We believe that no project is successful unless it is delivered safely and without harm to the environment."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-[var(--color-primary)]">Our Corporate Philosophy</h3>
          <p className="text-[var(--color-secondary)] mt-4">Anchored on four strategic pillars</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "1. Construction & Project Management Excellence", desc: "Delivering projects with precision, quality, and adherence to international standards." },
            { title: "2. Operational Efficiency", desc: "Optimizing processes to enhance productivity, reduce waste, and meet delivery timelines." },
            { title: "3. Optimized Resource Utilization", desc: "Effectively leveraging people, materials, equipment, and technology for maximum value." },
            { title: "4. Long-Term Strategic Growth", desc: "Building enduring partnerships and pursuing sustainable business growth." }
          ].map((pillar, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-[var(--color-background)] rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-primary)] text-lg mb-2">{pillar.title.substring(3)}</h4>
                <p className="text-[var(--color-secondary)]">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

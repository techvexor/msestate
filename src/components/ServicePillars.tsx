import { motion } from "framer-motion";
import { MessageSquare, FileCheck, TrendingUp, Handshake } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Expert Consultation",
    description: "Personalized guidance from experienced real estate consultants to help you make informed decisions.",
  },
  {
    icon: FileCheck,
    title: "Legal Support",
    description: "Complete documentation assistance and legal verification for hassle-free property transactions.",
  },
  {
    icon: TrendingUp,
    title: "Investment Planning",
    description: "Strategic investment advice to maximize returns and build long-term wealth through real estate.",
  },
  {
    icon: Handshake,
    title: "Builder Partnerships",
    description: "Direct access to premium projects from top RERA-approved builders across NCR.",
  },
];

export default function ServicePillars() {
  return (
    <section className="py-32 px-6 md:px-12 bg-cream-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-gold/30"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-gold" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-navy/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

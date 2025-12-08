import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicePillars from "@/components/ServicePillars";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Home, Key, TrendingUp, FileText, Users, Shield } from "lucide-react";

const additionalServices = [
  {
    icon: Home,
    title: "Property Management",
    description: "Comprehensive property management services to maximize your investment returns.",
  },
  {
    icon: Key,
    title: "Rental Services",
    description: "Find the perfect rental property or let us manage your rental portfolio.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Expert guidance on real estate investments and market opportunities.",
  },
  {
    icon: FileText,
    title: "Legal Assistance",
    description: "Complete legal support for all your property transactions.",
  },
  {
    icon: Users,
    title: "Tenant Screening",
    description: "Thorough background checks to find reliable tenants for your property.",
  },
  {
    icon: Shield,
    title: "Property Insurance",
    description: "Protect your investment with comprehensive property insurance solutions.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-cream-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Our Services
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl">
            Comprehensive real estate services tailored to meet all your property needs.
          </p>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-16">
        <ServicePillars />
      </section>

      {/* Additional Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-cream-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-navy/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

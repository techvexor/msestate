import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrustIndicators from "@/components/TrustIndicators";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SEO, seoConfig } from "@/utils/seo";
import { motion } from "framer-motion";
import { Award, Users, Building, Clock } from "lucide-react";

const stats = [
  { icon: Building, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const team = [
  {
    name: "Mohammed Salim",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sarah Ahmed",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Raj Patel",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Legal Advisor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-cream-light">
      <SEO
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
        canonical={seoConfig.about.canonical}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            About MS Estate
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl">
            Your trusted partner in finding the perfect property for over 15 years.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <p className="text-navy/70 mb-4">
                Founded in 2009, MS Estate has grown from a small family business to one of the most trusted names in real estate. Our journey began with a simple mission: to help people find their dream homes with honesty and integrity.
              </p>
              <p className="text-navy/70 mb-4">
                Over the years, we've helped thousands of families find their perfect properties, from cozy apartments to luxurious villas. Our success is built on strong relationships, deep market knowledge, and an unwavering commitment to our clients.
              </p>
              <p className="text-navy/70">
                Today, we continue to uphold the values that made us who we are – trust, transparency, and exceptional service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="MS Estate Office"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-xl shadow-lg">
                <p className="font-display text-4xl font-bold text-navy">15+</p>
                <p className="text-navy/80">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <p className="font-display text-4xl font-bold text-cream mb-2">{stat.value}</p>
                <p className="text-cream/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-display text-xl font-semibold text-navy">{member.name}</h3>
                <p className="text-navy/70">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Testimonials */}
      <Testimonials />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

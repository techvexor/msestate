import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight, Clock, Building2, Award, Shield, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy via-navy to-navy-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-3xl p-8 md:p-12 border border-gold/20 backdrop-blur-sm"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-cream mb-3">
                  Stay Updated with <span className="text-gold">MS Estate</span>
                </h3>
                <p className="text-cream/70 text-lg max-w-xl">
                  Subscribe to our newsletter for exclusive property listings, market insights, and investment opportunities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-navy/50 border-gold/30 text-cream placeholder:text-cream/50 h-14 px-6 rounded-xl min-w-[280px]"
                />
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy font-bold h-14 px-8 rounded-xl group"
                >
                  Subscribe
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-display text-3xl font-bold">
                <span className="text-cream">MS</span>
                <span className="text-gold">Estate</span>
              </h2>
            </Link>
            <p className="text-cream/70 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect property. With years of experience and a commitment to excellence, we make your real estate dreams a reality.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 border border-gold/20">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-cream/80 text-sm font-medium">RERA Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 border border-gold/20">
                <Shield className="w-4 h-4 text-gold" />
                <span className="text-cream/80 text-sm font-medium">Trusted</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/msestates.in", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/ms__estates", label: "Twitter" },
                { icon: Youtube, href: "https://www.youtube.com/@ms_estates", label: "YouTube" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center hover:from-gold/30 hover:to-gold/10 hover:border-gold/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-xl font-bold text-cream mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Properties", to: "/properties" },
                { label: "Services", to: "/services" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-cream/70 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Property Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-xl font-bold text-cream mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Property Types
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Luxury Apartments", to: "/properties" },
                { label: "Premium Villas", to: "/properties" },
                { label: "Commercial Spaces", to: "/properties" },
                { label: "Residential Plots", to: "/properties" },
                { label: "Office Spaces", to: "/properties" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-cream/70 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-xl font-bold text-cream mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-cream font-semibold mb-1">Head Office</p>
                  <p className="text-cream/70 text-sm leading-relaxed">
                    Sector 90, Noida,<br />
                    Uttar Pradesh 201301, IN
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-cream font-semibold mb-1">Phone</p>
                  <a href="tel:+919999091927" className="text-cream/70 text-sm hover:text-gold transition-colors">
                    +91 9999091927
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-cream font-semibold mb-1">Email</p>
                  <a href="mailto:info@msestate.in" className="text-cream/70 text-sm hover:text-gold transition-colors">
                    info@msestate.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-cream font-semibold mb-1">Working Hours</p>
                  <p className="text-cream/70 text-sm">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gold/10 bg-navy-dark/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-gold" />
              <p className="text-cream/60 text-sm">
                © 2024 MS Estate. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300">
                RERA Disclaimer
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Footer() {
  return (
    <footer className="bg-navy noise-texture">
      {/* Dual CTA Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-light rounded-2xl p-8 border border-gold/20"
          >
            <h3 className="font-display text-3xl font-bold text-cream mb-2">
              Get in Touch
            </h3>
            <p className="text-cream/70 mb-6">
              Let us help you find your dream property
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-navy border-gold/30 text-cream placeholder:text-cream/50"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-navy border-gold/30 text-cream placeholder:text-cream/50"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-navy border-gold/30 text-cream placeholder:text-cream/50"
              />
              <Textarea
                placeholder="Tell us about your requirements"
                rows={4}
                className="bg-navy border-gold/30 text-cream placeholder:text-cream/50"
              />
              <Button
                size="lg"
                className="w-full bg-gold hover:bg-gold-light text-navy font-semibold"
              >
                Submit Inquiry
              </Button>
            </form>
          </motion.div>

          {/* Office Info & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Office Location */}
            <div>
              <h3 className="font-display text-2xl font-bold text-cream mb-6">
                Visit Our Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-semibold mb-1">Head Office</p>
                    <p className="text-cream/70">
                      Sector 18, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-semibold mb-1">Phone</p>
                    <p className="text-cream/70">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-semibold mb-1">Email</p>
                    <p className="text-cream/70">info@msestate.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-2xl font-bold text-cream mb-6">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                  About Us
                </a>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                  Properties
                </a>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                  Services
                </a>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                  Blog
                </a>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                  Careers
                </a>
                <a href="#" className="text-cream/70 hover:text-gold transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-display text-2xl font-bold text-cream mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold/20 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-gold" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gold" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gold" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-gold" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm">
              © 2024 MS Estate. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                RERA Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

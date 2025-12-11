import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LocationMap from "@/components/LocationMap";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SEO, seoConfig } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Home } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9999091927"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@msestate.com", "sales@msestate.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Business District", "Mumbai, Maharashtra 400001"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! Our team will contact you shortly.");
    setFormData({ fullName: "", email: "", phone: "", propertyType: "", budget: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-cream-light">
      <SEO
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
        keywords={seoConfig.contact.keywords}
        canonical={seoConfig.contact.canonical}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "RealEstateAgent",
            "name": "MS Estate",
            "telephone": "+91-9999091927",
            "email": "info@msestate.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 90",
              "addressLocality": "Noida",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201301",
              "addressCountry": "IN"
            }
          }
        }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Contact Us
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl">
            Looking for your dream property? Fill out our inquiry form and our expert team will assist you in finding the perfect match.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy">
                    Property Inquiry Form
                  </h2>
                  <p className="text-navy/60 text-sm">Fill out the form below and we'll get back to you</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-navy font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-2 border-navy/20 focus:border-gold"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-navy font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-2 border-navy/20 focus:border-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-navy font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="mt-2 border-navy/20 focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="propertyType" className="text-navy font-medium">
                      Property Type <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) => handleSelectChange("propertyType", value)}
                      required
                    >
                      <SelectTrigger className="mt-2 border-navy/20 focus:border-gold">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="penthouse">Penthouse</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                        <SelectItem value="plot">Plot/Land</SelectItem>
                        <SelectItem value="commercial">Commercial Space</SelectItem>
                        <SelectItem value="farmhouse">Farmhouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-navy font-medium">
                      Budget Range <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => handleSelectChange("budget", value)}
                      required
                    >
                      <SelectTrigger className="mt-2 border-navy/20 focus:border-gold">
                        <SelectValue placeholder="Select your budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50L">Under ₹50 Lakhs</SelectItem>
                        <SelectItem value="50L-1Cr">₹50 Lakhs - ₹1 Crore</SelectItem>
                        <SelectItem value="1Cr-2Cr">₹1 Crore - ₹2 Crores</SelectItem>
                        <SelectItem value="2Cr-5Cr">₹2 Crores - ₹5 Crores</SelectItem>
                        <SelectItem value="5Cr-10Cr">₹5 Crores - ₹10 Crores</SelectItem>
                        <SelectItem value="above-10Cr">Above ₹10 Crores</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-navy font-medium">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, preferred location, amenities, or any specific questions..."
                    rows={5}
                    required
                    className="mt-2 border-navy/20 focus:border-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-navy hover:bg-navy/90 text-cream font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-display text-2xl font-bold text-navy mb-6">
                Get in Touch
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md"
                  >
                    <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-navy mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-navy/70 text-sm">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <LocationMap />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

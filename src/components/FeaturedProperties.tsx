import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 1,
    name: "Prestige Towers",
    type: "APARTMENT",
    location: "Sector 62, Noida",
    price: 18000000,
    description: "Premium apartments with world-class amenities and facilities.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
    beds: 3,
    baths: 3,
    area: "2100 sq.ft",
  },
  {
    id: 2,
    name: "Royal Enclave",
    type: "VILLA",
    location: "Sector 75, Noida",
    price: 35000000,
    description: "Ultra-luxury villas with premium finishes and exclusive amenities.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90",
    beds: 5,
    baths: 5,
    area: "4500 sq.ft",
  },
];

const formatPrice = (price: number): string => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(1)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(0)} Lac`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
};

export default function FeaturedProperties() {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request for:", selectedProperty?.name, formData);
    // Handle form submission here
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-cream noise-texture">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
            Featured Properties
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto font-light leading-relaxed">
            Handpicked premium properties that define luxury living in NCR
          </p>
        </motion.div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Home className="w-4 h-4 text-gold" />
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {property.type}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                  {property.name}
                </h3>
                
                <div className="flex items-center text-navy/60 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <p className="text-sm text-navy/70 mb-4 leading-relaxed">
                  {property.description}
                </p>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-4 text-sm text-navy/70">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Price and Quote Button */}
                <div className="flex items-center justify-between pt-4 border-t border-navy/10">
                  <span className="text-3xl font-bold text-gold">
                    {formatPrice(property.price)}
                  </span>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="bg-navy text-cream hover:bg-navy/90 font-semibold"
                        onClick={() => setSelectedProperty(property)}
                      >
                        Quote Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl text-navy">
                          Request a Quote
                        </DialogTitle>
                        <DialogDescription>
                          Get a personalized quote for {property.name}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message (Optional)</Label>
                          <Textarea
                            id="message"
                            placeholder="Any specific requirements or questions?"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-navy text-cream hover:bg-navy/90"
                        >
                          Submit Quote Request
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-cream font-semibold px-8"
            onClick={() => navigate('/properties')}
          >
            View All Properties
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

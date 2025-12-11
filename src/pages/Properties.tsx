import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, ArrowRight, Building2, Home, Calendar, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const properties = [
  {
    id: 1,
    name: "Skyline Residences",
    location: "Sector 150, Noida",
    price: 12000000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=90",
    beds: 3,
    baths: 3,
    area: "1850 sq.ft",
    type: "Apartment",
    status: "Ready to Move",
    featured: true,
    amenities: ["Swimming Pool", "Gym", "Parking", "Security"],
    description: "Luxurious 3BHK apartments with modern amenities and stunning city views."
  },
  {
    id: 2,
    name: "Green Valley Villas",
    location: "Greater Noida West",
    price: 25000000,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90",
    beds: 4,
    baths: 4,
    area: "3200 sq.ft",
    type: "Villa",
    status: "Under Construction",
    featured: false,
    amenities: ["Private Garden", "Club House", "Kids Play Area", "24/7 Security"],
    description: "Spacious villas with private gardens in a gated community."
  },
  {
    id: 3,
    name: "Urban Heights",
    location: "Sector 137, Noida",
    price: 9500000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=90",
    beds: 2,
    baths: 2,
    area: "1200 sq.ft",
    type: "Apartment",
    status: "Ready to Move",
    featured: false,
    amenities: ["Gym", "Parking", "Power Backup", "Lift"],
    description: "Affordable 2BHK apartments perfect for young professionals."
  },
  {
    id: 4,
    name: "Prestige Towers",
    location: "Sector 62, Noida",
    price: 18000000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
    beds: 3,
    baths: 3,
    area: "2100 sq.ft",
    type: "Apartment",
    status: "Ready to Move",
    featured: false,
    amenities: ["Swimming Pool", "Gym", "Club House", "Parking"],
    description: "Premium apartments with world-class amenities and facilities."
  },
  {
    id: 5,
    name: "Royal Enclave",
    location: "Sector 75, Noida",
    price: 35000000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
    beds: 5,
    baths: 5,
    area: "4500 sq.ft",
    type: "Villa",
    status: "Ready to Move",
    featured: true,
    amenities: ["Private Pool", "Home Theater", "Servant Quarter", "Landscaped Garden"],
    description: "Ultra-luxury villas with premium finishes and exclusive amenities."
  },
  {
    id: 6,
    name: "Metro View Apartments",
    location: "Sector 143, Noida",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=90",
    beds: 2,
    baths: 2,
    area: "1100 sq.ft",
    type: "Apartment",
    status: "Under Construction",
    featured: false,
    amenities: ["Metro Connectivity", "Gym", "Parking", "Security"],
    description: "Well-connected apartments near metro station with modern amenities."
  },
  {
    id: 7,
    name: "Lake View Residency",
    location: "Greater Noida",
    price: 15000000,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=90",
    beds: 3,
    baths: 3,
    area: "1950 sq.ft",
    type: "Apartment",
    status: "Ready to Move",
    featured: false,
    amenities: ["Lake View", "Jogging Track", "Gym", "Club House"],
    description: "Serene apartments with beautiful lake views and peaceful surroundings."
  },
  {
    id: 8,
    name: "Tech Park Homes",
    location: "Sector 132, Noida",
    price: 11000000,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=90",
    beds: 3,
    baths: 2,
    area: "1650 sq.ft",
    type: "Apartment",
    status: "Under Construction",
    featured: false,
    amenities: ["IT Park Proximity", "Gym", "Parking", "Power Backup"],
    description: "Modern apartments near major IT parks, ideal for tech professionals."
  },
  {
    id: 9,
    name: "Garden Estate",
    location: "Sector 168, Noida",
    price: 28000000,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=90",
    beds: 4,
    baths: 4,
    area: "3500 sq.ft",
    type: "Villa",
    status: "Ready to Move",
    featured: true,
    amenities: ["Large Garden", "Private Parking", "Security", "Club House"],
    description: "Elegant villas with expansive gardens and premium lifestyle amenities."
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

export default function Properties() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquiryProperty, setEnquiryProperty] = useState<typeof properties[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const filteredProperties = selectedType === "all" 
    ? properties 
    : properties.filter(p => p.type.toLowerCase() === selectedType);

  const handleEnquiry = (property: typeof properties[0]) => {
    setEnquiryProperty(property);
    setShowEnquiryForm(true);
  };

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", { ...formData, property: enquiryProperty?.name });
    setShowEnquiryForm(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Thank you! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen bg-cream-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Our Properties
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl">
            Discover our exclusive collection of premium properties across prime locations.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-cream-light border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SearchBar />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Tabs value={selectedType} onValueChange={setSelectedType} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All Properties</TabsTrigger>
              <TabsTrigger value="apartment">Apartments</TabsTrigger>
              <TabsTrigger value="villa">Villas</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProperty(property)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="outline"
                      className="border-2 border-cream text-cream hover:bg-cream hover:text-navy w-fit"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Featured Badge */}
                  {property.featured && (
                    <Badge className="absolute top-4 left-4 bg-gold text-navy font-semibold text-xs">
                      Featured
                    </Badge>
                  )}

                  {/* Status Badge */}
                  <Badge className="absolute top-4 right-4 bg-navy text-cream font-semibold text-xs">
                    {property.status}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {property.type === "Villa" ? (
                      <Home className="w-4 h-4 text-gold" />
                    ) : (
                      <Building2 className="w-4 h-4 text-gold" />
                    )}
                    <span className="text-xs font-semibold text-navy/60 uppercase tracking-wide">
                      {property.type}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-navy mb-2 tracking-tight">
                    {property.name}
                  </h3>
                  
                  <div className="flex items-center text-navy/60 mb-3">
                    <MapPin className="w-4 h-4 mr-1 text-gold" />
                    <span className="text-sm font-medium">{property.location}</span>
                  </div>

                  <p className="text-sm text-navy/70 mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  {/* Specs */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-navy/70 font-medium">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-navy/50" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 text-navy/50" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize className="w-4 h-4 text-navy/50" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-navy/10">
                    <span className="text-3xl font-bold text-gold tracking-tight">
                      {formatPrice(property.price)}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-navy hover:bg-navy-light text-cream"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEnquiry(property);
                      }}
                    >
                      Quote Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-navy/60 text-lg">No properties found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div 
          className="fixed inset-0 bg-navy/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProperty(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <img
                src={selectedProperty.image}
                alt={selectedProperty.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-cream transition-colors"
              >
                <ArrowRight className="w-6 h-6 text-navy rotate-180" />
              </button>
              {selectedProperty.featured && (
                <Badge className="absolute top-4 left-4 bg-gold text-navy font-semibold">
                  Featured Property
                </Badge>
              )}
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-2">
                {selectedProperty.type === "Villa" ? (
                  <Home className="w-5 h-5 text-gold" />
                ) : (
                  <Building2 className="w-5 h-5 text-gold" />
                )}
                <span className="text-sm font-semibold text-navy/60 uppercase tracking-wide">
                  {selectedProperty.type}
                </span>
              </div>

              <h2 className="font-display text-4xl font-bold text-navy mb-2">
                {selectedProperty.name}
              </h2>

              <div className="flex items-center text-navy/60 mb-4">
                <MapPin className="w-5 h-5 mr-2 text-gold" />
                <span className="text-lg">{selectedProperty.location}</span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-navy/50" />
                <span className="text-navy/70">{selectedProperty.status}</span>
              </div>

              <p className="text-navy/70 text-lg mb-6 leading-relaxed">
                {selectedProperty.description}
              </p>

              <div className="grid grid-cols-3 gap-6 mb-6 p-6 bg-cream-light rounded-xl">
                <div className="text-center">
                  <Bed className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-navy">{selectedProperty.beds}</p>
                  <p className="text-sm text-navy/60">Bedrooms</p>
                </div>
                <div className="text-center">
                  <Bath className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-navy">{selectedProperty.baths}</p>
                  <p className="text-sm text-navy/60">Bathrooms</p>
                </div>
                <div className="text-center">
                  <Maximize className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-navy">{selectedProperty.area}</p>
                  <p className="text-sm text-navy/60">Area</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProperty.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                      <span className="text-navy/70">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-navy/10">
                <div>
                  <p className="text-sm text-navy/60 mb-1">Price</p>
                  <p className="text-4xl font-bold text-gold">
                    {formatPrice(selectedProperty.price)}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-navy text-navy hover:bg-navy hover:text-cream"
                    onClick={() => handleEnquiry(selectedProperty)}
                  >
                    Quote Now
                  </Button>
                  <Button size="lg" className="bg-gold hover:bg-gold-light text-navy">
                    Contact Agent
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Enquiry Form Modal */}
      {showEnquiryForm && enquiryProperty && (
        <div 
          className="fixed inset-0 bg-navy/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowEnquiryForm(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-display text-3xl font-bold text-navy mb-2">
                    Property Enquiry
                  </h2>
                  <p className="text-navy/60">
                    Get a quote for {enquiryProperty.name}
                  </p>
                </div>
                <button
                  onClick={() => setShowEnquiryForm(false)}
                  className="bg-cream rounded-full p-2 hover:bg-navy/10 transition-colors"
                >
                  <X className="w-6 h-6 text-navy" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-cream-light rounded-xl">
                <div className="flex items-center gap-4">
                  <img
                    src={enquiryProperty.image}
                    alt={enquiryProperty.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-navy text-lg">{enquiryProperty.name}</h3>
                    <p className="text-navy/60 text-sm">{enquiryProperty.location}</p>
                    <p className="text-gold font-bold text-xl mt-1">
                      {formatPrice(enquiryProperty.price)}
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmitEnquiry} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-navy font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 border-navy/20 focus:border-gold"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-navy font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 border-navy/20 focus:border-gold"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-navy font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 border-navy/20 focus:border-gold"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-navy font-semibold">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 border-navy/20 focus:border-gold min-h-[120px]"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-2 border-navy text-navy hover:bg-navy hover:text-cream"
                    onClick={() => setShowEnquiryForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gold hover:bg-gold-light text-navy font-semibold"
                  >
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

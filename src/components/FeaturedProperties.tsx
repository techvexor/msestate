import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const properties = [
  {
    id: 1,
    name: "Skyline Residences",
    location: "Sector 150, Noida",
    price: "₹1.2 Cr",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    beds: 3,
    baths: 3,
    area: "1850 sq.ft",
    rera: "UPRERAPRJ15690",
    featured: true,
  },
  {
    id: 2,
    name: "Green Valley Villas",
    location: "Greater Noida West",
    price: "₹2.5 Cr",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    beds: 4,
    baths: 4,
    area: "3200 sq.ft",
    rera: "UPRERAPRJ16892",
    featured: false,
  },
  {
    id: 3,
    name: "Urban Heights",
    location: "Sector 137, Noida",
    price: "₹95 Lac",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    beds: 2,
    baths: 2,
    area: "1200 sq.ft",
    rera: "UPRERAPRJ14523",
    featured: false,
  },
  {
    id: 4,
    name: "Prestige Towers",
    location: "Sector 62, Noida",
    price: "₹1.8 Cr",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    beds: 3,
    baths: 3,
    area: "2100 sq.ft",
    rera: "UPRERAPRJ17234",
    featured: false,
  },
];

export default function FeaturedProperties() {
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Handpicked premium properties that define luxury living in NCR
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                property.featured ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${property.featured ? "h-96" : "h-64"}`}>
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

                {/* RERA Badge */}
                <Badge className="absolute top-4 right-4 bg-gold text-navy font-mono text-xs">
                  {property.rera}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-navy mb-2">
                  {property.name}
                </h3>
                <div className="flex items-center text-navy/60 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

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

                {/* Price */}
                <div className="font-mono text-2xl font-semibold text-gold">
                  {property.price}
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
          >
            View All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

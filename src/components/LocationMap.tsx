import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Noida", properties: 150, x: "45%", y: "40%" },
  { name: "Greater Noida", properties: 120, x: "55%", y: "55%" },
  { name: "Gurugram", properties: 180, x: "25%", y: "45%" },
  { name: "Ghaziabad", properties: 90, x: "60%", y: "30%" },
  { name: "Faridabad", properties: 75, x: "35%", y: "65%" },
];

export default function LocationMap() {
  return (
    <section className="py-32 px-6 md:px-12 bg-navy noise-texture">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Serving Across NCR
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            Premium properties in prime locations across the National Capital Region
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-navy-light rounded-3xl p-12 border border-gold/20"
        >
          {/* Simplified NCR Map Visualization */}
          <div className="relative h-96 md:h-[500px]">
            {/* Map Background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <svg
                viewBox="0 0 800 600"
                className="w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 200 250 L 350 200 L 500 250 L 550 350 L 450 450 L 300 450 L 200 350 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gold"
                />
                <circle cx="400" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/30" />
                <circle cx="400" cy="300" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/30" />
              </svg>
            </div>

            {/* Location Markers */}
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute group cursor-pointer"
                style={{ left: location.x, top: location.y, transform: "translate(-50%, -50%)" }}
              >
                {/* Pulse Animation */}
                <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
                
                {/* Marker */}
                <div className="relative z-10 bg-gold rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-navy" />
                </div>

                {/* Info Card */}
                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-cream rounded-xl p-4 shadow-xl whitespace-nowrap">
                    <p className="font-display font-semibold text-navy mb-1">
                      {location.name}
                    </p>
                    <p className="font-mono text-sm text-gold">
                      {location.properties} Properties
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Location List */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-navy border border-gold/20 hover:border-gold/40 transition-colors duration-300 cursor-pointer"
              >
                <p className="text-cream font-semibold mb-1">{location.name}</p>
                <p className="font-mono text-sm text-gold">{location.properties}+</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

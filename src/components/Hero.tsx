import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Vignette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,24,40,0.3)_100%)] z-10" />
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=90"
          alt="Luxury NCR Property"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="font-display font-bold text-white text-center text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
        >
          Discover Your Dream
          <br />
          <span className="text-gold">Property in NCR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-cream-light text-center text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
        >
          Premium RERA-approved properties curated for discerning homebuyers and investors.
          Your trusted partner in NCR real estate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore Properties
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cream text-cream hover:bg-cream hover:text-navy font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            Schedule Consultation
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-cream" />
        </motion.div>
      </motion.div>
    </section>
  );
}

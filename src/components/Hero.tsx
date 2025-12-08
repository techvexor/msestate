import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90",
    alt: "Luxury Modern Villa",
    tagline: "Modern Living Redefined",
  },
  {
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90",
    alt: "Contemporary Mansion",
    tagline: "Where Elegance Meets Comfort",
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=90",
    alt: "Premium Estate",
    tagline: "Your Dream Awaits",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90",
    alt: "Elegant Home",
    tagline: "Crafted for Excellence",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Color grading overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/60 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,24,40,0.6)_100%)] z-10" />
          <div className="absolute inset-0 bg-gold/5 mix-blend-overlay z-10" />
          <img
            src={heroImages[currentIndex].url}
            alt={heroImages[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gold w-8" : "bg-cream/40 hover:bg-cream/60"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        type="button"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-cream hover:bg-white/20 hover:text-gold transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        type="button"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-cream hover:bg-white/20 hover:text-gold transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="font-display font-bold text-white text-center text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight tracking-tight"
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
        >
          Find Your
          <span className="text-gold"> Luxury Home</span>
        </motion.h1>

        {/* Dynamic Tagline for each slide */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-cream/90 text-center text-lg md:text-xl mb-8 font-medium tracking-wide"
            style={{ textShadow: "0 2px 15px rgba(0,0,0,0.6)" }}
          >
            {heroImages[currentIndex].tagline}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(201,169,110,0.4)] rounded-xl"
          >
            <Building2 className="w-5 h-5 mr-2" />
            Explore Properties
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cream/80 text-cream hover:bg-cream hover:text-navy font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-xl"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-cream/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}

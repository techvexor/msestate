import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Building2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
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
    <section className="relative h-screen w-full overflow-hidden bg-navy-dark">
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
          {/* Enhanced Dark Blue Color Grading Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050d16]/90 via-[#0A1828]/50 to-[#071422]/95 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2540]/80 via-transparent to-[#0f2540]/80 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(5,13,22,0.7)_70%)] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(26,58,92,0.4)_0%,transparent_50%)] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,110,0.08)_0%,transparent_40%)] z-10" />
          {/* Subtle blue tint overlay */}
          <div className="absolute inset-0 bg-[#1a3a5c]/20 mix-blend-color z-10" />
          <img
            src={heroImages[currentIndex].url}
            alt={heroImages[currentIndex].alt}
            className="w-full h-full object-cover filter saturate-[0.85] brightness-[0.9]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050d16] to-transparent z-15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050d16] to-transparent z-15 pointer-events-none" />

      {/* Animated Glow Effects */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a3a5c]/20 rounded-full blur-3xl z-5 pointer-events-none"
      />
      <motion.div
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl z-5 pointer-events-none"
      />

      {/* Slide Indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-95 ${
              index === currentIndex 
                ? "bg-gradient-to-r from-gold to-gold-light w-10 shadow-[0_0_15px_rgba(201,169,110,0.5)]" 
                : "bg-white/20 hover:bg-white/40 w-6"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        type="button"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-navy-medium/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:bg-navy-accent/80 hover:text-gold hover:border-gold/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(201,169,110,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-100 appearance-none group"
        aria-label="Previous slide"
        style={{ WebkitAppearance: 'none', WebkitTapHighlightColor: 'transparent' }}
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={goToNext}
        type="button"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-navy-medium/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:bg-navy-accent/80 hover:text-gold hover:border-gold/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(201,169,110,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-100 appearance-none group"
        aria-label="Next slide"
        style={{ WebkitAppearance: 'none', WebkitTapHighlightColor: 'transparent' }}
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 md:px-12">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-navy-medium/80 to-navy-accent/60 backdrop-blur-xl border border-gold/20 shadow-[0_0_30px_rgba(201,169,110,0.1)]"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium tracking-wider text-gold uppercase">Premium Real Estate</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="font-display font-bold text-center text-4xl md:text-6xl lg:text-8xl mb-6 leading-[1.1] tracking-tight"
        >
          <span 
            className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent"
            style={{ textShadow: "0 4px 60px rgba(255,255,255,0.15)" }}
          >
            Find Your
          </span>
          <br />
          <span 
            className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(201,169,110,0.4)]"
          >
            Luxury Home
          </span>
        </motion.h1>

        {/* Dynamic Tagline for each slide */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg md:text-xl lg:text-2xl mb-10 font-medium tracking-wide max-w-2xl"
          >
            <span className="bg-gradient-to-r from-white/60 via-white/90 to-white/60 bg-clip-text text-transparent">
              {heroImages[currentIndex].tagline}
            </span>
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
            className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-navy font-bold px-10 py-7 text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(201,169,110,0.5)] rounded-2xl border border-gold-light/20 group"
          >
            <Building2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Explore Properties
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/5 text-white hover:bg-white hover:text-navy hover:border-white font-semibold px-10 py-7 text-base transition-all duration-300 hover:scale-105 backdrop-blur-xl rounded-2xl hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)]"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

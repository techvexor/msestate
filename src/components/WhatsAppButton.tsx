import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in MS Estate properties. Can you share more details?");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300 group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-navy text-cream px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-xl">
          Chat with us on WhatsApp
        </div>
      </div>
    </motion.button>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function SearchBar() {
  const [budget, setBudget] = useState([50]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative -mt-24 z-30 mx-auto max-w-6xl px-6"
    >
      <div className="backdrop-blur-xl bg-cream-light/85 rounded-2xl shadow-2xl border border-gold/30 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Location */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-navy flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              Location
            </label>
            <Select>
              <SelectTrigger className="bg-white border-navy/20">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="noida">Noida</SelectItem>
                <SelectItem value="greater-noida">Greater Noida</SelectItem>
                <SelectItem value="gurugram">Gurugram</SelectItem>
                <SelectItem value="ghaziabad">Ghaziabad</SelectItem>
                <SelectItem value="faridabad">Faridabad</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Property Type */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-navy flex items-center gap-2">
              <Home className="w-4 h-4 text-gold" />
              Property Type
            </label>
            <Select>
              <SelectTrigger className="bg-white border-navy/20">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="plot">Plot</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Budget Range */}
          <div className="space-y-2 lg:col-span-2">
            <label className="text-sm font-semibold text-navy flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gold" />
              Budget Range: ₹{budget[0]}L - ₹{budget[0] * 2}L
            </label>
            <Slider
              value={budget}
              onValueChange={setBudget}
              min={10}
              max={500}
              step={10}
              className="mt-4"
            />
          </div>
        </div>

        <Button
          size="lg"
          className="w-full bg-navy hover:bg-navy-light text-cream font-semibold transition-all duration-300 hover:scale-[1.02]"
        >
          <Search className="w-5 h-5 mr-2" />
          Search Properties
        </Button>
      </div>
    </motion.div>
  );
}

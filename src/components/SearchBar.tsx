import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Home, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState([50]);

  const handleSearch = () => {
    const searchParams = {
      location,
      propertyType,
      budgetMin: budget[0],
      budgetMax: budget[0] * 2
    };
    
    console.log("Search Parameters:", searchParams);
    
    // You can add your search logic here
    // For example: navigate to results page or filter properties
    alert(`Searching for:\nLocation: ${location || 'Any'}\nProperty Type: ${propertyType || 'Any'}\nBudget: ₹${budget[0]}L - ₹${budget[0] * 2}L`);
  };

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
            <Select value={location} onValueChange={setLocation}>
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
            <Select value={propertyType} onValueChange={setPropertyType}>
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
              <IndianRupee className="w-4 h-4 text-gold" />
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
          onClick={handleSearch}
          className="w-full bg-navy hover:bg-navy-light text-cream font-semibold transition-all duration-300 hover:scale-[1.02]"
        >
          <Search className="w-5 h-5 mr-2" />
          Search Properties
        </Button>
      </div>
    </motion.div>
  );
}

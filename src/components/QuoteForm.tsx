import { useState } from "react";
import { motion } from "framer-motion";
import { X, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendQuoteRequest, QuoteFormData } from "@/lib/api";

interface PropertyInfo {
  name: string;
  location: string;
  price: string;
  image?: string;
}

interface QuoteFormProps {
  property?: PropertyInfo;
  source?: string;
  onClose: () => void;
  onSuccess?: () => void;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function QuoteForm({ property, source = "Website", onClose, onSuccess }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const quoteData: QuoteFormData = {
      ...formData,
      source,
      ...(property && {
        propertyName: property.name,
        propertyLocation: property.location,
        propertyPrice: property.price,
      }),
    };

    const result = await sendQuoteRequest(quoteData);

    if (result.success) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => {
        onSuccess?.();
        onClose();
      }, 2000);
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Failed to send. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-navy/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
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
                {property ? "Property Enquiry" : "Get a Quote"}
              </h2>
              <p className="text-navy/60">
                {property
                  ? `Get a quote for ${property.name}`
                  : "Fill in your details and we'll get back to you"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="bg-cream rounded-full p-2 hover:bg-navy/10 transition-colors"
            >
              <X className="w-6 h-6 text-navy" />
            </button>
          </div>

          {/* Property Preview */}
          {property && (
            <div className="mb-6 p-4 bg-cream-light rounded-xl">
              <div className="flex items-center gap-4">
                {property.image && (
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}
                <div>
                  <h3 className="font-bold text-navy text-lg">{property.name}</h3>
                  <p className="text-navy/60 text-sm">{property.location}</p>
                  <p className="text-gold font-bold text-xl mt-1">{property.price}</p>
                </div>
              </div>
            </div>
          )}

          {/* Success State */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy mb-2">
                Thank You!
              </h3>
              <p className="text-navy/60">
                We've received your enquiry and will contact you within 24 hours.
              </p>
            </motion.div>
          )}

          {/* Form */}
          {status !== "success" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </motion.div>
              )}

              <div>
                <Label htmlFor="name" className="text-navy font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  disabled={status === "loading"}
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
                  disabled={status === "loading"}
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
                  disabled={status === "loading"}
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
                  disabled={status === "loading"}
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
                  disabled={status === "loading"}
                  className="flex-1 border-2 border-navy text-navy hover:bg-navy hover:text-cream"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex-1 bg-gold hover:bg-gold-light text-navy font-semibold"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

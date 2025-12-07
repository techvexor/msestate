import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, Building2, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Properties Sold",
  },
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono text-5xl font-bold text-gold">
      {count}
      {suffix}
    </span>
  );
}

export default function TrustIndicators() {
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
            Trusted by Thousands
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            Building dreams and delivering excellence for over a decade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-navy-light border border-gold/20 hover:border-gold/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-cream/80 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-16 border-t border-gold/20"
        >
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-gold" />
              <div>
                <p className="text-cream font-semibold">RERA Certified</p>
                <p className="text-cream/60 text-sm">Authorized Agent</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-gold" />
              <div>
                <p className="text-cream font-semibold">ISO 9001:2015</p>
                <p className="text-cream/60 text-sm">Quality Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-gold" />
              <div>
                <p className="text-cream font-semibold">Member CREDAI</p>
                <p className="text-cream/60 text-sm">Industry Association</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

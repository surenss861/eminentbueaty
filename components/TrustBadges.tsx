"use client";

import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, Star, Users, Calendar } from "lucide-react";

const badges = [
  {
    icon: Award,
    label: "Canadian Certified",
    value: "Aesthetician",
  },
  {
    icon: Shield,
    label: "FDA-Approved",
    value: "Products Only",
  },
  {
    icon: Star,
    label: "5.0 Rating",
    value: "100+ Reviews",
  },
  {
    icon: Users,
    label: "500+",
    value: "Happy Clients",
  },
  {
    icon: Calendar,
    label: "5+ Years",
    value: "Experience",
  },
  {
    icon: CheckCircle,
    label: "100%",
    value: "Satisfaction",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-20 bg-dark-wine-black relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-light-off-white/60 mb-4 font-light uppercase tracking-wider">
            trusted by toronto&apos;s most discerning clients
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent-rose-gold/10 rounded-full mb-4 border border-accent-rose-gold/20 group-hover:bg-accent-rose-gold/20 transition-colors"
                >
                  <Icon className="w-8 h-8 text-accent-rose-gold" />
                </motion.div>
                <p className="text-light-off-white text-lg font-light mb-1">{badge.label}</p>
                <p className="text-light-off-white/60 text-sm font-light">{badge.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { Award, Shield, Sparkles, Heart } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "licensed experts",
    description: "canadian certified aesthetician with ongoing training in the latest techniques",
  },
  {
    icon: Sparkles,
    title: "bespoke treatments",
    description: "personalized plans tailored to your unique features and goals",
  },
  {
    icon: Shield,
    title: "proven results",
    description: "real transformations backed by years of expertise and client satisfaction",
  },
  {
    icon: Heart,
    title: "intimate care",
    description: "a comfortable, focused environment where your journey is our priority",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-light-cream relative overflow-hidden">
      {/* Subtle Grain */}
      <div className="absolute inset-0 bg-grain opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-normal text-dark-espresso mb-4 lowercase">
            why choose us
          </h2>
          <p className="text-lg text-dark-espresso/60 font-light max-w-2xl mx-auto">
            glow is the new power
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center space-y-4 p-8 rounded-sm bg-white/50 backdrop-blur-sm border border-base-champagne-warm/30 hover:border-accent-rose-gold/30 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-rose-gold/10 mb-4"
                >
                  <Icon className="w-8 h-8 text-accent-rose-gold" />
                </motion.div>
                <h3 className="text-xl font-serif font-normal text-dark-espresso mb-2 lowercase">
                  {reason.title}
                </h3>
                <p className="text-dark-espresso/60 font-light text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

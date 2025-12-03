"use client";

import { motion } from "framer-motion";
import { Award, Heart, Shield, Sparkles, Eye, Clock } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "certified expertise",
    description: "canadian certified aesthetician with 5+ years of specialized training in advanced aesthetic techniques.",
  },
  {
    icon: Sparkles,
    title: "premium technology",
    description: "only FDA-approved devices and professional-grade products from trusted, industry-leading brands.",
  },
  {
    icon: Heart,
    title: "personalized care",
    description: "every treatment is tailored to your unique skin, goals, and concerns through comprehensive consultations.",
  },
  {
    icon: Shield,
    title: "proven results",
    description: "500+ satisfied clients with a 5.0 rating. real transformations. real confidence. real results.",
  },
  {
    icon: Eye,
    title: "artistic vision",
    description: "where technical mastery meets artistic vision. subtle refinements that create transformative impact.",
  },
  {
    icon: Clock,
    title: "minimal downtime",
    description: "most treatments have zero downtime. return to your life immediately, glowing and confident.",
  },
];

export default function WhyChooseUsEnhanced() {
  return (
    <section className="py-32 bg-dark-midnight-plum relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-10" />

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-rose-gold/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-accent-rose-gold/60 to-transparent mx-auto mb-10"
          />
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-light-off-white mb-6 lowercase leading-tight text-shadow-soft">
            why choose us
          </h2>
          <p className="text-xl text-light-off-white/75 font-light max-w-2xl mx-auto leading-relaxed">
            the difference between a treatment and a transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-8 bg-dark-wine-black/50 backdrop-blur-sm border border-light-off-white/10 rounded-sm hover:border-accent-rose-gold/30 transition-all duration-500 group"
              >
                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-accent-rose-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"
                  initial={false}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-accent-rose-gold/10 rounded-full mb-6 border border-accent-rose-gold/20 group-hover:bg-accent-rose-gold/20 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-accent-rose-gold" />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-normal text-light-off-white mb-4 lowercase">
                    {reason.title}
                  </h3>
                  <p className="text-light-off-white/70 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


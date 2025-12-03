"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Shield, Sparkles, Heart } from "lucide-react";
import { useRef } from "react";

const reasons = [
  {
    icon: Award,
    title: "licensed experts",
    description: "canadian certified aesthetician with ongoing training in the latest techniques",
    color: "from-accent-rose-gold/20 to-accent-rose-gold/5",
  },
  {
    icon: Sparkles,
    title: "bespoke treatments",
    description: "personalized plans tailored to your unique features and goals",
    color: "from-accent-mauve/20 to-accent-mauve/5",
  },
  {
    icon: Shield,
    title: "proven results",
    description: "real transformations backed by years of expertise and client satisfaction",
    color: "from-accent-rose-gold/20 to-accent-rose-gold/5",
  },
  {
    icon: Heart,
    title: "intimate care",
    description: "a comfortable, focused environment where your journey is our priority",
    color: "from-accent-mauve/20 to-accent-mauve/5",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, -50]);

  return (
    <section ref={sectionRef} className="py-40 bg-light-cream relative overflow-hidden">
      {/* Subtle Grain */}
      <div className="absolute inset-0 bg-grain opacity-20" />

      {/* Background Glow */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.3]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-rose-gold/5 rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm text-accent-rose-gold uppercase tracking-[0.3em] mb-6 font-light"
          >
            why choose us
          </motion.p>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-dark-espresso mb-6 lowercase leading-tight">
            glow is the new power
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-accent-rose-gold to-transparent mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div className={`relative p-10 rounded-sm bg-gradient-to-br ${reason.color} backdrop-blur-sm border border-accent-rose-gold/10 hover:border-accent-rose-gold/30 transition-all duration-500 h-full`}>
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 bg-accent-rose-gold/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/50 backdrop-blur-sm mb-6 relative z-10 shadow-lg"
                  >
                    <Icon className="w-10 h-10 text-accent-rose-gold" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-normal text-dark-espresso mb-4 lowercase">
                      {reason.title}
                    </h3>
                    <p className="text-dark-espresso/60 font-light text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Decorative Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    className="absolute top-4 right-4 text-6xl font-serif text-dark-espresso/5"
                  >
                    {index + 1}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

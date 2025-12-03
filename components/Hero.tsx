"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-espresso">
      {/* Background Image with Motion Blur */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury spa treatment room"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-espresso via-dark-wine-black to-dark-midnight-plum" />
        <div className="absolute inset-0 bg-grain opacity-20" />
      </motion.div>

      {/* Animated Sparkles */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent-rose-gold/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-accent-champagne-blush/15 rounded-full blur-3xl"
      />

      {/* Inner Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-rose-gold/10 via-transparent to-transparent" />

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-light-off-white mb-8 leading-[0.95] tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                beauty is power.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-accent-rose-gold"
              >
                silence is strength.
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl md:text-2xl text-light-off-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              you already have it. we just bring it forward.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <MagneticButton>
                <Link
                  href="/contact#book"
                  className="group bg-accent-rose-gold/20 backdrop-blur-sm border border-accent-rose-gold/30 text-light-off-white px-10 py-4 rounded-sm font-light hover:bg-accent-rose-gold/30 transition-all flex items-center space-x-2 tracking-wide text-sm uppercase relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-accent-rose-gold/10"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                  <span className="relative z-10">begin your ritual</span>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/services"
                  className="border border-light-off-white/20 text-light-off-white px-10 py-4 rounded-sm font-light hover:bg-light-off-white/5 transition-all tracking-wide text-sm uppercase backdrop-blur-sm relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-light-off-white/5"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                  <span className="relative z-10">view treatments</span>
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

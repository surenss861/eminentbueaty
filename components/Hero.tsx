"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blush-base">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: backgroundY, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury spa treatment room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blush-base/95 via-blush-deep/85 to-blush-base/95 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-shimmer opacity-30" />
      </motion.div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gold-soft/20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gold-champagne/20 rounded-full blur-3xl z-0"
      />

      {/* Floating Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-glow z-0"
      />

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
            {/* Soft Phrase with Stagger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm md:text-base text-ink-espresso/70 font-light tracking-[0.3em] uppercase inline-block mr-4"
              >
                refine.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm md:text-base text-ink-espresso/70 font-light tracking-[0.3em] uppercase inline-block mr-4"
              >
                restore.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm md:text-base text-ink-espresso/70 font-light tracking-[0.3em] uppercase inline-block"
              >
                reveal.
              </motion.span>
            </motion.div>

            {/* Bold Headline with Split Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-ink-black mb-6 leading-[0.95] tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                beauty begins
              </motion.span>
              <motion.span
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-gold-soft"
              >
                with precision
              </motion.span>
            </motion.h1>

            {/* Subheadline with Fade */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg md:text-xl text-ink-espresso/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              where confidence begins under the skin.
            </motion.p>

            {/* CTA Buttons with Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="group bg-ink-black text-white px-10 py-4 rounded-sm font-light hover:bg-ink-espresso transition-all flex items-center space-x-2 tracking-wide text-sm uppercase relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold-soft/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">view treatments</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact#book"
                  className="border border-ink-black/30 text-ink-black px-10 py-4 rounded-sm font-light hover:bg-ink-black hover:text-white transition-all tracking-wide text-sm uppercase bg-white/60 backdrop-blur-sm relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-ink-black"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                  <span className="relative z-10">book consult</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

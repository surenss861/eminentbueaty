"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const results = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&w=600&h=800",
    after: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop&w=600&h=800",
    quote: "i've never felt this confident in my skin.",
    treatment: "dermal fillers + morpheus8",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&w=600&h=800",
    after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&w=600&h=800",
    quote: "this is the version of me i always knew existed.",
    treatment: "morpheus8 + microneedling",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&w=600&h=800",
    after: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&w=600&h=800",
    quote: "subtle changes. profound confidence.",
    treatment: "botox + laser hair removal",
  },
];

export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  return (
    <section className="py-40 bg-dark-midnight-plum relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-15" />

      {/* Background Glow Orbs - Gentle Breathing */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent-rose-gold/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.06, 0.16, 0.06],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-champagne-blush/6 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-accent-rose-gold/60 to-transparent mb-10"
        />
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-light-off-white mb-6 lowercase leading-tight text-shadow-soft">
          real results
        </h2>
        <p className="text-xl text-light-off-white/75 font-light max-w-2xl leading-relaxed mb-4">
          where confidence begins under your skin.
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg text-light-off-white/65 font-light max-w-2xl leading-relaxed italic"
        >
          these are real transformations. real stories. real confidence reclaimed.
        </motion.p>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto relative">
          <div className="relative h-[650px] md:h-[750px] overflow-hidden rounded-sm bg-dark-wine-black border border-light-off-white/10 shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.4 },
                }}
                className="absolute inset-0"
                style={{ perspective: 1000 }}
              >
                <div className="grid grid-cols-2 h-full gap-6 p-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative border-2 border-light-off-white/25 rounded-sm overflow-hidden group"
                  >
                    <Image
                      src={results[currentIndex].before}
                      alt="Before"
                      fill
                      sizes="50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-wine-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 bg-dark-espresso/90 backdrop-blur-md px-5 py-3 rounded-sm border border-light-off-white/20 shadow-glow">
                      <p className="text-light-off-white text-sm font-light uppercase tracking-wider">before</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative border-2 border-accent-rose-gold/30 rounded-sm overflow-hidden group"
                  >
                    <Image
                      src={results[currentIndex].after}
                      alt="After"
                      fill
                      sizes="50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-rose-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 right-6 bg-accent-rose-gold/25 backdrop-blur-md px-5 py-3 rounded-sm border border-accent-rose-gold/40 shadow-glow">
                      <p className="text-light-off-white text-sm font-light uppercase tracking-wider">after</p>
                    </div>
                  </motion.div>
                </div>

                {/* Handwritten Quote in Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-dark-wine-black/95 backdrop-blur-xl px-10 py-8 rounded-sm border border-light-off-white/15 shadow-2xl max-w-md"
                >
                  <motion.p
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(231, 207, 199, 0.3)",
                        "0 0 30px rgba(231, 207, 199, 0.5)",
                        "0 0 20px rgba(231, 207, 199, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-3xl md:text-4xl font-handwritten text-accent-champagne-blush mb-3 text-center leading-relaxed"
                  >
                    &ldquo;{results[currentIndex].quote}&rdquo;
                  </motion.p>
                  <p className="text-light-off-white/70 text-xs font-light uppercase tracking-wider text-center">
                    {results[currentIndex].treatment}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation */}
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "rgba(246, 244, 243, 0.15)" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-light-off-white/10 backdrop-blur-md hover:bg-light-off-white/20 transition-colors p-5 rounded-full border border-light-off-white/25 shadow-glow z-30"
              aria-label="Previous"
            >
              <ChevronLeft className="w-7 h-7 text-light-off-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "rgba(246, 244, 243, 0.15)" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-light-off-white/10 backdrop-blur-md hover:bg-light-off-white/20 transition-colors p-5 rounded-full border border-light-off-white/25 shadow-glow z-30"
              aria-label="Next"
            >
              <ChevronRight className="w-7 h-7 text-light-off-white" />
            </motion.button>

            {/* Enhanced Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              {results.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent-rose-gold w-12 shadow-glow-strong"
                      : "bg-light-off-white/40 hover:bg-light-off-white/60 w-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

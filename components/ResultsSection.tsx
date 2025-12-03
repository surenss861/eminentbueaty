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
    caption: "4 weeks post filler",
    treatment: "dermal fillers + morpheus8",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&w=600&h=800",
    after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&w=600&h=800",
    caption: "morpheus8 + 1 facial",
    treatment: "skin tightening protocol",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&w=600&h=800",
    after: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&w=600&h=800",
    caption: "6 sessions complete",
    treatment: "laser hair removal",
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
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="py-32 bg-blush-deep relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-soft/20 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-serif font-normal text-ink-black mb-4 lowercase">
          real results
        </h2>
        <p className="text-lg text-ink-espresso/70 font-light max-w-2xl">
          subtle changes. dramatic impact.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-sm bg-ink-black shadow-2xl">
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
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-2 h-full">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <Image
                      src={results[currentIndex].before}
                      alt="Before"
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-ink-black/70 backdrop-blur-md px-4 py-2 rounded-sm border border-white/10">
                      <p className="text-white text-sm font-light uppercase tracking-wider">before</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    <Image
                      src={results[currentIndex].after}
                      alt="After"
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gold-soft/90 backdrop-blur-md px-4 py-2 rounded-sm border border-ink-black/10">
                      <p className="text-ink-black text-sm font-light uppercase tracking-wider">after</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-black/95 via-ink-black/80 to-transparent p-8"
                >
                  <p className="text-gold-soft text-sm font-light mb-2 uppercase tracking-wider">
                    {results[currentIndex].caption}
                  </p>
                  <p className="text-white/70 text-xs font-light">
                    {results[currentIndex].treatment}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors p-4 rounded-full border border-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors p-4 rounded-full border border-white/20"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Enhanced Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {results.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-gold-soft w-8"
                      : "bg-white/30 hover:bg-white/50 w-2"
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

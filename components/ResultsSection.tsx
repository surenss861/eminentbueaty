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
    treatment: "2 weeks post filler",
    client: "sarah m.",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&w=600&h=800",
    after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&w=600&h=800",
    quote: "this is the version of me i always knew existed.",
    treatment: "morpheus8 + 1 facial",
    client: "jessica l.",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&w=600&h=800",
    after: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&w=600&h=800",
    quote: "subtle changes. profound confidence.",
    treatment: "laser hair removal - 3 sessions",
    client: "emma k.",
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
    <section className="py-32 bg-base-champagne relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-serif font-normal text-dark-espresso mb-4 lowercase">
          real results
        </h2>
        <p className="text-lg text-dark-espresso/60 font-light max-w-2xl">
          see the transformation
        </p>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-sm bg-white shadow-lg">
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
                <div className="grid grid-cols-2 h-full gap-4 p-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative border-2 border-dark-espresso/10 rounded-sm overflow-hidden"
                  >
                    <Image
                      src={results[currentIndex].before}
                      alt="Before"
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm">
                      <p className="text-dark-espresso text-sm font-light uppercase tracking-wider">before</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative border-2 border-accent-rose-gold/30 rounded-sm overflow-hidden"
                  >
                    <Image
                      src={results[currentIndex].after}
                      alt="After"
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-accent-rose-gold/20 backdrop-blur-sm px-4 py-2 rounded-sm border border-accent-rose-gold/30">
                      <p className="text-dark-espresso text-sm font-light uppercase tracking-wider">after</p>
                    </div>
                  </motion.div>
                </div>

                {/* Testimonial in Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md px-8 py-6 rounded-sm border border-base-champagne-warm/30 shadow-lg"
                >
                  <p className="text-xl md:text-2xl font-handwritten text-accent-rose-gold mb-2 text-center">
                    &ldquo;{results[currentIndex].quote}&rdquo;
                  </p>
                  <p className="text-dark-espresso/60 text-xs font-light uppercase tracking-wider text-center mb-1">
                    {results[currentIndex].treatment}
                  </p>
                  <p className="text-dark-espresso/40 text-xs font-light text-center">
                    — {results[currentIndex].client}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(42, 31, 26, 0.1)" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md hover:bg-white transition-colors p-4 rounded-full border border-dark-espresso/10 shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-dark-espresso" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(42, 31, 26, 0.1)" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md hover:bg-white transition-colors p-4 rounded-full border border-dark-espresso/10 shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-dark-espresso" />
            </motion.button>

            {/* Dots Indicator */}
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
                      ? "bg-accent-rose-gold w-8 shadow-glow-soft"
                      : "bg-dark-espresso/20 hover:bg-dark-espresso/40 w-2"
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

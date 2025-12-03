"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, -50]);

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
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  return (
    <section ref={sectionRef} className="py-40 bg-base-champagne relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-20" />

      {/* Background Glow */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.3]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-rose-gold/10 rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm text-accent-rose-gold uppercase tracking-[0.3em] mb-6 font-light"
          >
            real results
          </motion.p>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-dark-espresso mb-6 lowercase leading-tight">
            see the transformation
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-accent-rose-gold to-transparent mx-auto"
          />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto relative">
          <div className="relative h-[650px] md:h-[750px] overflow-hidden rounded-sm bg-white shadow-2xl">
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
                  rotateY: { duration: 0.3 },
                }}
                className="absolute inset-0"
                style={{ perspective: 1000 }}
              >
                <div className="grid grid-cols-2 h-full gap-6 p-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative border-2 border-dark-espresso/10 rounded-sm overflow-hidden group"
                  >
                    <Image
                      src={results[currentIndex].before}
                      alt="Before"
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-espresso/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-sm shadow-lg">
                      <p className="text-dark-espresso text-sm font-light uppercase tracking-wider">before</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative border-2 border-accent-rose-gold/30 rounded-sm overflow-hidden group"
                  >
                    <Image
                      src={results[currentIndex].after}
                      alt="After"
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-rose-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 right-6 bg-accent-rose-gold/20 backdrop-blur-sm px-5 py-3 rounded-sm border border-accent-rose-gold/30 shadow-lg">
                      <p className="text-dark-espresso text-sm font-light uppercase tracking-wider">after</p>
                    </div>
                  </motion.div>
                </div>

                {/* Testimonial in Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/98 backdrop-blur-md px-10 py-8 rounded-sm border border-accent-rose-gold/20 shadow-2xl max-w-md"
                >
                  <p className="text-2xl md:text-3xl font-handwritten text-accent-rose-gold mb-3 text-center leading-relaxed">
                    &ldquo;{results[currentIndex].quote}&rdquo;
                  </p>
                  <p className="text-dark-espresso/60 text-xs font-light uppercase tracking-wider text-center mb-2">
                    {results[currentIndex].treatment}
                  </p>
                  <p className="text-dark-espresso/40 text-xs font-light text-center">
                    — {results[currentIndex].client}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation */}
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "rgba(42, 31, 26, 0.15)" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-white transition-colors p-5 rounded-full border-2 border-dark-espresso/10 shadow-xl z-30"
              aria-label="Previous"
            >
              <ChevronLeft className="w-7 h-7 text-dark-espresso" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "rgba(42, 31, 26, 0.15)" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-white transition-colors p-5 rounded-full border-2 border-dark-espresso/10 shadow-xl z-30"
              aria-label="Next"
            >
              <ChevronRight className="w-7 h-7 text-dark-espresso" />
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
                      ? "bg-accent-rose-gold w-12 shadow-glow-soft"
                      : "bg-dark-espresso/20 hover:bg-dark-espresso/40 w-3"
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

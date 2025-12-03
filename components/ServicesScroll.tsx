"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const services = [
  {
    name: "botox",
    tagline: "soften. sculpt. glow.",
    emotion: "feel like yourself again—the version you remember.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    slug: "botox",
  },
  {
    name: "microneedling",
    tagline: "repair from within.",
    emotion: "your skin, renewed. your confidence, restored.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    slug: "microneedling",
  },
  {
    name: "morpheus8",
    tagline: "lift. tighten. transform.",
    emotion: "see the reflection you've been waiting for.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
    slug: "morpheus8",
  },
  {
    name: "dermal fillers",
    tagline: "restore. refine. reveal.",
    emotion: "subtle changes. profound confidence.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    slug: "dermal-fillers",
  },
  {
    name: "laser hair removal",
    tagline: "permanent smooth. effortless.",
    emotion: "freedom from the daily ritual. confidence in every moment.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    slug: "laser-hair-removal",
  },
];

export default function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section ref={containerRef} className="py-40 bg-dark-wine-black relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-15" />

      {/* Background Glow Orbs - Breathing */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-rose-gold/8 rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.2 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-accent-rose-gold/60 to-transparent mb-10"
          />
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-light-off-white mb-6 lowercase leading-tight text-shadow-soft">
            offerings
          </h2>
          <p className="text-xl text-light-off-white/75 font-light max-w-2xl leading-relaxed mb-4">
            subtle shifts. powerful results.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg text-light-off-white/60 font-light max-w-2xl leading-relaxed italic"
          >
            each treatment is a step closer to the you you&apos;ve always known you could be.
          </motion.p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scrollbar-hide">
          <div className="flex gap-8 md:gap-10" style={{ width: "max-content" }}>
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: 120, scale: 0.85 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.03, y: -12 }}
                className="flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[480px] group cursor-pointer"
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="relative h-[550px] md:h-[650px] overflow-hidden rounded-sm bg-dark-midnight-plum border border-light-off-white/15 backdrop-blur-sm shadow-2xl group-hover:shadow-glow-strong transition-all duration-700">
                    {/* Dark Glassy Background */}
                    <div className="absolute inset-0 bg-dark-espresso/70 backdrop-blur-md" />
                    
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="relative h-full"
                    >
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 640px) 85vw, 480px"
                        className="object-cover opacity-35 group-hover:opacity-45 transition-opacity duration-700"
                      />
                    </motion.div>
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-wine-black via-dark-wine-black/60 to-transparent" />
                    
                    {/* Inner Glow on Hover */}
                    <motion.div
                      className="absolute inset-0 shadow-inner-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      initial={false}
                    />
                    
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-rose-gold/10 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                      <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                        className="text-5xl md:text-6xl font-serif font-normal text-light-off-white mb-3 lowercase text-shadow-soft"
                      >
                        {service.name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.5 }}
                        className="text-accent-champagne-blush font-light text-base mb-4 tracking-wide"
                      >
                        {service.tagline}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.6 }}
                        className="text-light-off-white/70 font-light text-sm mb-8 leading-relaxed italic"
                      >
                        {service.emotion}
                      </motion.p>
                      <MagneticButton>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.7 }}
                          className="inline-flex items-center space-x-3 text-light-off-white/95 hover:text-accent-rose-gold transition-colors text-sm font-light uppercase tracking-wider group-hover:gap-4 transition-all"
                        >
                          <span>see results</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </motion.div>
                      </MagneticButton>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

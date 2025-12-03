"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

const services = [
  {
    name: "botox",
    tagline: "soften. sculpt. glow.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    slug: "botox",
  },
  {
    name: "microneedling",
    tagline: "repair from within.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    slug: "microneedling",
  },
  {
    name: "morpheus8",
    tagline: "lift. tighten. transform.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
    slug: "morpheus8",
  },
  {
    name: "dermal fillers",
    tagline: "restore. refine. reveal.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    slug: "dermal-fillers",
  },
  {
    name: "laser hair removal",
    tagline: "permanent smooth. effortless.",
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
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 bg-dark-wine-black relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-10" />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-normal text-light-off-white mb-4 lowercase">
            offerings
          </h2>
          <p className="text-lg text-light-off-white/60 font-light max-w-2xl">
            subtle shifts. powerful results.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scrollbar-hide">
          <div className="flex gap-6 md:gap-8" style={{ width: "max-content" }}>
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] group cursor-pointer"
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm bg-dark-midnight-plum border border-light-off-white/10 backdrop-blur-sm">
                    {/* Dark Glassy Background */}
                    <div className="absolute inset-0 bg-dark-espresso/60 backdrop-blur-sm" />
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="relative h-full"
                    >
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 640px) 85vw, 450px"
                        className="object-cover opacity-40"
                      />
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-wine-black via-dark-wine-black/50 to-transparent" />
                    
                    {/* Inner Glow */}
                    <div className="absolute inset-0 shadow-inner-glow" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-4xl md:text-5xl font-serif font-normal text-light-off-white mb-2 lowercase"
                      >
                        {service.name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="text-accent-champagne-blush font-light text-sm mb-6 tracking-wide"
                      >
                        {service.tagline}
                      </motion.p>
                      <MagneticButton>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                          className="inline-flex items-center space-x-2 text-light-off-white/90 hover:text-accent-rose-gold transition-colors text-sm font-light uppercase tracking-wider group-hover:translate-x-2 transition-transform"
                        >
                          <span>see results</span>
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

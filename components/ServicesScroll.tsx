"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

const services = [
  {
    name: "botox",
    tagline: "soften lines, sculpt expression",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    slug: "botox",
    benefits: "smooth wrinkles, natural results",
  },
  {
    name: "morpheus8",
    tagline: "lift & tighten, no downtime",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    slug: "morpheus8",
    benefits: "radiofrequency microneedling, collagen boost",
  },
  {
    name: "dermal fillers",
    tagline: "restore volume, enhance contours",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    slug: "dermal-fillers",
    benefits: "natural-looking enhancement, instant results",
  },
  {
    name: "laser hair removal",
    tagline: "permanent smooth, effortless",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    slug: "laser-hair-removal",
    benefits: "long-lasting results, precision targeting",
  },
];

export default function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-40 bg-white relative overflow-hidden">
      {/* Subtle Grain */}
      <div className="absolute inset-0 bg-grain opacity-10" />

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm text-accent-rose-gold uppercase tracking-[0.3em] mb-6 font-light"
          >
            signature services
          </motion.p>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-dark-espresso mb-6 lowercase leading-tight">
            precision meets artistry
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-accent-rose-gold to-transparent mx-auto"
          />
        </motion.div>

        {/* Alternating Image/Text Cards */}
        <div className="space-y-32 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image with Enhanced Effects */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative h-[600px] md:h-[700px] overflow-hidden rounded-sm group ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-espresso/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-accent-rose-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Decorative Border */}
                  <div className="absolute inset-0 border-2 border-accent-rose-gold/20 rounded-sm pointer-events-none" />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                  className={`space-y-8 ${isEven ? "md:order-2" : "md:order-1"}`}
                >
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="text-5xl md:text-6xl font-serif font-normal text-dark-espresso mb-4 lowercase leading-tight"
                    >
                      {service.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="text-accent-rose-gold font-light text-xl mb-6 tracking-wide"
                    >
                      {service.tagline}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="text-dark-espresso/60 font-light leading-relaxed text-lg"
                    >
                      {service.benefits}
                    </motion.p>
                  </div>
                  <MagneticButton>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-3 text-dark-espresso hover:text-accent-rose-gold transition-colors font-light uppercase tracking-wider text-sm group"
                    >
                      <span>learn more</span>
                      <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-block text-xl"
                      >
                        →
                      </motion.span>
                    </Link>
                  </MagneticButton>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

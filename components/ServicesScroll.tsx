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

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Grain */}
      <div className="absolute inset-0 bg-grain opacity-10" />

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-normal text-dark-espresso mb-4 lowercase">
            signature services
          </h2>
          <p className="text-lg text-dark-espresso/60 font-light max-w-2xl">
            precision meets artistry in every session
          </p>
        </motion.div>

        {/* Alternating Image/Text Cards */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className={`relative h-[500px] md:h-[600px] overflow-hidden rounded-sm ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-espresso/20 to-transparent" />
                </motion.div>

                {/* Text Content */}
                <div className={`space-y-6 ${isEven ? "md:order-2" : "md:order-1"}`}>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-serif font-normal text-dark-espresso mb-3 lowercase">
                      {service.name}
                    </h3>
                    <p className="text-accent-rose-gold font-light text-lg mb-4 tracking-wide">
                      {service.tagline}
                    </p>
                    <p className="text-dark-espresso/60 font-light leading-relaxed">
                      {service.benefits}
                    </p>
                  </div>
                  <MagneticButton>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-2 text-dark-espresso hover:text-accent-rose-gold transition-colors font-light uppercase tracking-wider text-sm group"
                    >
                      <span>learn more</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-block"
                      >
                        →
                      </motion.span>
                    </Link>
                  </MagneticButton>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

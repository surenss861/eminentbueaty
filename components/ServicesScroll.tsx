"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "botox",
    tagline: "smooth lines, sculpt expression",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    slug: "botox",
  },
  {
    name: "morpheus8",
    tagline: "lift & tighten, no downtime",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    slug: "morpheus8",
  },
  {
    name: "hydrafacial",
    tagline: "deep cleanse, instant glow",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
    slug: "hydrafacial",
  },
  {
    name: "fat freezing",
    tagline: "sculpt contours, no surgery",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    slug: "fat-freezing",
  },
  {
    name: "laser hair removal",
    tagline: "permanent smooth, precise",
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

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-normal text-ink-black mb-4 lowercase">
            signature treatments
          </h2>
          <p className="text-lg text-ink-espresso/70 font-light max-w-2xl">
            precision meets artistry in every session
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 md:gap-8" style={{ width: "max-content" }}>
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] group"
              >
                <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm bg-blush-deep">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 85vw, 450px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-ink-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-4xl md:text-5xl font-serif font-normal text-white mb-2 lowercase">
                      {service.name}
                    </h3>
                    <p className="text-gold-soft font-light text-sm mb-6 tracking-wide">
                      {service.tagline}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm font-light uppercase tracking-wider"
                    >
                      <span>explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}


"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
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
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-soft/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blush-deep/10 rounded-full blur-3xl" />

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
          <h2 className="text-5xl md:text-6xl font-serif font-normal text-ink-black mb-4 lowercase">
            signature treatments
          </h2>
          <p className="text-lg text-ink-espresso/70 font-light max-w-2xl">
            precision meets artistry in every session
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
                  <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm bg-blush-deep">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 640px) 85vw, 450px"
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-black/90 via-ink-black/40 to-transparent" />
                    
                    {/* Shimmer Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-4xl md:text-5xl font-serif font-normal text-white mb-2 lowercase"
                      >
                        {service.name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="text-gold-soft font-light text-sm mb-6 tracking-wide"
                      >
                        {service.tagline}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm font-light uppercase tracking-wider group-hover:translate-x-2 transition-transform"
                      >
                        <span>explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
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

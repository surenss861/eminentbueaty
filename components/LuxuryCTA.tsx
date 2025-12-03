"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function LuxuryCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-base-rosewood text-light-off-white">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-10" />

      {/* Subtle Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-accent-rose-gold/10 rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-8 lowercase leading-tight"
          >
            your ritual starts here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-light-off-white/70 mb-12 font-light max-w-xl mx-auto"
          >
            beauty is a ritual. book your free consultation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <MagneticButton>
              <Link
                href="/contact#book"
                className="group bg-accent-rose-gold/20 backdrop-blur-sm border border-accent-rose-gold/30 text-light-off-white px-10 py-4 rounded-sm font-light hover:bg-accent-rose-gold/30 transition-all flex items-center space-x-2 tracking-wide text-sm uppercase relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-accent-rose-gold/20"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                />
                <span className="relative z-10">book consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://wa.me/16477006240"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-light-off-white/20 text-light-off-white px-10 py-4 rounded-sm font-light hover:bg-light-off-white/5 transition-all flex items-center space-x-2 tracking-wide text-sm uppercase backdrop-blur-sm relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-light-off-white/5"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                />
                <MessageCircle className="w-4 h-4 relative z-10" />
                <span className="relative z-10">whatsapp</span>
              </a>
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-light-off-white/50 text-sm font-light"
          >
            or call{" "}
            <a href="tel:6477006240" className="text-accent-rose-gold hover:text-accent-rose-gold/80 transition-colors">
              (647) 700-6240
            </a>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

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

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);

  return (
    <section ref={sectionRef} className="relative py-40 overflow-hidden bg-base-rosewood text-light-off-white">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-10" />

      {/* Multiple Glow Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5 + i * 0.3, 1],
            opacity: [0.1, 0.25 + i * 0.05, 0.1],
            x: [0, 100 - i * 30, 0],
            y: [0, 50 - i * 20, 0],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
          className={`absolute w-96 h-96 bg-accent-rose-gold/10 rounded-full blur-3xl ${
            i === 0 ? "top-20 right-20" : i === 1 ? "bottom-20 left-20" : "top-1/2 left-1/2"
          }`}
        />
      ))}

      {/* Shimmer Effect */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-rose-gold/5 to-transparent bg-[length:200%_200%] z-0"
      />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-sm text-accent-rose-gold uppercase tracking-[0.3em] mb-8 font-light"
            >
              begin your transformation
            </motion.p>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal mb-8 lowercase leading-tight">
              your ritual starts here
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-accent-rose-gold to-transparent mx-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-light-off-white/70 mb-16 font-light max-w-2xl mx-auto leading-relaxed"
          >
            beauty is a ritual. book your free consultation and discover the transformation that awaits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <MagneticButton>
              <Link
                href="/contact#book"
                className="group relative bg-accent-rose-gold/20 backdrop-blur-sm border-2 border-accent-rose-gold/40 text-light-off-white px-12 py-5 rounded-sm font-light hover:bg-accent-rose-gold/30 transition-all flex items-center space-x-3 tracking-wide text-sm uppercase overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-rose-gold/30 via-accent-rose-gold/20 to-accent-rose-gold/30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <motion.span
                  className="relative z-10"
                  whileHover={{ letterSpacing: "0.15em" }}
                  transition={{ duration: 0.3 }}
                >
                  book consultation
                </motion.span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://wa.me/16477006240"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border-2 border-light-off-white/30 text-light-off-white px-12 py-5 rounded-sm font-light hover:bg-light-off-white/10 transition-all flex items-center space-x-3 tracking-wide text-sm uppercase backdrop-blur-sm overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-light-off-white/10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                />
                <MessageCircle className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                <motion.span
                  className="relative z-10"
                  whileHover={{ letterSpacing: "0.15em" }}
                  transition={{ duration: 0.3 }}
                >
                  whatsapp
                </motion.span>
              </a>
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-light-off-white/50 text-sm font-light"
          >
            or call{" "}
            <a 
              href="tel:6477006240" 
              className="text-accent-rose-gold hover:text-accent-rose-gold/80 transition-colors font-medium"
            >
              (647) 700-6240
            </a>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

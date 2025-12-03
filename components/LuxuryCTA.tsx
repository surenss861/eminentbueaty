"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function LuxuryCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-ink-black text-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gold-soft/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gold-champagne/10 rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm text-gold-soft/80 mb-6 font-light uppercase tracking-[0.2em]"
          >
            begin your transformation
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-8 lowercase leading-tight"
          >
            every transformation
            <br />
            begins with a conversation.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact#book"
                className="group bg-gold-soft text-ink-black px-10 py-4 rounded-sm font-light hover:bg-gold-champagne transition-all flex items-center space-x-2 tracking-wide text-sm uppercase relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">book your free consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/16477006240"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold-soft/30 text-gold-soft px-10 py-4 rounded-sm font-light hover:bg-gold-soft/10 transition-all flex items-center space-x-2 tracking-wide text-sm uppercase relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gold-soft/10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
                <MessageCircle className="w-4 h-4 relative z-10" />
                <span className="relative z-10">whatsapp</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/60 text-sm font-light"
          >
            or call us at{" "}
            <a href="tel:6477006240" className="text-gold-soft hover:text-gold-champagne transition-colors">
              (647) 700-6240
            </a>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

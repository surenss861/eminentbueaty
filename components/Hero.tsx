"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blush-base">
      {/* Background Image with Motion Blur Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury spa treatment room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blush-base/95 via-blush-deep/90 to-blush-base/95 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-shimmer opacity-20" />
      </div>

      {/* Floating Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-glow z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Soft Phrase */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm md:text-base text-ink-espresso/70 mb-6 font-light tracking-[0.2em] uppercase"
            >
              refine. restore. reveal.
            </motion.p>

            {/* Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-ink-black mb-6 leading-[0.95] tracking-tight"
            >
              beauty begins
              <br />
              <span className="text-gold-soft">with precision</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-ink-espresso/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              where confidence begins under the skin.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/services"
                className="group bg-ink-black text-white px-10 py-4 rounded-sm font-light hover:bg-ink-espresso transition-all flex items-center space-x-2 tracking-wide text-sm uppercase"
              >
                <span>view treatments</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact#book"
                className="border border-ink-black/30 text-ink-black px-10 py-4 rounded-sm font-light hover:bg-ink-black hover:text-white transition-all tracking-wide text-sm uppercase bg-white/50 backdrop-blur-sm"
              >
                book consult
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

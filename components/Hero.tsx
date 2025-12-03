"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Elegant Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury spa treatment room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Elegant Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold px-6 py-2.5 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">
                Toronto&apos;s Premier Aesthetic Spa
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-luxury-charcoal mb-6 leading-tight"
            >
              Unwind in Luxury
              <br />
              <span className="text-luxury-gold">Advanced Aesthetics</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto font-light"
            >
              In the Heart of Toronto
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Experience world-class facial treatments, fat freezing, laser hair
              removal, and more. Your journey to radiant beauty begins here.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                href="/contact#book"
                className="group bg-luxury-gold text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-luxury-gold/90 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-white text-luxury-charcoal px-10 py-4 rounded-lg font-semibold text-lg border-2 border-luxury-charcoal hover:bg-luxury-charcoal hover:text-white transition-all"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center space-x-12 text-gray-700 border-t border-gray-200 pt-12"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-1">5+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-1">100+</div>
                <div className="text-sm font-medium">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-1">5.0</div>
                <div className="text-sm font-medium">Client Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

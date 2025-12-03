"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-ivory">
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
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-ivory/95 via-luxury-ivory/90 to-luxury-ivory/95" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Aspirational Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-elegant font-light text-luxury-navy mb-6 leading-[1.1] tracking-tight"
            >
              Glow Is the New Power
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-luxury-charcoal mb-4 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Expert injectables, laser treatments and skin rejuvenation in Toronto
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-luxury-charcoal/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Elevate your natural beauty with personalized aesthetic treatments
              crafted by certified professionals. Your journey to radiant confidence
              begins here.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                href="/contact#book"
                className="group bg-luxury-navy text-white px-10 py-4 rounded-sm font-semibold text-lg hover:bg-luxury-charcoal transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 tracking-wide"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-white text-luxury-navy px-10 py-4 rounded-sm font-semibold text-lg border-2 border-luxury-navy hover:bg-luxury-navy hover:text-white transition-all tracking-wide"
              >
                Explore Treatments
              </Link>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center space-x-12 text-luxury-charcoal border-t border-luxury-blush/30 pt-12"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-light text-luxury-navy mb-1">5+</div>
                <div className="text-sm font-medium text-luxury-charcoal/70">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-luxury-blush/50" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-light text-luxury-navy mb-1">100+</div>
                <div className="text-sm font-medium text-luxury-charcoal/70">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-luxury-blush/50" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-light text-luxury-navy mb-1">5.0</div>
                <div className="text-sm font-medium text-luxury-charcoal/70">Average Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

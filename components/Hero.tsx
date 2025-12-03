"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-light">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury spa treatment room"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-brand-primary mb-6 leading-tight">
              Elevate Your Natural Beauty
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary/80 mb-4 font-light max-w-2xl mx-auto">
              Expert injectables, laser treatments & skin rejuvenation in Toronto
            </p>
            <p className="text-lg text-brand-primary/70 mb-10 max-w-xl mx-auto font-light">
              Licensed medical professionals • Customized plans • Proven results
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#book"
                className="bg-brand-primary text-white px-8 py-4 rounded-sm font-medium hover:bg-brand-dark transition-colors flex items-center space-x-2 shadow-sm"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-sm font-medium hover:bg-brand-primary hover:text-white transition-colors"
              >
                Explore Treatments
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

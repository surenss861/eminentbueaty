"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury spa"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-navy/90 via-luxury-charcoal/85 to-luxury-navy/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-32 h-32 opacity-10"
        >
          <Sparkles className="w-full h-full text-luxury-gold" />
        </motion.div>
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-40 h-40 opacity-10"
        >
          <Sparkles className="w-full h-full text-luxury-gold" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-12 md:p-16 border border-white/20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-10 h-10 text-luxury-gold" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            Ready to Begin Your Beauty Journey?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your free consultation today and discover how we can help you
            achieve your aesthetic goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <MagneticButton href="/contact#book">
              <div className="group bg-gradient-to-r from-luxury-gold to-yellow-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-luxury-gold/50 transition-all flex items-center space-x-3">
                <span>Book Your Free Consultation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </MagneticButton>
            <MagneticButton href="tel:6477006240">
              <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm text-luxury-charcoal px-10 py-5 rounded-full font-semibold text-lg border-2 border-luxury-charcoal/20 hover:bg-white transition-all shadow-lg">
                <Phone className="w-5 h-5" />
                <span>Call (647) 700-6240</span>
              </div>
            </MagneticButton>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-lg text-gray-600 mb-6 font-medium">
              New clients: Join our VIP list for 10% off your first treatment
            </p>
            <MagneticButton href="/contact#signup">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-luxury-gold/10 to-luxury-cream/50 text-luxury-gold px-8 py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-luxury-gold/20 hover:to-luxury-cream/70 transition-all border border-luxury-gold/30">
                <Mail className="w-5 h-5" />
                <span>Sign Up for Exclusive Offers</span>
              </div>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


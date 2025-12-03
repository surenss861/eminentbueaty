"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-luxury-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-sm p-12 border border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-elegant font-light text-white mb-6">
            Ready to Begin Your Beauty Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Book your free consultation today and discover how we can help you
            achieve your aesthetic goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact#book"
              className="bg-white text-luxury-navy px-10 py-4 rounded-sm font-semibold text-lg hover:bg-luxury-ivory transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 tracking-wide"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:6477006240"
              className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors font-light border border-white/20 px-10 py-4 rounded-sm"
            >
              <Phone className="w-5 h-5" />
              <span>Call (647) 700-6240</span>
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/70 mb-4 font-light">
              New clients: Join our VIP list for 10% off your first treatment
            </p>
            <Link
              href="/contact#signup"
              className="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors font-light"
            >
              <Mail className="w-4 h-4" />
              <span>Sign Up for Exclusive Offers</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

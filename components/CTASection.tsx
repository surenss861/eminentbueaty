"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-brand-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 font-light leading-relaxed">
            Book your free consultation today and discover how we can help you
            achieve your aesthetic goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#book"
              className="bg-white text-brand-primary px-8 py-4 rounded-sm font-medium hover:bg-brand-light transition-colors flex items-center space-x-2 shadow-sm"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:6477006240"
              className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors font-light border border-white/20 px-8 py-4 rounded-sm"
            >
              <Phone className="w-5 h-5" />
              <span>(647) 700-6240</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

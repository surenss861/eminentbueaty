"use client";

import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="py-32 bg-blush-base relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image - Blank/Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] md:h-[700px]"
            >
              <div className="absolute inset-0 bg-blush-deep rounded-sm" />
              
              {/* Handwritten Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <p className="text-4xl md:text-5xl font-handwritten text-gold-soft mb-2">
                  aklima
                </p>
                <p className="text-sm text-ink-espresso/80 font-light uppercase tracking-wider">
                  the artist. the expert.
                </p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <p className="text-sm text-ink-espresso/70 mb-4 font-light uppercase tracking-[0.2em]">
                  founder & clinician
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-normal text-ink-black mb-6 lowercase leading-tight">
                  where precision
                  <br />
                  meets artistry
                </h2>
              </div>

              <div className="space-y-6 text-ink-espresso/80 font-light leading-relaxed">
                <p>
                  With over 5 years of expertise, Aklima brings a unique blend of technical
                  mastery and artistic vision to every treatment. Her approach is rooted in
                  understanding each client&apos;s unique features and goals.
                </p>
                <p>
                  Every session is a collaboration—a conversation between science and
                  aesthetics, where subtle refinements create transformative results.
                </p>
              </div>

              <div className="pt-8 border-t border-ink-black/10">
                <p className="text-2xl md:text-3xl font-handwritten text-gold-soft mb-4">
                  &ldquo;subtle changes.
                  <br />
                  dramatic impact.&rdquo;
                </p>
                <p className="text-sm text-ink-espresso/60 font-light uppercase tracking-wider">
                  — aklima, canadian certified aesthetician
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


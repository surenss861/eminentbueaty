"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-32 bg-blush-base relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-soft/20 rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image - Blank/Placeholder with Enhanced Effects */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[600px] md:h-[700px] group"
            >
              <div className="absolute inset-0 bg-blush-deep rounded-sm overflow-hidden">
                {/* Animated Gradient Overlay */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-gold-soft/10 via-transparent to-gold-champagne/10"
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />
              </div>
              
              {/* Handwritten Overlay with Enhanced Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-8 left-8 right-8"
              >
                <motion.p
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(232, 216, 190, 0)",
                      "0 0 20px rgba(232, 216, 190, 0.3)",
                      "0 0 0px rgba(232, 216, 190, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-4xl md:text-5xl font-handwritten text-gold-soft mb-2"
                >
                  aklima
                </motion.p>
                <p className="text-sm text-ink-espresso/80 font-light uppercase tracking-wider">
                  the artist. the expert.
                </p>
              </motion.div>
            </motion.div>

            {/* Content with Enhanced Animations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-ink-espresso/70 mb-4 font-light uppercase tracking-[0.2em]"
                >
                  founder & clinician
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl font-serif font-normal text-ink-black mb-6 lowercase leading-tight"
                >
                  where precision
                  <br />
                  meets artistry
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-6 text-ink-espresso/80 font-light leading-relaxed"
              >
                <p>
                  With over 5 years of expertise, Aklima brings a unique blend of technical
                  mastery and artistic vision to every treatment. Her approach is rooted in
                  understanding each client&apos;s unique features and goals.
                </p>
                <p>
                  Every session is a collaboration—a conversation between science and
                  aesthetics, where subtle refinements create transformative results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="pt-8 border-t border-ink-black/10"
              >
                <motion.p
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(232, 216, 190, 0)",
                      "0 0 15px rgba(232, 216, 190, 0.2)",
                      "0 0 0px rgba(232, 216, 190, 0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-2xl md:text-3xl font-handwritten text-gold-soft mb-4"
                >
                  &ldquo;subtle changes.
                  <br />
                  dramatic impact.&rdquo;
                </motion.p>
                <p className="text-sm text-ink-espresso/60 font-light uppercase tracking-wider">
                  — aklima, canadian certified aesthetician
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      {/* Full Bleed Photo */}
      <div className="relative h-screen md:h-[90vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&w=2000&h=1200"
            alt="Aklima - Founder & Expert Aesthetician"
            fill
            sizes="100vw"
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base-champagne via-base-champagne-warm/80 to-white" />
          <div className="absolute inset-0 bg-grain opacity-20" />
        </div>

        {/* Content Overlay */}
        <motion.div
          style={{ opacity, y }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-handwritten text-accent-rose-gold mb-8"
            >
              &ldquo;beauty isn&apos;t vanity.
              <br />
              it&apos;s power reclaimed.&rdquo;
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4 text-dark-espresso/70 font-light leading-relaxed max-w-2xl mx-auto"
            >
              <p>
                with over 5 years of expertise, aklima brings a unique blend of technical
                mastery and artistic vision to every treatment.
              </p>
              <p>
                every session is a collaboration—a conversation between science and
                aesthetics, where subtle refinements create transformative results.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 text-sm text-dark-espresso/50 font-light uppercase tracking-wider"
            >
              — aklima, canadian certified aesthetician
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

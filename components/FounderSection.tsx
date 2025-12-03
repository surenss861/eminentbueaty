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
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.35, 0.45, 0.45, 0.35]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-dark-wine-black">
      {/* Full Bleed Photo with Parallax */}
      <div className="relative h-screen md:h-[95vh]">
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&w=2000&h=1200"
            alt="Aklima - Founder & Expert Aesthetician"
            fill
            sizes="100vw"
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-wine-black via-dark-wine-black/85 to-dark-wine-black" />
          <div className="absolute inset-0 bg-grain opacity-25" />
        </motion.div>

        {/* Subtle Glow Overlay */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-radial from-accent-rose-gold/10 via-transparent to-transparent"
        />

        {/* Quote Overlay */}
        <motion.div
          style={{ opacity, y }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-handwritten text-accent-champagne-blush mb-10 leading-tight"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 30px rgba(231, 207, 199, 0.4)",
                    "0 0 50px rgba(231, 207, 199, 0.6)",
                    "0 0 30px rgba(231, 207, 199, 0.4)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                &ldquo;beauty isn&apos;t vanity.
                <br />
                it&apos;s power reclaimed.&rdquo;
              </motion.span>
            </motion.p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-accent-rose-gold/60 to-transparent mx-auto mb-10"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="space-y-6 text-light-off-white/85 font-light leading-relaxed max-w-3xl mx-auto text-lg"
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
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 text-sm text-light-off-white/70 font-light uppercase tracking-wider"
            >
              — aklima, canadian certified aesthetician
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

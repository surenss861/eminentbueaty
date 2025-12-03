"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-champagne">
      {/* Multi-layer Background */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury spa treatment room"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base-champagne via-base-champagne-warm/95 to-base-rosewood/30" />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </motion.div>

      {/* Animated Glow Orbs - Multiple Layers */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.1 + i * 0.05, 0.2 + i * 0.05, 0.1 + i * 0.05],
            scale: [1, 1.3 + i * 0.2, 1],
            x: [0, 50 - i * 20, 0],
            y: [0, 30 - i * 15, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          className={`absolute w-64 h-64 md:w-96 md:h-96 bg-accent-rose-gold/10 rounded-full blur-3xl ${
            i === 0 ? "top-1/4 right-1/4" : i === 1 ? "bottom-1/4 left-1/4" : "top-1/2 left-1/2"
          }`}
        />
      ))}

      {/* Shimmer Effect */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-rose-gold/5 to-transparent bg-[length:200%_200%] z-0"
      />

      <motion.div
        style={{ opacity, y: textY }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              x: useTransform(springX, (x) => x * 0.3),
              y: useTransform(springY, (y) => y * 0.3),
            }}
          >
            {/* Decorative Line Above */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-accent-rose-gold/50 to-transparent mx-auto mb-12"
            />

            {/* Headline with Split Animation */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-7xl md:text-8xl lg:text-9xl font-serif font-normal text-dark-espresso mb-6 leading-[0.9] tracking-tight lowercase"
            >
              <motion.span
                initial={{ opacity: 0, y: 50, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.6, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="block mb-2"
              >
                beauty begins
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.9, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="block text-accent-rose-gold relative"
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="bg-gradient-to-r from-accent-rose-gold via-accent-mauve to-accent-rose-gold bg-[length:200%_auto] bg-clip-text text-transparent"
                >
                  under your skin
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Subheadline with Fade */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl text-dark-espresso/70 mb-16 max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
            >
              confidence is your best accessory
            </motion.p>

            {/* CTA Buttons with Enhanced Effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <MagneticButton>
                <Link
                  href="/contact#book"
                  className="group relative bg-dark-espresso text-light-off-white px-12 py-5 rounded-sm font-light hover:bg-dark-espresso/90 transition-all flex items-center space-x-3 tracking-wide text-sm uppercase overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-rose-gold/30 via-accent-rose-gold/20 to-accent-rose-gold/30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="relative z-10"
                    whileHover={{ letterSpacing: "0.15em" }}
                    transition={{ duration: 0.3 }}
                  >
                    book consultation
                  </motion.span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/services"
                  className="group relative border-2 border-dark-espresso/40 text-dark-espresso px-12 py-5 rounded-sm font-light hover:bg-dark-espresso hover:text-light-off-white transition-all tracking-wide text-sm uppercase backdrop-blur-sm overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-dark-espresso"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                  <motion.span
                    className="relative z-10"
                    whileHover={{ letterSpacing: "0.15em" }}
                    transition={{ duration: 0.3 }}
                  >
                    explore services
                  </motion.span>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Decorative Line Below */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-accent-rose-gold/50 to-transparent mx-auto mt-16"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-dark-espresso/30 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-dark-espresso/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

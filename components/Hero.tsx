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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-espresso">
      {/* Multi-layer Background with Parallax */}
      <motion.div
        style={{ 
          y: backgroundY, 
          scale: backgroundScale,
          x: useTransform(springX, (x) => x * 0.1),
        }}
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
        <div className="absolute inset-0 bg-gradient-to-b from-dark-espresso via-dark-wine-black/95 to-dark-midnight-plum" />
        <div className="absolute inset-0 bg-grain opacity-25" />
      </motion.div>

      {/* Multiple Animated Glow Orbs - Breathing Effect */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.08 + i * 0.03, 0.2 + i * 0.05, 0.08 + i * 0.03],
            scale: [1, 1.5 + i * 0.25, 1],
            x: [0, (i % 2 === 0 ? 1 : -1) * (50 - i * 12)],
            y: [0, (i < 2 ? 1 : -1) * (35 - i * 8)],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          className={`absolute w-48 h-48 md:w-64 md:h-64 bg-accent-rose-gold/12 rounded-full blur-3xl ${
            i === 0 ? "top-1/4 right-1/4" : 
            i === 1 ? "bottom-1/4 left-1/4" : 
            i === 2 ? "top-1/2 left-1/2" :
            "bottom-1/3 right-1/3"
          }`}
        />
      ))}

      {/* Inner Glow Effect - Gentle Pulse */}
      <motion.div
        animate={{
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-radial from-accent-rose-gold/12 via-transparent to-transparent"
      />

      {/* Shimmer Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-rose-gold/4 to-transparent bg-[length:200%_200%] z-0"
      />

      <motion.div
        style={{ 
          opacity, 
          x: useTransform(springX, (x) => x * 0.2),
          y: useTransform(
            [springY, textY],
            ([mouseY, scrollY]: number[]) => mouseY * 0.2 + scrollY
          ),
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative Line Above - Gentle Fade In */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-accent-rose-gold/60 to-transparent mx-auto mb-16"
            />

            {/* Headline with Emotional Animation */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.5 }}
              className="text-7xl md:text-8xl lg:text-9xl font-serif font-normal text-light-off-white mb-12 leading-[0.9] tracking-tight text-shadow-soft"
            >
              <motion.span
                initial={{ opacity: 0, y: 60, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.8, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="block mb-4"
              >
                beauty is power.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 1.1, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="block text-accent-rose-gold relative"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 25px rgba(209, 161, 155, 0.4)",
                      "0 0 50px rgba(209, 161, 155, 0.7)",
                      "0 0 25px rgba(209, 161, 155, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  silence is strength.
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Emotional Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl text-light-off-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
            >
              you already have it. we just bring it forward.
            </motion.p>
            
            {/* Additional Emotional Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-light-off-white/70 mb-20 max-w-2xl mx-auto font-light leading-relaxed italic"
            >
              remember how you felt when you looked in the mirror and saw yourself—truly saw yourself.
            </motion.p>

            {/* CTA Buttons with Enhanced Effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <MagneticButton>
                <Link
                  href="/contact#book"
                  className="group relative bg-accent-rose-gold/20 backdrop-blur-md border border-accent-rose-gold/40 text-light-off-white px-12 py-5 rounded-sm font-light hover:bg-accent-rose-gold/30 transition-all flex items-center space-x-3 tracking-wide text-sm uppercase overflow-hidden shadow-glow"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-rose-gold/30 via-accent-rose-gold/20 to-accent-rose-gold/30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="relative z-10"
                    whileHover={{ letterSpacing: "0.2em" }}
                    transition={{ duration: 0.3 }}
                  >
                    begin your ritual
                  </motion.span>
                  <motion.span
                    className="relative z-10 text-xl"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/services"
                  className="group relative border-2 border-light-off-white/30 text-light-off-white px-12 py-5 rounded-sm font-light hover:bg-light-off-white/10 transition-all tracking-wide text-sm uppercase backdrop-blur-md overflow-hidden glass"
                >
                  <motion.div
                    className="absolute inset-0 bg-light-off-white/5"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                  <motion.span
                    className="relative z-10"
                    whileHover={{ letterSpacing: "0.2em" }}
                    transition={{ duration: 0.3 }}
                  >
                    view treatments
                  </motion.span>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Decorative Line Below */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 2.2, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-accent-rose-gold/60 to-transparent mx-auto mt-20"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

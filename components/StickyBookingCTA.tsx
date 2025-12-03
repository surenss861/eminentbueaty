"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyBookingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            href="/contact#book"
            className="group relative bg-accent-rose-gold/20 backdrop-blur-md border border-accent-rose-gold/40 text-light-off-white px-6 py-4 rounded-sm font-light shadow-glow hover:bg-accent-rose-gold/30 transition-all flex items-center space-x-3 tracking-wide text-sm uppercase overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-accent-rose-gold/20"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: "left" }}
            />
            <Calendar className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
            <motion.span
              className="relative z-10"
              whileHover={{ letterSpacing: "0.15em" }}
              transition={{ duration: 0.3 }}
            >
              book now
            </motion.span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

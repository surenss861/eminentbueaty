"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, X } from "lucide-react";
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
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            href="/contact#book"
            className="group bg-luxury-navy text-white px-6 py-3 rounded-sm font-semibold shadow-xl hover:bg-luxury-charcoal transition-all flex items-center space-x-2 hover:shadow-2xl text-sm tracking-wide"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


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
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            href="/contact#book"
            className="bg-dark-espresso text-light-off-white px-6 py-3 rounded-sm font-light shadow-lg hover:bg-dark-espresso/90 transition-colors flex items-center space-x-2 uppercase tracking-wider text-sm group"
          >
            <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>book now</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

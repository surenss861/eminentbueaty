"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Treatments" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-luxury-warm-white/98 backdrop-blur-xl shadow-md border-b border-luxury-blush/20"
          : "bg-luxury-warm-white/95 backdrop-blur-lg"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-elegant font-light text-luxury-navy">
              Eminent
            </span>
            <span className="text-lg font-light text-luxury-charcoal/70">Beauty Centre</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-luxury-charcoal hover:text-luxury-dusty-rose transition-all font-light px-4 py-2 text-sm tracking-wide relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-luxury-dusty-rose group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:6477006240"
              className="flex items-center space-x-2 text-luxury-charcoal hover:text-luxury-dusty-rose transition-all px-4 py-2 text-sm"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              <span className="font-light">(647) 700-6240</span>
            </a>
            <Link
              href="/contact#book"
              className="bg-luxury-navy text-white px-6 py-2.5 rounded-sm font-semibold hover:bg-luxury-charcoal transition-all shadow-md hover:shadow-lg text-sm tracking-wide"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-luxury-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-luxury-charcoal hover:text-luxury-gold transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-3">
                <a
                  href="tel:6477006240"
                  className="flex items-center space-x-2 text-luxury-charcoal"
                >
                  <Phone className="w-4 h-4" />
                  <span>(647) 700-6240</span>
                </a>
                <Link
                  href="/contact#book"
                  className="block bg-luxury-gold text-white px-6 py-3 rounded-full font-semibold text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


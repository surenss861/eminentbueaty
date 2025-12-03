"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
    { href: "/", label: "home" },
    { href: "/services", label: "treatments" },
    { href: "/about", label: "about" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark-espresso/95 backdrop-blur-md shadow-lg border-b border-light-off-white/5"
          : "bg-dark-espresso/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-serif font-normal text-light-off-white lowercase tracking-wide">
            eminent beauty
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light-off-white/70 hover:text-accent-rose-gold transition-colors font-light text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#book"
              className="bg-accent-rose-gold/20 border border-accent-rose-gold/30 text-light-off-white px-6 py-2.5 rounded-sm font-light hover:bg-accent-rose-gold/30 transition-colors text-sm uppercase tracking-wider backdrop-blur-sm"
            >
              book
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light-off-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-light-off-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-light-off-white/70 hover:text-accent-rose-gold transition-colors font-light uppercase tracking-wider text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#book"
              className="block mt-4 bg-accent-rose-gold/20 border border-accent-rose-gold/30 text-light-off-white px-6 py-3 rounded-sm font-light text-center uppercase tracking-wider text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              book
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

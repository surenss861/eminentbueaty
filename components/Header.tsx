"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

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
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-serif font-normal text-brand-primary">
            Eminent Beauty Centre
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-primary/80 hover:text-brand-primary transition-colors font-light text-sm"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:6477006240"
              className="flex items-center space-x-2 text-brand-primary/80 hover:text-brand-primary transition-colors font-light text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>(647) 700-6240</span>
            </a>
            <Link
              href="/contact#book"
              className="bg-brand-primary text-white px-6 py-2.5 rounded-sm font-medium hover:bg-brand-dark transition-colors text-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-brand-primary/80 hover:text-brand-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:6477006240"
              className="block py-2 text-brand-primary/80 hover:text-brand-primary transition-colors"
            >
              (647) 700-6240
            </a>
            <Link
              href="/contact#book"
              className="block mt-4 bg-brand-primary text-white px-6 py-2.5 rounded-sm font-medium text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

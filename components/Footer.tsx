import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-elegant font-light text-white mb-4">
              Eminent Beauty Centre
            </h3>
            <p className="text-white/70 mb-4 font-light leading-relaxed">
              Toronto&apos;s premier aesthetic spa offering advanced treatments
              for face and body. Experience luxury and excellence with our
              Canadian Certified Aesthetician.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-luxury-blush transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-luxury-blush transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-luxury-blush transition-colors font-light"
                >
                  Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-luxury-blush transition-colors font-light"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/70 hover:text-luxury-blush transition-colors font-light"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-luxury-blush transition-colors font-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-blush mt-0.5 flex-shrink-0" />
                <span className="text-white/70 font-light">
                  2434 Danforth Ave
                  <br />
                  Toronto, ON
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-blush flex-shrink-0" />
                <a
                  href="tel:6477006240"
                  className="text-white/70 hover:text-luxury-blush transition-colors font-light"
                >
                  (647) 700-6240
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-blush flex-shrink-0" />
                <a
                  href="mailto:info@eminentbeautycentre.com"
                  className="text-white/70 hover:text-luxury-blush transition-colors font-light"
                >
                  info@eminentbeautycentre.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm font-light">
          <p>
            © {currentYear} Eminent Beauty Centre. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-luxury-blush transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-luxury-blush transition-colors">
              Terms & Conditions
            </Link>
          </p>
          <p className="mt-2">
            Canadian Certified Aesthetician | Serving Toronto since 2020
          </p>
        </div>
      </div>
    </footer>
  );
}


import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-normal mb-4">Eminent Beauty Centre</h3>
            <p className="text-white/70 font-light text-sm leading-relaxed mb-4">
              Toronto&apos;s premier aesthetic spa offering advanced treatments for face and body.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors font-light text-sm">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors font-light text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors font-light text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 font-light text-sm">
                  2434 Danforth Ave<br />
                  Toronto, ON
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/70 flex-shrink-0" />
                <a href="tel:6477006240" className="text-white/70 hover:text-white transition-colors font-light text-sm">
                  (647) 700-6240
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/70 flex-shrink-0" />
                <a href="mailto:info@eminentbeautycentre.com" className="text-white/70 hover:text-white transition-colors font-light text-sm">
                  info@eminentbeautycentre.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm font-light">
          <p>
            © {currentYear} Eminent Beauty Centre. All rights reserved.
          </p>
          <p className="mt-2">
            Canadian Certified Aesthetician | Serving Toronto since 2020
          </p>
        </div>
      </div>
    </footer>
  );
}

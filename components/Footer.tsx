import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-black text-white/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-serif font-normal mb-4 lowercase text-white">eminent beauty</h3>
            <p className="text-white/60 font-light text-sm leading-relaxed">
              where precision meets artistry. toronto&apos;s premier aesthetic destination.
            </p>
          </div>

          <div>
            <h4 className="font-light mb-4 uppercase tracking-wider text-sm text-white">quick links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-white/60 hover:text-gold-soft transition-colors font-light text-sm">
                  treatments
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-gold-soft transition-colors font-light text-sm">
                  about
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-gold-soft transition-colors font-light text-sm">
                  contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light mb-4 uppercase tracking-wider text-sm text-white">contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold-soft/60 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 font-light text-sm">
                  2434 Danforth Ave<br />
                  Toronto, ON
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-soft/60 flex-shrink-0" />
                <a href="tel:6477006240" className="text-white/60 hover:text-gold-soft transition-colors font-light text-sm">
                  (647) 700-6240
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold-soft/60 flex-shrink-0" />
                <a href="mailto:info@eminentbeautycentre.com" className="text-white/60 hover:text-gold-soft transition-colors font-light text-sm">
                  info@eminentbeautycentre.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-xs font-light">
          <p>
            © {currentYear} eminent beauty centre. all rights reserved.
          </p>
          <p className="mt-2">
            canadian certified aesthetician | serving toronto since 2020
          </p>
        </div>
      </div>
    </footer>
  );
}

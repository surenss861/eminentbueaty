"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const treatments = [
  {
    name: "HydraFacial",
    tagline: "Deep cleansing, exfoliation, extraction, and hydration in one treatment",
    benefits: ["Immediate visible results", "Suitable for all skin types", "No downtime"],
    price: "From $150",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    slug: "hydrafacial",
  },
  {
    name: "Fat Freezing",
    tagline: "Non-invasive body contouring to reduce stubborn fat cells",
    benefits: ["No surgery required", "Targeted results", "Long-lasting effects"],
    price: "From $200",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    slug: "fat-freezing",
  },
  {
    name: "Laser Hair Removal",
    tagline: "Permanent hair reduction with advanced laser technology",
    benefits: ["Precise targeting", "Fast treatment times", "Suitable for most areas"],
    price: "Packages available",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
    slug: "laser-hair-removal",
  },
  {
    name: "Chemical Peels",
    tagline: "Reveal smoother, brighter skin with professional-grade peels",
    benefits: ["Reduces fine lines", "Improves texture", "Fades dark spots"],
    price: "From $120",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    slug: "chemical-peel",
  },
  {
    name: "LED Light Therapy",
    tagline: "Reduce inflammation and promote collagen production",
    benefits: ["Non-invasive", "Painless treatment", "Boosts skin health"],
    price: "From $80",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    slug: "led-light-therapy",
  },
  {
    name: "Lipo Laser Therapy",
    tagline: "Targeted fat reduction and body contouring treatments",
    benefits: ["Skin tightening", "No recovery time", "Visible results"],
    price: "From $150",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    slug: "lipo-laser-therapy",
  },
];

export default function SignatureTreatments() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-elegant font-light text-luxury-navy mb-4">
            Signature Treatments
          </h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-2xl mx-auto font-light">
            Discover our most sought-after aesthetic treatments, each designed to
            enhance your natural beauty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-elegant font-light text-white mb-1">
                    {treatment.name}
                  </h3>
                  <p className="text-sm text-white/90 font-light">{treatment.tagline}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {treatment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-luxury-dusty-rose flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-luxury-charcoal/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-luxury-blush/30">
                  <span className="text-luxury-navy font-semibold">{treatment.price}</span>
                  <Link
                    href={`/services/${treatment.slug}`}
                    className="text-luxury-dusty-rose font-medium hover:text-luxury-navy transition-colors inline-flex items-center space-x-1 text-sm"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


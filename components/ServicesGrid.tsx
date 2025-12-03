"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "HydraFacial",
    description: "Deep cleansing, exfoliation, extraction, and hydration in one treatment",
    benefits: ["Immediate visible results", "Suitable for all skin types"],
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    slug: "hydrafacial",
  },
  {
    name: "Fat Freezing",
    description: "Non-invasive body contouring to reduce stubborn fat cells",
    benefits: ["No surgery required", "Long-lasting effects"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    slug: "fat-freezing",
  },
  {
    name: "Laser Hair Removal",
    description: "Permanent hair reduction with advanced laser technology",
    benefits: ["Precise targeting", "Fast treatment times"],
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
    slug: "laser-hair-removal",
  },
  {
    name: "Chemical Peels",
    description: "Reveal smoother, brighter skin with professional-grade peels",
    benefits: ["Reduces fine lines", "Improves texture"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    slug: "chemical-peel",
  },
  {
    name: "LED Light Therapy",
    description: "Reduce inflammation and promote collagen production",
    benefits: ["Non-invasive", "Painless treatment"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    slug: "led-light-therapy",
  },
  {
    name: "Lipo Laser Therapy",
    description: "Targeted fat reduction and body contouring treatments",
    benefits: ["Skin tightening", "No recovery time"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    slug: "lipo-laser-therapy",
  },
];

export default function ServicesGrid() {
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
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-brand-primary mb-4">
            Our Treatments
          </h2>
          <p className="text-lg text-brand-primary/70 max-w-2xl mx-auto font-light">
            Advanced aesthetic services tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-normal text-brand-primary mb-2">
                  {service.name}
                </h3>
                <p className="text-brand-primary/70 mb-4 font-light text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-brand-primary/60 flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-brand-primary font-medium hover:text-brand-accent transition-colors inline-flex items-center space-x-1 text-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Skin & Face Package",
    originalPrice: 730,
    price: 499,
    savings: 231,
    treatments: [
      "HydraFacial Treatment",
      "Chemical Peel",
      "LED Light Therapy",
      "Skincare Consultation",
    ],
    popular: true,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Body Contouring Package",
    originalPrice: 850,
    price: 599,
    savings: 251,
    treatments: [
      "Fat Freezing Session",
      "Lipo Laser Therapy",
      "Body Analysis",
      "Follow-up Consultation",
    ],
    popular: false,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
  },
  {
    name: "Complete Beauty Package",
    originalPrice: 1200,
    price: 899,
    savings: 301,
    treatments: [
      "HydraFacial Treatment",
      "Fat Freezing Session",
      "Laser Hair Removal (3 sessions)",
      "LED Light Therapy",
      "Comprehensive Consultation",
    ],
    popular: false,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function PackagesSection() {
  return (
    <section className="py-24 bg-luxury-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-elegant font-light text-luxury-navy mb-4">
            Treatment Packages
          </h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-2xl mx-auto font-light">
            Save on our most popular treatment combinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-sm shadow-sm hover:shadow-md transition-all overflow-hidden ${
                pkg.popular ? "ring-2 ring-luxury-dusty-rose/30" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-luxury-dusty-rose text-white px-4 py-1.5 text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-elegant font-light text-luxury-navy mb-6">
                  {pkg.name}
                </h3>

                <div className="mb-6 pb-6 border-b border-luxury-blush/30">
                  <div className="flex items-baseline space-x-3 mb-2">
                    <span className="text-4xl font-light text-luxury-navy">
                      ${pkg.price}
                    </span>
                    <span className="text-lg text-luxury-charcoal/40 line-through">
                      ${pkg.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-luxury-dusty-rose font-medium">
                    Save ${pkg.savings}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.treatments.map((treatment) => (
                    <li key={treatment} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-luxury-dusty-rose flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-luxury-charcoal/70">{treatment}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact#book"
                  className="block w-full bg-luxury-navy text-white text-center py-3 rounded-sm font-semibold hover:bg-luxury-charcoal transition-all text-sm tracking-wide"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-luxury-charcoal/70 mb-4 font-light">
            New clients: Sign up for 10% off your first treatment
          </p>
          <Link
            href="/contact#signup"
            className="inline-flex items-center space-x-2 text-luxury-dusty-rose font-medium hover:text-luxury-navy transition-colors text-sm"
          >
            <span>Join Our VIP List</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

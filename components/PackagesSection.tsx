"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Tag, Sparkles } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-b from-white via-luxury-cream/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M60 60m-50 0a50 50 0 1 1 100 0a50 50 0 1 1 -100 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-luxury-gold/20 to-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/30 text-luxury-gold px-6 py-3 rounded-full mb-6 shadow-lg">
            <Tag className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-wide">Special Offers</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            Beauty Packages
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Save on our most popular treatment combinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                pkg.popular ? "md:scale-105 border-2 border-luxury-gold ring-4 ring-luxury-gold/20" : "border border-gray-200 hover:border-luxury-gold/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-luxury-gold to-yellow-500 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl shadow-lg z-10">
                  ⭐ Most Popular
                </div>
              )}
              
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-luxury-charcoal mb-6">
                  {pkg.name}
                </h3>
                
                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-baseline space-x-3 mb-2">
                    <span className="text-5xl font-bold text-luxury-gold">
                      ${pkg.price}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      ${pkg.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                      Save ${pkg.savings}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({Math.round((pkg.savings / pkg.originalPrice) * 100)}% off)
                    </span>
                  </div>
                </div>

                {/* Treatments List */}
                <ul className="space-y-4 mb-8">
                  {pkg.treatments.map((treatment) => (
                    <li key={treatment} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-6 h-6 text-luxury-gold bg-luxury-gold/10 rounded-full p-1" />
                      </div>
                      <span className="text-gray-700 font-medium">{treatment}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact#book"
                  className="block w-full bg-gradient-to-r from-luxury-gold to-yellow-500 text-white text-center py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
          className="text-center bg-gradient-to-r from-luxury-gold/10 to-luxury-cream/50 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-700 mb-4 font-medium">
            New clients: Sign up for 10% off your first treatment
          </p>
          <Link
            href="/contact#signup"
            className="inline-flex items-center space-x-2 text-luxury-gold font-bold hover:underline text-lg"
          >
            <Sparkles className="w-5 h-5" />
            <span>Join Our VIP List</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const results = [
  {
    name: "Yogi L.",
    treatment: "HydraFacial & Fat Freezing",
    text: "The spa is clean, spacious and comfortable! Aklima is kind, professional and knowledgeable. I have seen amazing results thus far. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&w=200&h=200",
  },
  {
    name: "Sarah M.",
    treatment: "Complete Beauty Package",
    text: "I've been coming here for months and the results speak for themselves. The treatments are effective and the atmosphere is so relaxing. Best spa in Toronto!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop&w=200&h=200",
  },
  {
    name: "Jennifer K.",
    treatment: "Laser Hair Removal",
    text: "Professional service and incredible results. The staff made me feel comfortable throughout the entire process. I couldn't be happier with my experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&w=200&h=200",
  },
];

export default function ResultsSection() {
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
            Real Results, Real Stories
          </h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-2xl mx-auto font-light">
            See what our clients are saying about their transformative experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={result.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-luxury-ivory p-8 rounded-sm shadow-sm hover:shadow-md transition-all"
            >
              <Quote className="w-8 h-8 text-luxury-dusty-rose/50 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(result.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-luxury-gold fill-luxury-gold"
                  />
                ))}
              </div>
              <p className="text-luxury-charcoal/80 mb-6 leading-relaxed italic">
                &ldquo;{result.text}&rdquo;
              </p>
              <div className="flex items-center space-x-4 pt-6 border-t border-luxury-blush/30">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-luxury-blush/30">
                  <Image
                    src={result.image}
                    alt={result.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-luxury-navy">{result.name}</p>
                  <p className="text-sm text-luxury-charcoal/60">{result.treatment}</p>
                </div>
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
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-luxury-dusty-rose font-medium hover:text-luxury-navy transition-colors"
          >
            <span>Read More Reviews on Google</span>
            <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


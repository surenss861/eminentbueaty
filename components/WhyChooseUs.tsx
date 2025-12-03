"use client";

import { motion } from "framer-motion";
import { Award, Heart, Shield, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Licensed Professionals",
    description:
      "Our Canadian Certified Aesthetician brings years of expertise and ongoing training in the latest techniques and technologies.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description:
      "We use only FDA-approved technologies and professional-grade products from trusted brands to ensure optimal results.",
  },
  {
    icon: Heart,
    title: "Personalized Plans",
    description:
      "Every treatment is tailored to your unique skin type, concerns, and aesthetic goals through comprehensive consultations.",
  },
  {
    icon: Shield,
    title: "Proven Results",
    description:
      "With 100+ satisfied clients and a 5.0 rating, we've built a reputation for delivering exceptional, visible results.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-luxury-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-elegant font-light text-luxury-navy mb-4">
            Why Choose Eminent Beauty
          </h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-2xl mx-auto font-light">
            Experience the difference that expertise, care, and premium treatments make
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-sm shadow-sm hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-blush/30 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-luxury-navy mb-4">
                  {reason.title}
                </h3>
                <p className="text-luxury-charcoal/70 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Award, Users, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Yogi L.",
    text: "The spa is clean, spacious and comfortable! Aklima is kind, professional and knowledgeable. I have seen amazing results thus far.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&w=200&h=200",
  },
  {
    name: "Sarah M.",
    text: "I've been coming here for months and the results speak for themselves. The treatments are effective and the atmosphere is so relaxing.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop&w=200&h=200",
  },
  {
    name: "Jennifer K.",
    text: "Professional service and incredible results. The staff made me feel comfortable throughout the entire process.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&w=200&h=200",
  },
];

const credentials = [
  { icon: Award, text: "Canadian Certified Aesthetician" },
  { icon: CheckCircle, text: "FDA-Approved Products" },
  { icon: Users, text: "100+ Satisfied Clients" },
  { icon: Star, text: "5.0 Average Rating" },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Credentials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <motion.div
                key={credential.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/10 rounded-full mb-3">
                  <Icon className="w-6 h-6 text-brand-accent" />
                </div>
                <p className="text-sm text-brand-primary/70 font-light">{credential.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-brand-primary mb-4">
            Real Results, Real Stories
          </h2>
          <p className="text-lg text-brand-primary/70 max-w-2xl mx-auto font-light">
            See what our clients are saying about their transformative experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-sm border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-accent fill-brand-accent" />
                ))}
              </div>
              <p className="text-brand-primary/80 mb-6 leading-relaxed font-light italic text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <p className="font-medium text-brand-primary text-sm">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


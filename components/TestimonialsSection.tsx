"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Yogi L.",
    treatment: "HydraFacial & Fat Freezing",
    rating: 5,
    text: "The spa is clean, spacious and comfortable! Aklima is kind, professional and knowledgeable. I have seen amazing results thus far. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Sarah M.",
    treatment: "Complete Beauty Package",
    rating: 5,
    text: "I've been coming here for months and the results speak for themselves. The treatments are effective and the atmosphere is so relaxing. Best spa in Toronto!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Jennifer K.",
    treatment: "Laser Hair Removal",
    rating: 5,
    text: "Professional service and incredible results. The staff made me feel comfortable throughout the entire process. I couldn't be happier with my experience.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Maria R.",
    treatment: "Chemical Peel & LED Therapy",
    rating: 5,
    text: "My skin has never looked better! The consultation was thorough and the treatment was exactly what I needed. Will definitely be back for more sessions.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&w=100&h=100",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-luxury-cream/20 to-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <Sparkles className="w-8 h-8 text-luxury-gold mx-auto" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real experiences from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-luxury-gold/30"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-24 h-24 text-luxury-gold" />
              </div>

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-luxury-gold fill-luxury-gold"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-8 italic leading-relaxed text-lg relative">
                  <Quote className="w-8 h-8 text-luxury-gold/50 absolute -top-2 -left-2" />
                  <span className="pl-6">{testimonial.text}</span>
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-luxury-gold/30">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-luxury-charcoal text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                  </div>
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
          className="text-center bg-gradient-to-r from-luxury-gold/10 via-luxury-cream/50 to-luxury-gold/10 rounded-3xl p-10 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-8 h-8 text-luxury-gold fill-luxury-gold" />
            <p className="text-3xl font-bold text-luxury-charcoal">
              Rated 5.0/5.0
            </p>
            <Star className="w-8 h-8 text-luxury-gold fill-luxury-gold" />
          </div>
          <p className="text-lg text-gray-600 mb-6">
            by our clients
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-luxury-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-luxury-gold/90 transition-all shadow-lg hover:scale-105"
          >
            <span>Read More Reviews on Google</span>
            <Star className="w-5 h-5 fill-white text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


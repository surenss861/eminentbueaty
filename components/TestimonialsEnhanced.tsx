"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "sarah m.",
    treatment: "morpheus8 + dermal fillers",
    rating: 5,
    text: "i've never felt this confident in my skin. aklima understood exactly what i wanted and delivered beyond my expectations. the results are subtle but transformative.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop&w=200&h=200",
    months: "6 months",
  },
  {
    name: "jennifer k.",
    treatment: "botox + laser hair removal",
    rating: 5,
    text: "this is the version of me i always knew existed. the treatments are gentle, effective, and the entire experience feels like self-care, not a medical procedure.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&w=200&h=200",
    months: "4 months",
  },
  {
    name: "maria r.",
    treatment: "microneedling + hydrafacial",
    rating: 5,
    text: "my skin has never looked better. the consultation was thorough, the treatment was comfortable, and the results speak for themselves. i feel radiant.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&w=200&h=200",
    months: "3 months",
  },
  {
    name: "emma t.",
    treatment: "complete transformation package",
    rating: 5,
    text: "subtle changes. profound confidence. that's what eminent beauty gave me. aklima is an artist who truly understands the balance between enhancement and natural beauty.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&w=200&h=200",
    months: "8 months",
  },
];

export default function TestimonialsEnhanced() {
  return (
    <section className="py-32 bg-dark-wine-black relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-accent-rose-gold/60 to-transparent mx-auto mb-10"
          />
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-light-off-white mb-6 lowercase leading-tight text-shadow-soft">
            real stories
          </h2>
          <p className="text-xl text-light-off-white/75 font-light max-w-2xl mx-auto leading-relaxed">
            from women who transformed their confidence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-dark-midnight-plum/50 backdrop-blur-sm p-8 rounded-sm border border-light-off-white/10 hover:border-accent-rose-gold/30 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-24 h-24 text-accent-rose-gold" />
              </div>

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent-rose-gold fill-accent-rose-gold"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-light-off-white/90 mb-8 leading-relaxed font-light italic text-lg relative pl-6">
                  <Quote className="w-6 h-6 text-accent-rose-gold/50 absolute -top-1 -left-1" />
                  {testimonial.text}
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-light-off-white/10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent-rose-gold/30">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-light text-light-off-white text-base mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-light-off-white/60 font-light">
                      {testimonial.treatment} • {testimonial.months}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-dark-midnight-plum/50 backdrop-blur-sm rounded-sm p-10 max-w-4xl mx-auto border border-light-off-white/10"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Star className="w-8 h-8 text-accent-rose-gold fill-accent-rose-gold" />
            <p className="text-4xl font-serif font-normal text-light-off-white">
              5.0
            </p>
            <Star className="w-8 h-8 text-accent-rose-gold fill-accent-rose-gold" />
          </div>
          <p className="text-lg text-light-off-white/70 mb-6 font-light">
            average rating from 100+ verified reviews
          </p>
          <a
            href="https://www.google.com/maps/place/2434+Danforth+Ave,+Toronto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-accent-rose-gold hover:text-accent-champagne-blush transition-colors font-light text-sm uppercase tracking-wider"
          >
            <span>read reviews on google</span>
            <Star className="w-4 h-4 fill-accent-rose-gold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


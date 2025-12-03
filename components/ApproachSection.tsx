"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Microscope, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research",
    description:
      "We begin by understanding your unique skin type, concerns, and aesthetic goals through a comprehensive consultation.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1935&auto=format&fit=crop",
  },
  {
    icon: Microscope,
    title: "Analysis",
    description:
      "Our certified aesthetician analyzes your skin condition and recommends the most effective treatment plan tailored to you.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Practice",
    description:
      "We deliver professional treatments using advanced technology and premium products, ensuring safety and optimal results.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ApproachSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-luxury-cream/20 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M40 40m-30 0a30 30 0 1 1 60 0a30 30 0 1 1 -60 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          <div className="inline-block mb-6">
            <Sparkles className="w-8 h-8 text-luxury-gold mx-auto" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            Our Approach
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A systematic methodology ensuring the best results for every client
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy/60 via-luxury-navy/40 to-luxury-navy/60" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-6 border-2 border-white/30">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-2xl font-serif font-bold text-luxury-charcoal mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Step Number */}
                <div className="absolute top-4 left-4 bg-luxury-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-luxury-gold/10 via-white to-luxury-cream/50 rounded-3xl p-10 shadow-2xl border border-luxury-gold/20">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-luxury-gold fill-luxury-gold" />
            </div>
            <p className="text-2xl md:text-3xl font-serif font-bold text-luxury-charcoal mb-6 text-center">
              Never compromise your beauty. It is your identity.
            </p>
            <p className="text-lg text-gray-600 text-center leading-relaxed max-w-2xl mx-auto">
              Your safety and satisfaction are our priority. All treatments are
              performed by certified professionals using approved technologies, and
              we follow up with every client to ensure expectations are met.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


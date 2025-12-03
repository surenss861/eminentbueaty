"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&w=600&h=600"
                  alt="Aklima - Canadian Certified Aesthetician"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-brand-accent" />
                <span className="text-sm text-brand-accent font-medium">
                  Canadian Certified Aesthetician
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-brand-primary mb-6">
                Meet Aklima
              </h2>
              <p className="text-lg text-brand-primary/70 mb-4 font-light leading-relaxed">
                With over 5 years of experience, Aklima specializes in personalized aesthetic
                treatments, helping clients achieve their beauty goals with expertise and care.
              </p>
              <p className="text-brand-primary/70 mb-6 font-light leading-relaxed">
                Our centre combines professional expertise with cutting-edge technology and
                premium products to deliver exceptional results for every client.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-brand-primary/70">
                  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2" />
                  Advanced Training in Laser Treatments
                </li>
                <li className="flex items-center text-sm text-brand-primary/70">
                  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2" />
                  Certified in Facial & Body Contouring
                </li>
                <li className="flex items-center text-sm text-brand-primary/70">
                  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2" />
                  Ongoing Education & Training
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


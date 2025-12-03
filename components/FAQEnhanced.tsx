"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "what should i expect during my first consultation?",
    answer: "your first consultation is a comprehensive 30-minute session where we discuss your aesthetic goals, review your medical history, and create a personalized treatment plan. we'll explain each recommended treatment, expected results, and answer all your questions. there's no pressure—just honest conversation about what's possible.",
  },
  {
    question: "are treatments safe?",
    answer: "absolutely. we use only FDA-approved devices and professional-grade products. our canadian certified aesthetician has 5+ years of experience and ongoing training. we conduct thorough consultations to ensure treatments are appropriate for you, and we follow strict safety protocols for every procedure.",
  },
  {
    question: "how long do results last?",
    answer: "results vary by treatment. botox typically lasts 3-4 months, dermal fillers 6-18 months, while morpheus8 and laser hair removal offer more permanent results. we'll discuss expected duration during your consultation and create a maintenance plan tailored to your goals.",
  },
  {
    question: "is there any downtime?",
    answer: "most treatments have minimal to no downtime. you can return to your normal activities immediately. some treatments may cause mild redness or swelling that subsides within hours. we'll provide specific aftercare instructions to ensure optimal results.",
  },
  {
    question: "do you offer payment plans?",
    answer: "yes, we offer flexible payment options and package deals to make treatments accessible. we also accept major credit cards and can discuss payment plans for larger treatment packages during your consultation.",
  },
  {
    question: "how do i prepare for my treatment?",
    answer: "we'll send you detailed preparation instructions before your appointment. generally, avoid sun exposure, certain skincare products, and blood-thinning medications 24-48 hours before. we'll review everything during your consultation to ensure you're fully prepared.",
  },
];

export default function FAQEnhanced() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-dark-midnight-plum relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-accent-rose-gold/60 to-transparent mx-auto mb-10"
          />
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-light-off-white mb-6 lowercase leading-tight text-shadow-soft">
            questions answered
          </h2>
          <p className="text-xl text-light-off-white/75 font-light max-w-2xl mx-auto leading-relaxed">
            everything you need to know before your first visit
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-light-off-white/10 rounded-sm overflow-hidden bg-dark-wine-black/30 backdrop-blur-sm hover:border-accent-rose-gold/30 transition-colors"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-light-off-white/5 transition-colors"
                aria-expanded={openIndex === index}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-light text-light-off-white text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent-rose-gold flex-shrink-0" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-light-off-white/80 leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-light-off-white/70 mb-6 font-light">
            still have questions? we&apos;re here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 text-accent-rose-gold hover:text-accent-champagne-blush transition-colors font-light uppercase tracking-wider text-sm"
          >
            <span>contact us</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


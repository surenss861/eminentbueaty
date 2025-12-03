"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are treatments covered by health care?",
    answer:
      "Most aesthetic treatments are considered cosmetic and are not covered by OHIP or private health insurance. However, we offer flexible payment options and package deals to make our services accessible.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "While we cannot guarantee specific results as individual responses vary, we are committed to your satisfaction. We provide thorough consultations and follow-up care to ensure you're happy with your treatment experience.",
  },
  {
    question: "What are the side effects?",
    answer:
      "Side effects vary by treatment but are typically minimal. Common temporary effects may include mild redness, swelling, or sensitivity. Our certified aesthetician will discuss all potential side effects during your consultation and provide aftercare instructions.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your individual goals and the treatment selected. Some treatments show results after one session, while others (like laser hair removal) require multiple sessions for optimal results. We'll create a personalized treatment plan during your consultation.",
  },
  {
    question: "Is there any downtime?",
    answer:
      "Most of our treatments have minimal to no downtime. You can typically return to your normal activities immediately after treatment. We'll provide specific aftercare instructions based on your treatment.",
  },
  {
    question: "Do you serve male clients?",
    answer:
      "Eminent Beauty Centre is designed to serve women exclusively, creating a comfortable and focused environment for our female clients. We appreciate your understanding.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our treatments
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-luxury-cream/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-luxury-charcoal pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-luxury-gold flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-600 leading-relaxed">
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? Don&apos;t hesitate to ask!
          </p>
          <a
            href="/contact"
            className="text-luxury-gold font-semibold hover:underline"
          >
            Contact Us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Yogi L.",
    text: "The spa is clean, spacious and comfortable! Amazing results!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Sarah M.",
    text: "I've been coming here for months. Best spa in Toronto!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Jennifer K.",
    text: "Professional service and incredible results. Highly recommend!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Maria R.",
    text: "My skin has never looked better! Will definitely be back.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Emma T.",
    text: "Outstanding service and beautiful results. Love this place!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&w=400&h=400",
  },
];

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    if (!scrollRef.current || !containerRef.current) return;

    const cards = scrollRef.current.children;
    Array.from(cards).forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.8,
          x: 100,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] overflow-hidden bg-gradient-to-b from-white via-luxury-cream/30 to-white"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-4">
              Client Stories
            </h2>
            <p className="text-xl text-gray-600">Scroll horizontally to explore</p>
          </div>
          <motion.div
            ref={scrollRef}
            style={{ x }}
            className="flex gap-8 px-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[400px] h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl group"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-2/3 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="400px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6 h-1/3 flex flex-col justify-center">
                  <p className="text-gray-700 italic mb-4 text-lg">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="font-bold text-luxury-charcoal">
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const testimonials = [
  {
    quote:
      "Six months in and I've hit PRs I never thought I'd see. The coaches actually watch your form, every session.",
    name: "Daniel Reyes",
    role: "Member since 2023",
  },
  {
    quote:
      "The floor is never overcrowded, the equipment always works, and the 24/7 access fits my shift schedule perfectly.",
    name: "Priya Nair",
    role: "Member since 2022",
  },
  {
    quote:
      "I joined for the strength classes and stayed for the community. People here actually push you to finish the set.",
    name: "Marcus Webb",
    role: "Member since 2024",
  },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-bg-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-500">
            Members
          </p>
          <h2 className="font-heading text-4xl uppercase leading-tight text-text-100 sm:text-5xl">
            What Our Members Say
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              transition={{ duration: 0.25 }}
              className="will-change-transform flex flex-col justify-between border border-bg-700 bg-bg-800 p-8 transition-colors hover:border-brand-500/40"
            >
              <p className="text-base leading-7 text-text-100">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 border-t border-bg-700 pt-6">
                <p className="font-heading text-sm uppercase tracking-wide text-text-100">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-text-400">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
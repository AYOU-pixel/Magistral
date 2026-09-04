"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "10+", label: "Certified Trainers" },
  { value: "9", label: "Years Running" },
  { value: "30+", label: "Classes Per Week" },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Stats() {
  return (
    <section className="border-y border-bg-700 bg-bg-800 px-6 py-16 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-10 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="will-change-transform text-center lg:text-left"
          >
            <p className="font-heading text-5xl uppercase text-brand-500 sm:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-text-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
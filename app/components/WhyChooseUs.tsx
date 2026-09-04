"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { BadgeCheck, Dumbbell, Clock3, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Certified Trainers",
    description:
      "Every coach on our floor is certified and trained to correct form before it becomes a habit.",
  },
  {
    icon: Dumbbell,
    title: "Full Equipment Floor",
    description:
      "Free weights, plate-loaded machines, and dedicated platforms — no waiting on a single rack.",
  },
  {
    icon: Clock3,
    title: "Early to Late Hours",
    description: "Open 6AM to 11PM, seven days a week, built around your schedule.",
  },
  {
    icon: HeartHandshake,
    title: "Real Community",
    description:
      "Members who push each other, coaches who know your name, and a floor that holds you accountable.",
  },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const iconPulse: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function WhyChooseUs() {
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
            Why Magistral
          </p>
          <h2 className="font-heading text-4xl uppercase leading-tight text-text-100 sm:text-5xl">
            Everything You Need To Show Up And Work
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="will-change-transform"
            >
              <motion.div
                variants={iconPulse}
                initial="rest"
                whileHover="hover"
                className="inline-block"
              >
                <reason.icon
                  className="h-8 w-8 text-brand-500"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </motion.div>
              <h3 className="font-heading mt-5 text-lg uppercase text-text-100">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-400">
                {reason.description}
              </p>
              <motion.div
                className="mt-4 h-px w-0 bg-brand-500/40"
                whileHover={shouldReduceMotion ? {} : { width: "60%" }}
                transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
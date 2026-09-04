"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Dumbbell, Flame, Users, UserCheck } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    description:
      "Barbell-focused programming built around squat, bench, and deadlift progressions.",
  },
  {
    icon: Flame,
    title: "HIIT & Cardio",
    description:
      "High-output interval sessions designed to build conditioning fast, with no wasted time.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description:
      "Coached group sessions that keep you accountable and push your pace every time.",
  },
  {
    icon: UserCheck,
    title: "1-on-1 Coaching",
    description:
      "Personalized programming and form correction from a trainer who tracks your progress.",
  },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
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

const iconVariants: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -10, 10, -5, 5, 0],
    scale: 1.15,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Programs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="programs" className="bg-bg-800 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-500">
            Programs
          </p>
          <h2 className="font-heading text-4xl uppercase leading-tight text-text-100 sm:text-5xl">
            Training Built Around Your Goal
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group will-change-transform border border-bg-700 bg-bg-900 p-8 transition-colors hover:border-brand-500"
            >
              <motion.div
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
                className="inline-block"
              >
                <program.icon
                  className="h-9 w-9 text-brand-500"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </motion.div>
              <h3 className="font-heading mt-6 text-xl uppercase text-text-100">
                {program.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-400">
                {program.description}
              </p>
              <motion.div
                className="mt-4 h-0.5 w-0 bg-brand-500"
                whileHover={shouldReduceMotion ? {} : { width: "100%" }}
                transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
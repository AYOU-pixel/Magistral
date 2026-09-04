"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-bg-900 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="will-change-transform relative order-2 aspect-[4/3] w-full bg-bg-800 lg:order-1 lg:aspect-auto lg:h-[520px]"
        >
          <Image
            src="/about.jpg"
            alt="Inside Magistral Gym — free weights and training floor"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            decoding="async"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 lg:order-2"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-500"
          >
            About Magistral
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl uppercase leading-tight text-text-100 sm:text-5xl"
          >
            Built For People Who Actually Train
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-7 text-text-400 sm:text-lg"
          >
            Magistral isn&apos;t a spa with treadmills. It&apos;s a full
            floor of free weights, machines, and open space for people who
            want to get stronger and see it happen. We keep the equipment
            maintained, the coaching real, and the atmosphere focused on one
            thing — results.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-7 text-text-400 sm:text-lg"
          >
            Whether you&apos;re walking in for the first time or you&apos;ve
            been lifting for years, our floor is built to meet you where you
            are and push you past it.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-2 gap-6 border-t border-bg-700 pt-8 sm:grid-cols-3"
          >
            {[
              { value: "6AM–11PM", label: "Daily Access" },
              { value: "8,000 sqft", label: "Training Floor" },
              { value: "2015", label: "Founded" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl uppercase text-text-100">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-text-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
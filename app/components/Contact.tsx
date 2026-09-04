"use client";

import { motion, type Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg-800 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-500"
          >
            Get Started
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl uppercase leading-tight text-text-100 sm:text-5xl lg:text-6xl"
          >
            Ready To Train?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-7 text-text-400"
          >
            Have questions about memberships, schedules, or your first
            session? Message us directly on WhatsApp and we&apos;ll help you
            get started.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="https://wa.me/212781913306"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message us on WhatsApp"
              className="inline-flex min-h-[52px] items-center gap-3 bg-brand-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-bg-900 transition-colors hover:bg-brand-600"
            >
              <FaWhatsapp
                className="h-5 w-5"
                aria-hidden="true"
              />

              Message Us On WhatsApp
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
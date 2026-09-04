"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "6:00 AM – 11:00 PM" },
  { day: "Saturday", time: "7:00 AM – 9:00 PM" },
  { day: "Sunday", time: "8:00 AM – 6:00 PM" },
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function LocationAndHours() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="location" className="bg-bg-900 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        {/* Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-500"
          >
            Visit Us
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl uppercase leading-tight text-text-100 sm:text-5xl"
          >
            Location &amp; Hours
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <p className="text-sm leading-6 text-text-400">
                1420 Ironside Avenue
                <br />
                Riverton District, Metro City 84021
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Phone
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <a
                href="tel:+15552149087"
                className="text-sm leading-6 text-text-400 transition-colors hover:text-text-100"
              >
                (555) 214-9087
              </a>
            </div>
            <div className="flex items-start gap-4">
              <Mail
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <a
                href="mailto:hello@magistralgym.com"
                className="text-sm leading-6 text-text-400 transition-colors hover:text-text-100"
              >
                hello@magistralgym.com
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 border-t border-bg-700 pt-8"
          >
            <div className="mb-4 flex items-center gap-2">
              <Clock
                className="h-4 w-4 text-brand-500"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-text-100">
                Hours
              </span>
            </div>
            <ul className="space-y-3">
              {hours.map((row) => (
                <li
                  key={row.day}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-text-100">{row.day}</span>
                  <span className="text-text-400">{row.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="will-change-transform relative flex min-h-[420px] items-center justify-center border border-bg-700 bg-bg-800"
        >
          <div className="text-center">
            <MapPin
              className="mx-auto h-8 w-8 text-brand-500"
              strokeWidth={2}
              aria-hidden="true"
            />
            <p className="mt-3 text-sm uppercase tracking-wider text-text-400">
              Map Embed Goes Here
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/mo",
    featured: false,
    features: [
      "Full gym floor access",
      "Standard hours (6AM–9PM)",
      "Locker room access",
      "1 guest pass per month",
    ],
  },
  {
    name: "Standard",
    price: "$49",
    period: "/mo",
    featured: true,
    features: [
      "24/7 gym floor access",
      "2 group classes per week",
      "Locker room + towel service",
      "3 guest passes per month",
    ],
  },
  {
    name: "Elite",
    price: "$89",
    period: "/mo",
    featured: false,
    features: [
      "24/7 gym floor access",
      "Unlimited group classes",
      "2 personal coaching sessions/mo",
      "Unlimited guest passes",
    ],
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

export default function Pricing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pricing" className="bg-bg-800 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-500">
            Membership
          </p>
          <h2 className="font-heading text-4xl uppercase leading-tight text-text-100 sm:text-5xl">
            Pick Your Plan, Start Today
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              transition={{ duration: 0.25 }}
              className={`will-change-transform relative flex flex-col border p-8 transition-colors ${
                plan.featured
                  ? "border-brand-500 bg-bg-900"
                  : "border-bg-700 bg-bg-900 hover:border-brand-500/50"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-text-100">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading text-2xl uppercase text-text-100">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-5xl text-text-100">
                  {plan.price}
                </span>
                <span className="text-sm text-text-400">{plan.period}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-text-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/212781913306?text=${encodeURIComponent(
                  `I'm interested in the ${plan.name} membership plan.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex min-h-[48px] items-center justify-center px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide transition-colors ${
                  plan.featured
                    ? "bg-brand-500 text-bg-900 hover:bg-brand-600"
                    : "border border-bg-700 text-text-100 hover:border-brand-500 hover:text-brand-500"
                }`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
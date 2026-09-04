"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Shared easing token — typed as a 4-number tuple (BezierDefinition) */
/* ------------------------------------------------------------------ */

const easeOutCubic = [0.215, 0.61, 0.355, 1] as const;

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutCubic,
    },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: easeOutCubic,
      delay: 0.2,
    },
  },
};

const accentGrow: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: easeOutCubic,
      delay: 0.6,
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-dvh items-center overflow-hidden bg-bg-900 pt-24"
    >
      {/* Background split (desktop) */}
      <div className="absolute right-0 top-0 h-full w-full bg-bg-800 lg:w-1/2" />

      {/* Ambient brand glow */}
      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-500/5 blur-[140px]" />

      {/* Mobile/tablet background */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/hero1.jpg"
          alt=""
          fill
          priority
          decoding="async"
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-900/85 via-bg-900/55 to-bg-900/25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl uppercase leading-[0.9] text-text-100 text-shadow-hero sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Train Hard.
              <br />
              <span className="text-brand-500">Become Strong.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-base leading-7 text-text-400 sm:text-lg"
            >
              A place built for people who show up, push harder, and become
              stronger. No excuses. Just work.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="will-change-transform"
              >
                <a
                  href="https://wa.me/212781913306?text=Hi%2C%20I%27d%20like%20to%20start%20my%20fitness%20journey."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Start your fitness journey on WhatsApp"
                  className="inline-block min-h-[48px] bg-brand-500 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-bg-900 transition-colors hover:bg-brand-600"
                >
                  Start Your Journey
                </a>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="will-change-transform"
              >
                <Link
                  href="#programs"
                  className="inline-block min-h-[48px] border border-bg-700 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-text-100 transition-colors hover:border-brand-500 hover:text-brand-500"
                >
                  Explore Programs
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-14 flex gap-8 border-t border-bg-700 pt-8 sm:gap-10"
            >
              {[
                { value: "500+", label: "Members" },
                { value: "10+", label: "Trainers" },
                { value: "100%", label: "Effort" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl uppercase text-text-100 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-text-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image (desktop split) */}
          <motion.div
            variants={imageReveal}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="relative hidden min-h-[560px] lg:block xl:min-h-[640px]"
          >
            <Image
              src="/hero1.jpg"
              alt="Athlete training with intensity at Magistral Gym"
              fill
              priority
              decoding="async"
              className="object-cover"
              sizes="(max-width: 1024px) 0vw, 50vw"
            />

            {/* Green accent bar */}
            <motion.div
              variants={accentGrow}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              className="absolute bottom-0 left-0 h-2 w-32 origin-left bg-brand-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
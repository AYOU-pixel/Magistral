"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
] as const;

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-bg-900 px-6 py-14 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-b border-bg-700 pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative h-10 w-32 sm:h-12 sm:w-40">
            <Image
              src="/whitemagistral.svg"
              alt="Magistral Gym"
              fill
              className="object-contain object-left"
            />
          </div>

          <ul className="flex flex-wrap gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-text-400 transition-colors hover:text-text-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            {/* Instagram */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="inline-flex h-10 w-10 items-center justify-center text-text-400 transition-colors hover:text-brand-500"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="inline-flex h-10 w-10 items-center justify-center text-text-400 transition-colors hover:text-brand-500"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </motion.a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-text-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Magistral Gym. All rights reserved.</p>
          <p>1420 Ironside Avenue, Riverton District, Metro City 84021</p>
        </div>
      </div>
    </motion.footer>
  );
}
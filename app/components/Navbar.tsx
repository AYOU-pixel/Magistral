"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
] as const;

const easeOutCubic = [0.215, 0.61, 0.355, 1] as const;

const menuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: easeOutCubic },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: easeOutCubic },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: easeOutCubic,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: -10,
    transition: {
      delay: (links.length - i) * 0.03,
      duration: 0.2,
    },
  }),
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  // Scroll-aware background — rAF-throttled
  useEffect(() => {
    let ticking = false;

    const updateScrolled = () => {
      setScrolled(window.scrollY > 24);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    };

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Escape key closes menu
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  const headerClasses = scrolled
    ? "border-bg-700 bg-bg-900/90 backdrop-blur-md"
    : "border-transparent bg-transparent";

  const navPadding = scrolled ? "py-4" : "py-6";

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-colors duration-300 ${headerClasses}`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-300 lg:px-8 ${navPadding}`}
      >
        {/* Logo */}
        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link
            href="/"
            className="relative block h-10 w-32 shrink-0 sm:h-12 sm:w-40"
            aria-label="Magistral Gym Home"
          >
            <Image
              src="/whitemagistral.svg"
              alt="Magistral Gym"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-sm font-medium text-text-400 transition-colors hover:text-text-100"
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-brand-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, ease: easeOutCubic }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="hidden md:inline-block"
        >
          <Link
            href="#contact"
            className="inline-block min-h-[44px] bg-brand-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-bg-900 transition-colors hover:bg-brand-600"
          >
            Join Now
          </Link>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center text-text-100 transition-colors hover:text-brand-500 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {open ? (
            <X size={24} strokeWidth={2.5} aria-hidden="true" />
          ) : (
            <Menu size={24} strokeWidth={2.5} aria-hidden="true" />
          )}
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-b border-bg-700 bg-bg-900/95 backdrop-blur md:hidden"
          >
            <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
              <ul className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link
                      href={link.href}
                      className="flex min-h-[44px] items-center py-2 text-base font-medium text-text-100 transition-colors hover:text-brand-500"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  className="mt-3"
                  custom={links.length}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href="#contact"
                    className="block min-h-[48px] bg-brand-500 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-bg-900 hover:bg-brand-600"
                    onClick={closeMenu}
                  >
                    Join Now
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
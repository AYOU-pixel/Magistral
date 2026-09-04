"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const photos = [
  { src: "/1.jpg", alt: "Free weights area" },
  { src: "/2.jpg", alt: "Group training class" },
  { src: "/3.jpg", alt: "Cardio equipment floor" },
  { src: "/4.jpg", alt: "Coach spotting a lift" },
  { src: "/5.jpg", alt: "Platform and racks" },
  { src: "/6.jpg", alt: "Members training together" },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-bg-800 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-500">
            Gallery
          </p>
          <h2 className="font-heading text-4xl uppercase leading-tight text-text-100 sm:text-5xl">
            Inside The Gym
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.src}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group will-change-transform relative aspect-square overflow-hidden bg-bg-900"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-brand-500/0 transition-colors duration-300 group-hover:bg-brand-500/10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
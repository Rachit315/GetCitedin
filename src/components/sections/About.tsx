"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function About() {
  return (
    <section id="about" className="section-padding bg-section-gray">
      <motion.div
        className="container-narrow"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:gap-20"
          variants={fadeUp}
          custom={0}
        >
          <motion.div variants={fadeUp} custom={0}>
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]">
              We are a Reddit growth agency helping brands show up where real
              buying decisions happen.
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="space-y-6">
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              From audience research to content deployment, we place your product
              inside conversations across 200+ subreddits, driving awareness,
              trust, and measurable conversions.
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              We don&apos;t treat Reddit like another social platform. Every
              campaign is built around community behavior, not marketing
              tactics, ensuring your brand feels native, credible, and worth
              engaging with.
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              Built for scale and consistency, our system combines high-karma
              accounts, authentic content, and structured deployment to create a
              compounding presence that continues to drive results over time.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 grid gap-12 border-t border-neutral-200/80 pt-16 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="text-center sm:text-left"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="block text-5xl font-medium text-reddit-orange md:text-6xl lg:text-7xl"
              />
              <p className="mx-auto mt-3 max-w-[200px] text-sm leading-snug text-neutral-600 sm:mx-0">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

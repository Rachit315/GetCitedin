"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VALUE_CARDS } from "@/lib/constants";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ValueProposition() {
  return (
    <section
      className="section-padding text-white"
      style={{
        background:
          "linear-gradient(180deg, #FF4500 0%, #FFAD8E 54%, #FFFFFF 100%)",
      }}
    >
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-1.5"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <span className="text-base tracking-[0.02em] text-white/80">
            Why Reddit?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.55 }}
          className="mx-auto mt-6 max-w-4xl text-3xl font-medium leading-[1.1] md:text-5xl lg:text-[4rem]"
        >
          Reddit is where decisions are made, not just impressions.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-[1.3] text-white/80 md:text-2xl"
        >
          While other platforms push ads, Reddit runs on conversations people
          actually trust.
        </motion.p>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {VALUE_CARDS.map((item, index) => (
            <motion.article
              key={item.stat}
              variants={card}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
              }}
              className="group flex flex-col overflow-hidden rounded-[20px] bg-white p-8 text-left shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
            >
              <motion.div
                className="relative mx-auto aspect-square w-full max-w-[200px] shadow-[inset_12px_-4px_12px_rgba(255,255,255,0.4)]"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                whileHover={{ scale: 1.04, rotate: 1 }}
              >
                <Image
                  src={item.iconImage}
                  alt=""
                  fill
                  className="object-contain object-center"
                  sizes="200px"
                />
              </motion.div>

              <p className="mt-10 text-4xl font-medium leading-[1.3] tracking-[0.02em] text-reddit-orange md:text-5xl lg:text-[4rem]">
                {item.stat}
              </p>

              <p className="mt-10 text-xl font-medium leading-[1.2] tracking-[0.02em] text-neutral-800/80 md:text-2xl lg:text-[2rem]">
                {item.title}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center rounded-full border border-reddit-orange/40 bg-reddit-orange/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-reddit-orange"
    >
      {children}
    </motion.span>
  );
}

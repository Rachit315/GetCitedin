"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type BentoVariant = "research" | "accounts" | "content" | "tracking";

export function BentoVisual({
  src,
  variant,
  index,
}: {
  src: string;
  variant: BentoVariant;
  index: number;
}) {
  return (
    <motion.div
      className="relative aspect-[544/230] w-full overflow-hidden rounded-xl shadow-[inset_0_-9px_40px_rgba(255,255,255,0.6)]"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      <motion.div
        className="relative h-full w-full"
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <Image
          src={src}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
        />

        {variant === "accounts" && <AccountsPulse />}
        {variant === "content" && <ContentShimmer />}
      </motion.div>
    </motion.div>
  );
}

function AccountsPulse() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-[30%_12%] rounded-lg bg-white/10"
      animate={{ opacity: [0, 0.35, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function ContentShimmer() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      initial={{ x: "-100%" }}
      whileInView={{ x: "200%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
    />
  );
}

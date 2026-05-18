"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "nav";
  className?: string;
  href?: string;
  onClick?: () => void;
};

const motionProps = {
  whileHover: { y: -2, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};

export function Button({
  children,
  variant = "primary",
  className,
  href,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reddit-orange focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-black text-white px-8 py-4 text-base shadow-[0_2px_0_0_#3c3c3c,inset_0_-3px_3px_1px_rgba(0,0,0,0.16),inset_0_3px_2px_0_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)]",
    outline:
      "border-2 border-reddit-orange text-reddit-orange bg-white/80 backdrop-blur-sm px-6 py-2.5 text-sm hover:bg-reddit-orange/5",
    nav: "bg-black text-white px-5 py-2.5 text-sm hover:bg-neutral-800",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...(motionProps as HTMLMotionProps<"a">)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      {...(motionProps as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
}

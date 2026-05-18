"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RedditMarquee } from "./RedditMarquee";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-hero-gradient px-4 pb-4 pt-28 md:mx-5 md:px-8 md:pt-32">
      <motion.div
        className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-reddit-orange/80 bg-white/70 px-4 py-2 backdrop-blur-sm"
        >
          <Image
            src="/images/hero/sparkle.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 shrink-0"
          />
          <span className="bg-gradient-to-r from-reddit-orange to-[#ff7744] bg-clip-text text-sm font-medium text-transparent">
            150M+ Impressions Delivered
          </span>
        </motion.div>

        <motion.h1
          className="flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-4xl font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease }}
        >
          <span>Turn</span>
          <span className="inline-flex items-center gap-2 text-reddit-orange">
            Reddit
            <Image
              src="/images/hero/reddit-icon-inline.svg"
              alt=""
              width={48}
              height={48}
              className="hidden h-10 w-10 sm:inline-block md:h-12 md:w-12"
            />
          </span>
          <span>into your highest converting growth channel.</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          We place your product inside real Reddit conversations across 200+
          subreddits, driving awareness, trust, and sign-ups at scale.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease }}
        >
          <Button variant="primary" href="#pricing">
            Book a Call
          </Button>
        </motion.div>
      </motion.div>

      <RedditMarquee />
    </section>
  );
}

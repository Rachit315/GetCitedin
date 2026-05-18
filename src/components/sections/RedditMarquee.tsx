"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Heart, Share2 } from "lucide-react";
import { REDDIT_POSTS } from "@/lib/constants";
import { RedditLogo } from "@/components/ui/RedditLogo";

function RedditCard({
  post,
}: {
  post: (typeof REDDIT_POSTS)[number];
}) {
  return (
    <motion.div
      className="w-[min(380px,85vw)] shrink-0 rounded-[15px] border-2 border-[#181818] bg-[#181818] p-5 shadow-[0_0_6px_rgba(0,0,0,0.05)]"
      style={{ transform: `rotate(${post.rotation}deg)` }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
      }}
    >
      <motion.div className="flex items-start gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-reddit-orange shadow-[2.5px_3.5px_6.5px_rgba(0,0,0,0.08)]">
          <RedditLogo className="h-7 w-7 text-white" />
        </div>
        <motion.div className="min-w-0 flex-1 text-left">
          <motion.div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-white">
              {post.community}
            </span>
            <span className="text-sm text-[#4fbcff]">✓</span>
          </motion.div>
          <div className="mt-1 flex flex-wrap gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="h-4 w-4 rounded-sm bg-gradient-to-br from-amber-300 via-orange-400 to-rose-500 opacity-90"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <p className="mt-5 text-left text-xl font-medium leading-snug text-white">
        {post.text}
      </p>

      <div className="mt-5 flex items-center gap-8 text-white">
        <span className="flex items-center gap-2 text-sm font-medium">
          <Heart className="h-5 w-5" strokeWidth={2} />
          {post.likes}
        </span>
        <span className="flex items-center gap-2 text-sm font-medium">
          <Share2 className="h-5 w-5" strokeWidth={2} />
          {post.shares}
        </span>
      </div>
    </motion.div>
  );
}

export function RedditMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const parallaxX = useTransform(springX, [-1, 1], [-14, 14]);
  const parallaxY = useTransform(springY, [-1, 1], [-10, 10]);

  const posts = [...REDDIT_POSTS, ...REDDIT_POSTS];

  return (
    <motion.div
      className="relative mt-12 w-full overflow-hidden pb-6 pt-4 md:mt-16"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      ref={containerRef}
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="relative">
        <motion.div
          className="flex w-max gap-5 px-4 md:gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {posts.map((post, i) => (
            <RedditCard key={`${post.community}-${i}`} post={post} />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fff0e8] to-transparent md:w-28"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent md:w-28"
        aria-hidden
      />
    </motion.div>
  );
}

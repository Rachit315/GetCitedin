"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Timeline() {
  return (
    <section className="section-padding bg-section-gray">
      <motion.div
        className="container-narrow"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <motion.div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-reddit-orange/60 px-4 py-1.5 text-base tracking-[0.02em] text-reddit-orange">
            <span className="h-2 w-2 shrink-0 rounded-full bg-reddit-orange shadow-[0_0_8px_rgba(255,69,0,0.6)]" />
            Execution Timeline
          </span>
          <h2 className="mt-6 text-3xl font-medium leading-[1.1] text-neutral-900 md:text-5xl lg:text-[4rem]">
            60 days to real Reddit growth
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-[1.3] text-neutral-800/80 md:text-2xl">
            Every campaign follows a structured rollout, from groundwork to
            scale, built to establish trust, visibility, and long-term presence
            across Reddit.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {TIMELINE.map((phase, index) => (
            <motion.article
              key={phase.weeks}
              custom={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 24px 48px -12px rgba(255, 69, 0, 0.15)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
              }}
              className="relative flex min-h-[440px] flex-col overflow-hidden rounded-[20px] border border-reddit-orange/60 bg-white"
            >
              <motion.div
                className="flex flex-1 flex-col p-6 pb-0 md:p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.15, duration: 0.4 }}
              >
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.45 }}
                >
                  <h3 className="text-[2rem] font-medium leading-[1.1] text-neutral-900">
                    {phase.weeks}
                  </h3>
                  <p className="text-xl leading-[1.1] text-neutral-900">
                    {phase.phase}
                  </p>
                </motion.div>

                <p className="mt-6 text-xs leading-[1.3] tracking-[0.02em] text-neutral-900">
                  {phase.description}
                </p>

                <ul className="mt-6 flex flex-col gap-6">
                  {phase.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-2.5 text-base font-medium leading-none text-reddit-orange"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08 + itemIndex * 0.06 + 0.3,
                        duration: 0.35,
                      }}
                    >
                      <Image
                        src="/images/hero/reddit-bullet.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6 shrink-0"
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="relative mt-auto h-[100px] w-full overflow-hidden rounded-xl"
                initial={{ opacity: 0, scaleY: 0.6 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.35,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                style={{ transformOrigin: "bottom" }}
              >
                <Image
                  src={phase.waveImage}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="340px"
                />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

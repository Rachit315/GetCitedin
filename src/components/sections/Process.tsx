"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { BentoVisual } from "@/components/sections/bento/BentoVisual";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-white">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium text-reddit-orange">
            <span className="h-2 w-2 shrink-0 rounded-full bg-reddit-orange shadow-[0_0_10px_rgba(255,69,0,0.55)]" />
            What we do?
          </span>
          <h2 className="mt-8 text-3xl font-medium leading-[1.15] text-neutral-900 md:text-4xl lg:text-[2.75rem]">
            How we turn{" "}
            <span className="text-reddit-orange">Reddit</span> into a predictable
            growth channel
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            A proven, repeatable system designed to place your brand inside
            high-intent conversations, consistently and at scale.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.article
              key={step.title}
              custom={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
              }}
              className="process-card overflow-hidden rounded-[18px] border border-neutral-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_20px_50px_-12px_rgba(255,69,0,0.15)]"
            >
              <motion.div
                className="px-7 pt-8 pb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 + 0.15, duration: 0.45 }}
              >
                <p className="text-sm font-normal leading-none text-neutral-900/80">
                  {step.number}
                </p>
                <h3 className="mt-6 text-[1.65rem] font-medium leading-none tracking-tight text-neutral-900 md:text-[2rem]">
                  {step.title}
                </h3>
              </motion.div>

              <motion.div
                className="px-7 pt-10 pb-7"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3 }}
              >
                <BentoVisual
                  src={step.visual}
                  variant={step.variant}
                  index={index}
                />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

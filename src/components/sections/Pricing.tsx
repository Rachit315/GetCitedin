"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { formatPrice, cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <motion.div
        className="container-narrow text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <h2 className="text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl lg:text-[4.625rem] lg:leading-[1.05]">
          Simple <span className="text-reddit-orange">Pricing</span>. Serious{" "}
          <span className="text-reddit-orange">Results</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-[59rem] text-base tracking-[0.02em] text-neutral-600/90">
          Every plan includes real threads, real communities, and real results.
          The difference is scale — how fast you want to own the conversation.
        </p>

        <motion.div
          className="mt-16 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {PRICING.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof PRICING)[number];
  index: number;
}) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      whileHover={{
        y: plan.featured ? -6 : -10,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
      }}
      className={cn(
        "relative flex w-full max-w-[340px] flex-col overflow-hidden rounded-[18px] border border-[#dddddd] bg-white text-left shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_24px_48px_-12px_rgba(255,69,0,0.12)]",
        plan.featured && "z-10 lg:min-h-[460px] lg:scale-105"
      )}
    >
      <motion.div
        className={cn(
          "flex flex-1 flex-col p-5",
          plan.featured ? "min-h-[460px]" : "min-h-[440px]"
        )}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.15, duration: 0.4 }}
      >
        <motion.div
          className="relative h-[140px] overflow-hidden rounded-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Image
            src={plan.headerImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="340px"
            priority={plan.featured}
          />
          {plan.featured && (
            <motion.div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          )}
          <span className="absolute left-3.5 top-3.5 rounded-[20px] bg-white px-2 py-1.5 text-xs font-medium text-neutral-900">
            {plan.name}
          </span>
        </motion.div>

        <p className="mt-4 text-[2.5rem] font-normal leading-none tracking-tight text-neutral-900">
          {formatPrice(plan.price)}
          <span className="text-base font-normal text-neutral-900">/month</span>
        </p>

        <p className="mt-4 text-xs leading-[1.3] text-neutral-900">
          {plan.description}
        </p>

        <ul className="mt-10 flex flex-1 flex-col gap-2">
          {plan.features.map((feature, featureIndex) => (
            <motion.li
              key={feature}
              className="flex items-start gap-2 text-sm leading-[1.3] text-neutral-900"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05 + featureIndex * 0.06 + 0.25,
                duration: 0.35,
              }}
            >
              <span className="mt-0.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-neutral-900">
                <Check className="h-2 w-2 text-neutral-900" strokeWidth={3} />
              </span>
              {feature}
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={cn(
            "mt-8 flex h-12 w-full items-center justify-center rounded-[60px] text-base font-medium text-white transition-colors",
            plan.featured
              ? "bg-reddit-orange hover:bg-[#e63e00]"
              : "bg-neutral-900 hover:bg-neutral-800"
          )}
        >
          {plan.cta}
        </motion.a>
      </motion.div>
    </motion.article>
  );
}

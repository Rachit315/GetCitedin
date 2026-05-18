"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-medium leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
              Frequently Asked{" "}
              <span className="text-reddit-orange">Questions</span>?
            </h2>
            <motion.div className="mt-10">
              <Button variant="primary" href="#pricing">
                Book a Call
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={item.question}
                  layout
                  className={cn(
                    "overflow-hidden rounded-[20px] border transition-colors",
                    isOpen
                      ? "border-reddit-orange/40 bg-reddit-orange"
                      : "border-neutral-200/80 bg-white"
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left md:px-7"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "text-lg font-medium md:text-2xl",
                        isOpen ? "text-white" : "text-reddit-orange"
                      )}
                    >
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                        isOpen ? "text-white" : "text-reddit-orange"
                      )}
                    >
                      <ChevronDown className="h-6 w-6" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-xs leading-relaxed tracking-wide text-white/95 md:px-7 md:text-sm">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

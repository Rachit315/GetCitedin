"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import logoPng from "../../../LOGO.png";

const NAVBAR_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.nav
          layout
          className={cn(
            "flex w-full items-center justify-between gap-4 rounded-full border-2 border-white bg-[#303030] px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-[max-width,padding,background-color,border-color,box-shadow] duration-500 ease-out",
            scrolled
              ? "max-w-[700px] border-white/60 bg-[#303030]/55 px-4 py-2 shadow-[0_4px_22px_rgba(0,0,0,0.16)]"
              : "max-w-[820px]"
          )}
          animate={{
            opacity: scrolled ? 0.68 : 1,
            scale: scrolled ? 0.88 : 1,
            y: scrolled ? -4 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 26,
            mass: 0.8,
          }}
        >
          <a href="#" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image
                src={logoPng}
                alt=""
                width={36}
                height={36}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <span className="text-base font-semibold tracking-tight text-white">
              {SITE.name}
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAVBAR_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="nav"
              href="#pricing"
              className="!bg-white !px-5 !py-2.5 !text-sm !font-medium !text-[#1f1f1f] hover:!bg-neutral-100"
            >
              Book a Call
            </Button>
          </motion.div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className="absolute left-4 right-4 top-20 rounded-3xl bg-white p-6 shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-4">
                {NAVBAR_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="block text-lg font-medium text-neutral-900"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <Button
                variant="nav"
                href="#pricing"
                className="mt-6 w-full"
              >
                Book a Call
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

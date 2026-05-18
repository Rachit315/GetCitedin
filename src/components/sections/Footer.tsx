"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Share2, X } from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/lib/constants";
import logoPng from "../../../LOGO.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white">
      <motion.p
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 select-none text-center text-[clamp(6rem,18vw,18rem)] font-medium leading-none tracking-tighter text-[#2a2a2a]"
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {SITE.name}
      </motion.p>

      <div className="container-narrow relative z-10 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={logoPng}
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="text-lg font-medium">{SITE.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              Reddit growth for B2B brands that want real conversations, not
              vanity metrics.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-reddit-orange hover:text-reddit-orange"
                aria-label="Twitter"
              >
                <X className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-reddit-orange hover:text-reddit-orange"
                aria-label="LinkedIn"
              >
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
              Company
            </h4>
            <ul className="mt-6 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <motion.div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
              Legal
            </h4>
            <ul className="mt-6 space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
              Contact
            </h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-sm text-neutral-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-reddit-orange" />
                hello@getcitedin.com
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-reddit-orange" />
                San Francisco, CA
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#00F300]/10 px-4 py-2 text-xs font-medium text-[#00F300]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#00F300]" />
              Accepting new clients
            </span>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Built for brands that show up where decisions are made.</p>
        </div>
      </div>
    </footer>
  );
}

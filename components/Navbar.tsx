"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Command, Menu, X } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { navLinks, GH_URL, MAILTO } from "@/lib/data";

export default function Navbar({ onOpenCommand }: { onOpenCommand: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverBrand, setHoverBrand] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen ? "bg-bg/60 backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:px-6 lg:px-10">
        <Link
          href="#top"
          data-cursor-label="top. ↗"
          className="font-space text-sm font-semibold text-ink sm:text-xl"
          onMouseEnter={() => setHoverBrand(true)}
          onMouseLeave={() => setHoverBrand(false)}
          aria-label="ARAV — back to top"
        >
          {hoverBrand ? <span className="text-muted">@ARAV / exploring</span> : <>@ARAV</>}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink/60 transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={GH_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            data-cursor-label="github ↗"
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink/60 transition-colors duration-200 hover:text-ink"
          >
            <GitHubIcon width={18} height={18} strokeWidth={1.5} />
          </Link>
          <Link
            href={MAILTO}
            aria-label="Email ARAV"
            data-cursor-label="say hi ↗"
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink/60 transition-colors duration-200 hover:text-ink"
          >
            <Mail size={18} strokeWidth={1.5} />
          </Link>
          <button
            onClick={onOpenCommand}
            data-cursor-label="⌘K"
            className="flex h-9 items-center gap-2 rounded-md border border-border-subtle bg-surface-1/60 px-2.5 text-ink/60 transition-colors duration-200 hover:text-ink"
            aria-label="Open command menu (Ctrl+K)"
          >
            <Command size={15} strokeWidth={1.5} />
            <span className="font-geist-mono text-xs">K</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-ink md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-border-subtle bg-bg/80 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col px-5 py-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="border-b border-border-subtle py-4 font-space text-lg text-ink"
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-4 py-4">
                <Link
                  href={GH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex h-11 items-center gap-2 rounded-md border border-border-subtle px-3 text-ink"
                >
                  <GitHubIcon width={17} height={17} strokeWidth={1.5} /> GitHub
                </Link>
                <Link
                  href={MAILTO}
                  onClick={close}
                  className="flex h-11 items-center gap-2 rounded-md border border-border-subtle px-3 text-ink"
                >
                  <Mail size={17} strokeWidth={1.5} /> Email
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

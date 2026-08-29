"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Check, Copy, Mail, ArrowUpRight } from "lucide-react";
import { EMAIL, MAILTO, GH_URL } from "@/lib/data";
import Reveal from "@/components/Reveal";

/**
 * Say Hi. — simple email + GitHub, with a copy-email interaction.
 * No corporate contact form.
 */
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="container-x py-14 sm:py-20">
        <Reveal>
          <h2 className="font-space text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Say Hi.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Found something interesting? Tell me about it.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={MAILTO}
              data-cursor-label="say hi ↗"
              className="group inline-flex h-12 items-center gap-2.5 rounded-lg border border-border-medium bg-surface-1/60 px-5 text-sm font-medium text-ink transition-colors duration-200 hover:border-border-strong hover:bg-surface-1"
            >
              <Mail size={16} strokeWidth={1.5} />
              <span>Email ARAV</span>
            </Link>

            <Link
              href={GH_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="github ↗"
              className="group inline-flex h-12 items-center gap-2.5 rounded-lg px-4 text-sm text-ink/70 transition-colors hover:text-ink"
            >
              <span className="underline-offset-4 group-hover:underline">GitHub</span>
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <button
            onClick={copyEmail}
            data-cursor-label="copy"
            className="group mt-8 inline-flex items-center gap-2.5 rounded-lg border border-border-subtle px-4 py-3 text-sm text-muted transition-colors duration-200 hover:border-border-strong hover:text-ink"
            aria-live="polite"
          >
            {copied ? (
              <>
                <Check size={15} strokeWidth={1.5} className="text-emerald-400" />
                <span className="text-ink">Copied.</span>
              </>
            ) : (
              <>
                <Copy size={15} strokeWidth={1.5} className="opacity-70 transition-opacity group-hover:opacity-100" />
                <span>Copy email</span>
              </>
            )}
          </button>
        </Reveal>
      </div>
    </section>
  );
}

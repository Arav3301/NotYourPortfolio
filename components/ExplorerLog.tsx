"use client";

import { ArrowRight } from "lucide-react";
import { explorerLog } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

/**
 * Explorer's Log — an editorial, data-driven list (not a blog. no card grid).
 */
export default function ExplorerLog() {
  return (
    <section id="log" className="scroll-mt-24">
      <div className="container-x py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            title="Explorer's Log"
            subtitle="Things currently occupying unreasonable amounts of my curiosity."
          />
        </Reveal>

        <div className="mt-4 flex flex-col">
          {explorerLog.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.04}>
              <div
                data-cursor-label="inspect"
                className="group flex flex-col gap-2 border-b border-border-subtle py-5 transition-colors duration-200 hover:border-border-medium sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:py-6"
              >
                <div className="flex items-baseline gap-4">
                  <h3 className="font-space text-2xl font-semibold tracking-tight text-ink/80 transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-ink sm:text-3xl">
                    {entry.title}
                  </h3>
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:items-end">
                  <span className="meta-label">{entry.category}</span>
                  <p className="max-w-xs text-sm leading-relaxed text-faint sm:text-right">
                    {entry.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

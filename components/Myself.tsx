"use client";

import Reveal from "@/components/Reveal";

const METADATA = [
  { key: "project", value: "00" },
  { key: "status", value: "exploring" },
  { key: "curiosity", value: "high" },
  { key: "bugs", value: "several" },
  { key: "eta", value: "unknown" },
];

/**
 * The signature "Myself" project — styled as a serious featured project.
 * Its cursor label ("still building…") is provided via data-cursor-label.
 * The metadata is always visible (not hover-only) per accessibility rules.
 */
export default function Myself() {
  return (
    <section id="myself" className="scroll-mt-24">
      <div className="container-x py-14 sm:py-20">
        <Reveal>
          <div className="border-b border-border-subtle pb-6">
            <div className="mb-3 flex items-center gap-3">
              <h2 className="font-space text-2xl font-semibold tracking-tight text-ink sm:text-[30px] lg:text-4xl">
                Ongoing Project
              </h2>
              <span className="h-px flex-1 bg-border-subtle" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            data-cursor-label="still building…"
            className="mt-4 rounded-xl border border-transparent p-2 transition-colors duration-300 hover:border-border-subtle"
          >
            <div className="flex flex-col gap-10 py-10 sm:py-12 lg:flex-row lg:items-start lg:justify-between">
              {/* Left: identity */}
              <div className="flex flex-col gap-5">
                <span className="meta-label">Project 00</span>
                <h3 className="font-space text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
                  Myself
                </h3>
                <p className="max-w-sm text-lg text-muted sm:text-xl">
                  The longest thing I&apos;ve ever worked on.
                </p>
              </div>

              {/* Right: description + metadata */}
              <div className="flex max-w-sm flex-col gap-6">
                <p className="text-base leading-relaxed text-body">
                  Currently studying engineering, learning software, building random
                  things, changing my mind, finding new rabbit holes and figuring out
                  what kind of person I want to become.
                </p>
                <p className="meta-label">No stable release planned.</p>

                <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border-subtle pt-6">
                  {METADATA.map((m) => (
                    <div key={m.key} className="flex flex-col gap-1">
                      <dt className="meta-label">{m.key}</dt>
                      <dd className="font-space text-base font-medium text-ink">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Status line */}
            <div className="flex items-center gap-3 border-t border-border-subtle px-2 py-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/80" />
                In Progress
              </span>
              <span className="meta-label">
                maintainer: ARAV · repo: private, unfortunately
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { explorerMarkerStates } from "@/lib/data";

// Section ids in order; each maps to an Explorer Marker coordinate.
const SECTION_IDS = [
  "top", // 00 ARAV
  "projects", // 01 BUILDS
  "myself", // 02 MYSELF
  "log", // 03 LOG
  "skills", // 04 TOOLS
  "field", // 05 FIELD
  "about", // 06 ABOUT
  "contact", // 07 CONTACT
];

/**
 * Tiny persistent marker fixed near the bottom edge of the viewport that
 * shows "NN / LABEL" coordinates for the currently visible major section.
 * Desktop-only and skipped when reduced motion is preferred.
 */
export default function ExplorerMarker() {
  const [index, setIndex] = useState(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mqFine = window.matchMedia("(pointer: fine)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mqFine.matches || mqReduced.matches) return;

    const enable = () => setEnabled(true);
    const enableId = requestAnimationFrame(enable);

    const els = SECTION_IDS.map((id) => document.getElementById(id));

    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      els.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setIndex(best);
    };

    const rafId = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(enableId);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  const state = explorerMarkerStates[index];

  return (
    <div
      className="pointer-events-none fixed bottom-6 left-6 z-40 hidden select-none items-center gap-3 font-geist-mono text-[11px] tracking-[0.12em] text-faint lg:flex"
      aria-hidden="true"
    >
      <span>
        {state.index} / {state.label}
      </span>
    </div>
  );
}

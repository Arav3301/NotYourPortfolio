"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Desktop-only custom cursor. A 16x16 white dot with `mix-blend-difference`
 * that trails the pointer slightly. It also displays a contextual label when
 * the hovered element declares one via `data-cursor-label` (e.g. "visit ↗",
 * "still building…"). Both the dot and label only run on fine pointers when
 * motion is allowed; nothing renders on touch or with reduced motion enabled.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mqFine = window.matchMedia("(pointer: fine)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mqFine.matches || mqReduced.matches) return;

    const enable = () => setEnabled(true);
    const enableId = requestAnimationFrame(enable);

    const pos = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x - 8}px, ${pos.y - 8}px, 0)`;
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${pos.x + 14}px, ${pos.y + 10}px, 0)`;
      }

      const el = (e.target as Element | null)?.closest?.("[data-cursor-label]") as
        | HTMLElement
        | null;
      setLabel(el?.dataset.cursorLabel ?? null);

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {});
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(enableId);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[120] h-4 w-4 rounded-full bg-white mix-blend-difference transition-[transform,opacity] duration-150 ease-out"
        style={{ opacity: visible ? 1 : 0 }}
      />
      {label && (
        <div
          ref={labelRef}
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-[121] whitespace-nowrap rounded-md border border-border-strong bg-surface-2/95 px-2.5 py-1 font-geist-mono text-[11px] text-ink shadow-xl backdrop-blur transition-[transform,opacity] duration-200 ease-out"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {label}
        </div>
      )}
    </>
  );
}

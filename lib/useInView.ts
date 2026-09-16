"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean that flips to `true` the first time the element
 * scrolls into the viewport (used to reveal tint/color on touch devices where
 * hover doesn't exist). Only applies on pointer:coarse devices; on hover-capable
 * devices it stays `false` so the existing hover styles do all the work.
 */
export function useInViewOnce() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

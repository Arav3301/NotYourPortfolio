"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORD = ["e", "x", "p", "l", "o", "r", "e"];

/**
 * Hidden Easter egg: typing "explore" (while no input is focused) briefly shows
 * "good choice." then disappears. No modal, no sound, no confetti.
 */
export default function EasterEgg() {
  const [show, setShow] = useState(false);
  const target = useRef(WORD.join(""));

  useEffect(() => {
    let buffer = "";
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement as HTMLElement | null;
      const inInput =
        el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
      if (inInput || e.metaKey || e.ctrlKey || e.altKey) {
        buffer = "";
        return;
      }
      if (!/^[a-zA-Z]$/.test(e.key)) {
        buffer = "";
        return;
      }
      buffer = (buffer + e.key.toLowerCase()).slice(-target.current.length);
      if (buffer === target.current) {
        setShow(true);
        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(() => setShow(false), 1400);
        buffer = "";
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="pointer-events-none fixed bottom-10 left-1/2 z-[95] -translate-x-1/2 rounded-md border border-border-strong bg-surface-2/95 px-4 py-2 font-geist-mono text-sm text-ink shadow-xl backdrop-blur"
          aria-hidden="true"
        >
          good choice.
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GREETINGS = [
  "Hello",
  "Bonjour",
  "नमस्कार",
  "Ciao",
  "Olá",
];

const GREETING_MS = 350;
const FOUND_MS = 280;
const NAME_MS = 460;
const REVEAL_MS = 1000;

type Props = {
  onDone: () => void;
};

/**
 * Multilingual greeting loader, then an ARAV-specific ending
 * ("found you." -> "ARAV") before the upward shutter reveal.
 * Respects prefers-reduced-motion by collapsing to an instant reveal.
 */
export default function Loader({ onDone }: Props) {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [phase, setPhase] = useState<"greeting" | "found" | "name">("greeting");
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const mqReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (mqReduced) {
      const fast = setTimeout(onDone, 20);
      return () => clearTimeout(fast);
    }

    let t: ReturnType<typeof setTimeout> | null = null;
    for (let i = 1; i < GREETINGS.length; i++) {
      t = setTimeout(() => setGreetingIndex(i), i * GREETING_MS);
    }

    const greetingTotal = GREETINGS.length * GREETING_MS + 140;
    const foundTimer = setTimeout(() => setPhase("found"), greetingTotal);
    const nameTimer = setTimeout(() => setPhase("name"), greetingTotal + FOUND_MS);
    const exitTimer = setTimeout(() => setExit(true), greetingTotal + FOUND_MS + NAME_MS);
    const doneTimer = setTimeout(
      onDone,
      greetingTotal + FOUND_MS + NAME_MS + REVEAL_MS,
    );

    return () => {
      if (t) clearTimeout(t);
      clearTimeout(foundTimer);
      clearTimeout(nameTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
      initial={{ y: "0%" }}
      animate={exit ? { y: "-100%" } : { y: "0%" }}
      transition={{ duration: 1, ease: [0.8, 0, 0.2, 1] }}
      aria-hidden="true"
    >
      <div className="px-6 text-center">
        <AnimatePresence mode="wait">
          {phase === "greeting" && (
            <motion.p
              key={greetingIndex}
              className="font-space text-4xl font-semibold tracking-tight text-ink sm:text-6xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {GREETINGS[greetingIndex]}
            </motion.p>
          )}
          {phase === "found" && (
            <motion.p
              key="found"
              className="font-geist-mono text-sm text-muted sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              found you.
            </motion.p>
          )}
          {phase === "name" && (
            <motion.h1
              key="name"
              className="font-space text-5xl font-semibold tracking-tight text-ink sm:text-7xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              ARAV
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

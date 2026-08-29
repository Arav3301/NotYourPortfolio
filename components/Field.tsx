"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GH_URL } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const IDEAS: { text: string; prominent?: boolean }[] = [
  { text: "C++", prominent: true },
  { text: "Web", prominent: true },
  { text: "JoSAA data" },
  { text: "mech design", prominent: true },
  { text: "compilers" },
  { text: "physics" },
  { text: "databases" },
  { text: "finance tools", prominent: true },
  { text: "build systems" },
  { text: "algorithms" },
  { text: "git" },
  { text: "hardware" },
  { text: "AI" },
  { text: "the next rabbit hole", prominent: true },
  { text: "parsers" },
  { text: "assembly" },
  { text: "CAD" },
  { text: "unknown", prominent: true },
  { text: "rabbit_hole" },
  { text: "vector math" },
  { text: "SQL" },
  { text: "idea_42" },
  { text: "web engines" },
  { text: "unexplored" },
  { text: "side quests" },
  { text: "the edge" },
];

const FEED = [
  "the field is calm today",
  "every idea starts as a weed",
  "some are about to escape",
  "idea #42 is drifting too close to the edge",
  "the good ones stay patient",
  "something new just won't stay still",
];

const INFLUENCE = 230; // px — how far the field bends toward the cursor
const PULL = 0.34; // how strongly clustered ideas converge
const SETTLE = 0.04; // how quickly ideas drift back into orbit
const RING = 120; // px — max distance for idea-to-idea threads
const ESCAPE_MS = 5200;

type IdeaState = {
  x: number;
  y: number;
  a: number;
  spd: number;
  r: number;
  bob: number;
};

/**
 * The Idea Field — a calm alternative to the void. Real rabbit holes drift in
 * slow elliptical orbits. The cursor bends them gently into local clusters and
 * stitches faint threads between them. Occasionally an idea gets restless and
 * escapes the panel, then quietly re-enters. Falls back to a static frame
 * under prefers-reduced-motion.
 */
export default function Field() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const escapeRef = useRef<{ idx: number; start: number } | null>(null);
  const [feedIdx, setFeedIdx] = useState(0);
  const [escapeIdx, setEscapeIdx] = useState(-1);

  useEffect(() => {
    const feed = setInterval(() => setFeedIdx((i) => i + 1), 4200);
    return () => clearInterval(feed);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    const t0 = performance.now();
    let state: IdeaState[] = [];
    let escapeTimer: ReturnType<typeof setTimeout> | null = null;

    const newState = (i: number): IdeaState => {
      const frac = (i * 0.61803398875) % 1; // golden-angle spread, deterministic
      return {
        x: 0,
        y: 0,
        a: frac * Math.PI * 2 + 0.65,
        spd: 0.00005 + (i % 6) * 0.00004,
        r: 0.28 + frac * 0.72,
        bob: (i % 7) * 2.4,
      };
    };

    const home = (st: IdeaState, t: number, cx: number, cy: number, rx: number, ry: number) => ({
      x: cx + Math.cos(st.a + t * st.spd) * rx * st.r,
      y: cy + Math.sin(st.a + t * st.spd) * ry * st.r + Math.sin(t * 0.0011 + st.bob) * 9,
    });

    const drawIdeas = (t: number, cx: number, cy: number, rx: number, ry: number, animate: boolean) => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const pointerNear = mx >= 0 && my >= 0;
      let nearest = -1;
      let nearestD = INFLUENCE;

      // first pass — advance positions
      const pos: { x: number; y: number; escaping: boolean }[] = [];
      for (let i = 0; i < state.length; i++) {
        const st = state[i];
        const hm = home(st, t, cx, cy, rx, ry);
        const escaping = escapeRef.current?.idx === i;
        const esc = escapeRef.current;

        let x = hm.x;
        let y = hm.y;
        let fade = 1;

        if (escaping && esc) {
          const p = Math.min(1, (t - esc.start) / ESCAPE_MS);
          const out = rx * 1.7 * p;
          x += Math.cos(st.a) * out;
          y += Math.sin(st.a) * out;
          fade = Math.max(0, 1 - p * 1.35);
        } else if (animate) {
          const dx = mx - st.x;
          const dy = my - st.y;
          const d = Math.hypot(dx, dy);
          let pull = 0;
          if (pointerNear && d < INFLUENCE) {
            pull = (1 - d / INFLUENCE) * PULL;
            const dist = Math.hypot(hm.x - mx, hm.y - my);
            if (dist < nearestD) {
              nearestD = dist;
              nearest = i;
            }
          }
          x = st.x + (hm.x - st.x) * SETTLE + (mx - st.x) * pull;
          y = st.y + (hm.y - st.y) * SETTLE + (my - st.y) * pull;
        }

        st.x = x;
        st.y = y;
        pos.push({ x, y, escaping });
        if (!animate) continue;

        // draw
        const isProminent = IDEAS[i].prominent;
        const highlighted = i === nearest && !escaping;
        ctx.font =
          isProminent || highlighted
            ? `600 ${isProminent ? 20 : 17}px "Space Grotesk", sans-serif`
            : `400 12px "Geist Mono", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (highlighted) {
          ctx.fillStyle = `rgba(59,130,246,${(0.9 * fade).toFixed(3)})`;
        } else {
          const base = isProminent ? 0.62 : 0.3;
          ctx.fillStyle = `rgba(255,255,255,${(base * fade).toFixed(3)})`;
        }
        ctx.fillText(IDEAS[i].text, x, y);
      }

      // second pass — faint threads between ideas as they cluster
      if (!reduced && pointerNear) {
        for (let i = 0; i < pos.length; i++) {
          for (let j = i + 1; j < pos.length; j++) {
            const dx = pos[i].x - pos[j].x;
            const dy = pos[i].y - pos[j].y;
            const d = Math.hypot(dx, dy);
            if (d < RING && !pos[i].escaping && !pos[j].escaping) {
              const a = (1 - d / RING) * 0.09;
              ctx.strokeStyle = `rgba(255,255,255,${a.toFixed(3)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(pos[i].x, pos[i].y);
              ctx.lineTo(pos[j].x, pos[j].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    const drawStatic = (cx: number, cy: number, rx: number, ry: number) => {
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let i = 0; i < state.length; i++) {
        const st = state[i];
        const hm = home(st, 0, cx, cy, rx, ry);
        const isProminent = IDEAS[i].prominent;
        ctx.font = isProminent
          ? `600 20px "Space Grotesk", sans-serif`
          : `400 12px "Geist Mono", monospace`;
        ctx.fillStyle = isProminent
          ? "rgba(255,255,255,0.62)"
          : "rgba(255,255,255,0.3)";
        ctx.fillText(IDEAS[i].text, hm.x, hm.y);
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      state = IDEAS.map((_, i) => newState(i));
      const cx = w / 2;
      const cy = h / 2;
      const rx = w / 2 - 70;
      const ry = h / 2 - 44;
      if (reduced) drawStatic(cx, cy, rx, ry);
    };

    const frame = () => {
      const t = performance.now() - t0;
      const cx = w / 2;
      const cy = h / 2;
      const rx = w / 2 - 70;
      const ry = h / 2 - 44;
      ctx.clearRect(0, 0, w, h);
      drawIdeas(t, cx, cy, rx, ry, true);
      raf = requestAnimationFrame(frame);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    const onPointerLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const scheduleEscape = () => {
      const idx = Math.floor(Math.random() * state.length);
      escapeRef.current = { idx, start: performance.now() - t0 };
      setEscapeIdx(idx);
      escapeTimer = setTimeout(() => {
        escapeRef.current = null;
        setEscapeIdx(-1);
        escapeTimer = setTimeout(scheduleEscape, 8000 + Math.random() * 6000);
      }, ESCAPE_MS);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    if (!reduced) {
      raf = requestAnimationFrame(frame);
      escapeTimer = setTimeout(scheduleEscape, 6000);
    }

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      if (escapeTimer) clearTimeout(escapeTimer);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <section id="field" className="scroll-mt-24">
      <div className="container-x py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            title="Idea Field"
            subtitle="Ideas I'm letting drift. Some are weeds. Some might grow."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border-subtle bg-surface-1/40">
            <div ref={wrapRef} className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 h-full w-full"
                aria-label="An interactive field of drifting ideas. Move your cursor to bend them into clusters."
              />
              <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 font-geist-mono text-[10px] tracking-[0.14em] text-faint">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                FIELD · DRIFTING
              </div>
              {escapeIdx >= 0 && (
                <div className="pointer-events-none absolute right-4 top-4 hidden font-geist-mono text-[10px] tracking-[0.14em] text-faint sm:block">
                  {IDEAS[escapeIdx].text} is escaping…
                </div>
              )}
            </div>

            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="min-h-[3.5rem]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={feedIdx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="font-geist-mono text-sm text-ink sm:text-base"
                    >
                      {FEED[feedIdx % FEED.length]}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  A quiet corner of the site. Drift your cursor through the
                  field — the ideas bend toward you, then settle back into
                  orbit. Now and then, one escapes.
                </p>
              </div>

              <Link
                href={GH_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="github ↗"
                className="group inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
              >
                <span className="underline-offset-4 group-hover:underline">
                  Wander over to GitHub
                </span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

/**
 * Play-on-hover / autoplay video section.
 *
 * Desktop (fine pointer):
 *   - Cursor on the video  → plays (moving or still)
 *   - Cursor leaves video  → pauses at the exact frame it stopped on
 *   - Cursor re-enters     → resumes from that same frame
 *
 * Mobile / tablet (coarse pointer, no hover):
 *   - Video autoplays as soon as metadata is ready and keeps looping
 *     smoothly; the pointer does not (and cannot) interrupt playback.
 *
 * Uses public/video-scrub.mp4 (every frame is a keyframe) so pause/resume
 * always lands on a clean, instantly-decodable frame.
 */

const VIDEO_SRC = "/video-scrub.mp4";
const IDLE_FRAME = 0.083;

export default function CursorGazeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useRef(false);
  const isMobileRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const [status, setStatus] = useState<"idle" | "playing" | "paused">("idle");

  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
    setStatus("playing");
  }, []);

  const pauseVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setStatus("paused");
  }, []);

  const onEnter = useCallback(() => {
    if (isMobileRef.current || reducedMotion.current) return;
    playVideo();
  }, [playVideo]);

  const onLeave = useCallback(() => {
    if (isMobileRef.current || reducedMotion.current) return;
    pauseVideo();
  }, [pauseVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mobileMq = window.matchMedia("(hover: none), (pointer: coarse)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    isMobileRef.current = mobileMq.matches;
    setIsMobile(mobileMq.matches);
    reducedMotion.current = motionMq.matches;

    const onMeta = () => {
      if (isMobileRef.current && !reducedMotion.current) {
        /* mobile: start the loop, never pause it */
        video.currentTime = 0;
        video.play().catch(() => {});
        setStatus("playing");
      } else {
        /* desktop: stay paused on the idle frame until the cursor arrives */
        video.pause();
        video.currentTime = IDLE_FRAME;
        setStatus("idle");
      }
    };

    /* react to orientation / device changes (e.g. rotating or resizing) */
    const onModeChange = () => {
      isMobileRef.current = mobileMq.matches;
      setIsMobile(mobileMq.matches);
      if (isMobileRef.current && !reducedMotion.current) {
        video.play().catch(() => {});
        setStatus("playing");
      } else if (!isMobileRef.current && !reducedMotion.current) {
        video.pause();
        video.currentTime = IDLE_FRAME;
        setStatus("idle");
      }
    };

    const onMotionChange = (e: MediaQueryListEvent) => {
      reducedMotion.current = e.matches;
      if (e.matches && !video.paused) {
        video.pause();
        setStatus("paused");
      } else if (!e.matches && isMobileRef.current) {
        video.play().catch(() => {});
        setStatus("playing");
      }
    };

    video.addEventListener("loadedmetadata", onMeta);
    mobileMq.addEventListener("change", onModeChange);
    motionMq.addEventListener("change", onMotionChange);

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      mobileMq.removeEventListener("change", onModeChange);
      motionMq.removeEventListener("change", onMotionChange);
      video.pause();
    };
  }, [playVideo]);

  const statusLabel =
    status === "playing"
      ? isMobile
        ? "PLAYING · AUTOPLAY"
        : "PLAYING"
      : status === "paused"
        ? "PAUSED"
        : "IDLE";

  return (
    <section id="gaze" className="scroll-mt-24">
      <div className="container-x py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            title="Idea Field"
            subtitle="Still figuring things out."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border-subtle bg-surface-1/40">
            {/* Video area */}
            <div
              className="relative mx-auto w-full max-w-[1100px]"
              style={{ aspectRatio: "16 / 9" }}
              onPointerEnter={onEnter}
              onPointerLeave={onLeave}
            >
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                muted
                playsInline
                loop
                preload="auto"
                disableRemotePlayback
                className="absolute inset-0 h-full w-full object-contain"
                aria-label="3D character video that plays while you hover over it"
              />

              {/* Edge vignette to blend video-black into the dark site background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#09090b]/30 via-transparent to-[#09090b]/30" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#09090b]/30 via-transparent to-[#09090b]/30" />

              {/* Status badge */}
              <div className="pointer-events-none absolute left-3 top-3 sm:left-4 sm:top-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-faint">
                <span
                  className={`h-2 w-2 rounded-full ${
                    status === "playing"
                      ? "animate-pulse bg-emerald-400"
                      : "bg-accent/60"
                  }`}
                />
                <span className="truncate">
                  GAZE · {statusLabel}
                </span>
              </div>
            </div>

            {/* Description bar */}
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  A quiet corner of the site. On desktop, hover the video and
                  the character starts moving — move the cursor away and it
                  freezes in place, ready to pick right back up. On touch
                  screens it plays on its own.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

type RowProps = { project: Project };

/**
 * A single project row. On hover: the row scales 1 -> 1.02, the thumbnail
 * brightens, and a contextual pointer-following label appears (see
 * CustomCursor + data-cursor-label). The whole display area links to the live
 * project when one exists; the footer "Source" link overrides the row label
 * with "View the mess ↗" via closest().
 */
function ProjectRow({ project }: RowProps) {
  const [active, setActive] = useState(false);

  const displayBody = (
    <>
      {/* Left: text */}
      <div className="flex max-w-md flex-col gap-4">
        <span className="meta-label">Project {project.number}</span>
        <h3 className="font-space text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {project.name}
        </h3>
        <p className="text-base leading-relaxed text-muted">
          {project.shortDescription}
        </p>
        <p className="text-sm leading-relaxed text-faint">
          {project.longDescription}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border-medium px-2.5 py-0.5 text-xs font-medium text-muted">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project.status.toLowerCase() === "built"
                  ? "bg-emerald-400/80"
                  : "bg-amber-400/80"
              }`}
            />
            {project.status}
          </span>
          {project.technologies.length > 0 && (
            <span className="meta-label">
              {project.technologies.join("  ·  ")}
            </span>
          )}
        </div>
      </div>

      {/* Right: thumbnail (brightens on hover) */}
      <div className="w-full lg:w-[48%]">
        <div
          className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border bg-surface-1 ${
            active
              ? "border-border-strong brightness-[1.1]"
              : "border-border-medium brightness-100"
          } transition-[border-color,brightness] duration-300 ease-out`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="font-space text-xl font-semibold tracking-tight text-ink/70 sm:text-2xl">
              {project.name}
            </span>
            <span className="meta-label">{project.year}</span>
          </div>
          <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5" />
        </div>
      </div>
    </>
  );

  const wrapperClass = "relative z-10 flex flex-col justify-between gap-8 px-2 py-8 sm:px-4 sm:py-10 lg:flex-row lg:py-12";

  const display = project.liveUrl ? (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={wrapperClass}
    >
      {displayBody}
    </a>
  ) : (
    <div className={wrapperClass}>{displayBody}</div>
  );

  const clickable = Boolean(project.liveUrl);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      data-cursor-label={clickable ? "Visit Project ↗" : undefined}
      style={{ ["--ptint" as string]: project.tint }}
      className={
        "group-project relative overflow-hidden " +
        (clickable
          ? "rounded-xl border border-transparent transition-[transform,border-color] duration-300 ease-out hover:scale-[1.02] hover:border-border-subtle"
          : "rounded-xl border border-transparent transition-colors duration-300 hover:border-border-subtle")
      }
    >
      <div aria-hidden="true" className="project-pattern">
        <svg
          className="projectswiggle h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 520"
          preserveAspectRatio="none"
        >
          <path
            d="M -20 90 C 160 210, 320 -30, 480 150 C 620 300, 720 110, 820 205"
            fill="none"
            strokeWidth="52"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M -20 300 C 150 170, 300 430, 470 295 C 610 205, 700 360, 820 305"
            fill="none"
            strokeWidth="68"
            strokeLinecap="round"
            opacity="0.28"
          />
          <path
            d="M -20 480 C 200 360, 390 530, 570 410 C 690 345, 750 455, 820 435"
            fill="none"
            strokeWidth="82"
            strokeLinecap="round"
            opacity="0.22"
          />
        </svg>
      </div>

      {display}

      {/* Footer row: actions */}
      <div className="relative z-10 flex items-center gap-6 border-t border-border-subtle px-2 py-4 sm:px-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink"
          >
            <span className="underline-offset-4 group-hover:underline">
              Visit Project
            </span>
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="View the mess ↗"
            className="group inline-flex items-center gap-1.5 text-sm text-ink/60 transition-colors duration-200 hover:text-ink"
          >
            <span className="underline-offset-4 group-hover:underline">
              Source
            </span>
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        )}
        {!project.liveUrl && (
          <span className="inline-flex items-center gap-1.5 text-sm text-faint">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400/70" />
            still being built
          </span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="container-x py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            title="Things I've Built"
            subtitle="Some ideas survived long enough to become real."
          />
        </Reveal>
        <div className="mt-4 flex flex-col">
          {projects.map((p) => (
            <Reveal key={p.id}>
              <ProjectRow project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

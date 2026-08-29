"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GH_URL } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

/**
 * About Me — the person behind the playful homepage. Quiet, spacious.
 */
export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="container-x max-w-4xl py-14 sm:py-20">
        <Reveal>
          <SectionHeading title="About Me" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-body sm:text-lg">
            <p>
              The name is Arav. Arav Patel. I&apos;m a mechanical engineering undergrad
              at SVNIT, but I&apos;ve never been particularly interested in staying
              inside one box. Software caught my attention, then products, then systems,
              then whatever interesting piece of technology happened to appear next.
            </p>
            <p>
              I like learning things before I have a perfectly good reason to learn them.
              Sometimes that ends with twenty tabs open. Sometimes it becomes a{" "}
              <Link
                href="#projects"
                className="text-ink underline underline-offset-4 transition-colors hover:text-muted"
              >
                project
              </Link>
              .
            </p>
            <p>
              Right now, I&apos;m still figuring out what I want to become — developer,
              engineer, builder, founder, or something I haven&apos;t found yet.
            </p>
            <p className="text-ink">I think that&apos;s the fun part.</p>
            <p>For now, I&apos;m exploring.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href={GH_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="github ↗"
              className="group inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
            >
              <span className="underline-offset-4 group-hover:underline">GitHub</span>
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <span className="meta-label">SVNIT · Mechanical Engineering</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

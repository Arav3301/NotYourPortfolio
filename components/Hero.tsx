"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { GH_URL } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero({ started }: { started: boolean }) {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="container-x flex flex-1 flex-col justify-center py-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate={started ? "show" : "hidden"}
        >
          <motion.p
            variants={item}
            className="meta-label mb-6"
          >
            An explorin&apos; student
          </motion.p>

          <motion.h1
            variants={item}
            className="font-space text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px]"
          >
            Hey, I&apos;m ARAV.
            <br />
            I wander into ideas.
            <br />
            <span className="text-muted">Sometimes they become software.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            The name is Arav. Arav Patel. A mechanical engineering undergrad with an
            unreasonable curiosity for software, systems, and whatever technology sends me
            down the next rabbit hole. I don&apos;t have one lane yet. That&apos;s kind of
            the point.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
          >
            <a
              href="#projects"
              data-cursor-label="go. ↓"
              className="group inline-flex items-center gap-3 text-base font-medium text-ink sm:text-lg"
            >
              <span>Explore what I&apos;ve built</span>
              <ArrowDown
                size={18}
                strokeWidth={1.5}
                className="text-muted transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>

            <span className="hidden h-5 w-px bg-border-medium sm:block" />

            <Link
              href={GH_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="github ↗"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-surface-3 transition-colors duration-150 ease-in-out hover:bg-accent"
              aria-label="GitHub profile"
            >
              <GitHubIcon
                width={17}
                height={17}
                strokeWidth={1.5}
                className="text-ink transition-transform duration-150 ease-in-out group-hover:rotate-[10deg]"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="container-x pb-7 pt-2 sm:pb-9">
        <div className="flex items-center justify-end gap-4 border-t border-border-subtle pt-4 sm:justify-between">
          <span className="meta-label hidden sm:block">scroll to explore</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/80" />
            <span className="meta-label">
              currently wandering around the internet
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

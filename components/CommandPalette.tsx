"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  House,
  FolderOpen,
  NotebookPen,
  User,
  Mail,
  Copy,
  Sparkles,
  Search,
  ArrowUpRight,
} from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { EMAIL, GH_URL } from "@/lib/data";

type Command = {
  id: string;
  label: string;
  icon: React.ReactNode;
  hint?: string;
  action: () => void;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CommandPalette({ open, onOpenChange }: Props) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* ignore */
    }
  }, []);

  const commands: Command[] = [
    { id: "home", label: "Home", icon: <House size={16} strokeWidth={1.5} />, action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { id: "projects", label: "Projects", icon: <FolderOpen size={16} strokeWidth={1.5} />, action: () => scrollTo("projects") },
    { id: "log", label: "Explorer's Log", icon: <NotebookPen size={16} strokeWidth={1.5} />, action: () => scrollTo("log") },
    { id: "github", label: "GitHub", icon: <GitHubIcon width={16} height={16} strokeWidth={1.5} />, hint: GH_URL.replace("https://", ""), action: () => window.open(GH_URL, "_blank", "noopener,noreferrer") },
    { id: "about", label: "About", icon: <User size={16} strokeWidth={1.5} />, action: () => scrollTo("about") },
    { id: "email", label: "Email Arav", icon: <Mail size={16} strokeWidth={1.5} />, hint: EMAIL, action: () => window.open(`mailto:${EMAIL}`) },
    { id: "copy", label: "Copy Email", icon: <Copy size={16} strokeWidth={1.5} />, action: copyEmail },
    { id: "who", label: "Who is ARAV?", icon: <Sparkles size={16} strokeWidth={1.5} />, action: () => scrollTo("myself") },
  ];

  // Keyboard: Ctrl/Cmd + K to open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const filtered = query
    ? commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  // Reset query + selection each time the palette opens.
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    if (open) {
      setQuery("");
      setActive(0);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [open]);

  // Focus the input on open
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 20);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.action();
      onOpenChange(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center pt-[18vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-[min(92vw,520px)] overflow-hidden rounded-xl border border-border-strong bg-surface-2 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border-subtle px-4">
              <Search size={16} strokeWidth={1.5} className="text-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Type a command…"
                className="h-12 w-full bg-transparent text-sm text-ink placeholder:text-faint focus:outline-none"
              />
              <kbd className="font-geist-mono text-[10px] text-faint">ESC</kbd>
            </div>

            <div ref={listRef} className="max-h-[320px] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-faint">No commands found.</p>
              )}
              {filtered.map((c, i) => (
                <button
                  key={c.id}
                  data-index={i}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    c.action();
                    onOpenChange(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-100 ${
                    active === i ? "bg-surface-3 text-ink" : "text-muted"
                  }`}
                >
                  <span className={active === i ? "text-accent" : "text-faint"}>{c.icon}</span>
                  <span className="flex-1">{c.label}</span>
                  {c.hint && (
                    <span className="flex items-center gap-1 font-geist-mono text-[10px] text-faint">
                      {c.hint}
                      <ArrowUpRight size={11} strokeWidth={1.5} />
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 border-t border-border-subtle px-4 py-2.5">
              <span className="flex items-center gap-1 font-geist-mono text-[10px] text-faint">
                <kbd className="rounded border border-border-medium px-1">↑</kbd>
                <kbd className="rounded border border-border-medium px-1">↓</kbd> navigate
              </span>
              <span className="flex items-center gap-1 font-geist-mono text-[10px] text-faint">
                <kbd className="rounded border border-border-medium px-1.5">↵</kbd> select
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

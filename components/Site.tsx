"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Myself from "@/components/Myself";
import ExplorerLog from "@/components/ExplorerLog";
import Skills from "@/components/Skills";
import Field from "@/components/Field";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ExplorerMarker from "@/components/ExplorerMarker";
import CommandPalette from "@/components/CommandPalette";
import EasterEgg from "@/components/EasterEgg";

export default function Site() {
  const [loaded, setLoaded] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
      <EasterEgg />
      <Navbar onOpenCommand={() => setCmdOpen(true)} />
      <main>
        <Hero started={loaded} />
        <Projects />
        <Myself />
        <ExplorerLog />
        <Skills />
        <Field />
        <About />
        <Contact />
      </main>
      <Footer />
      <ExplorerMarker />
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
    </MotionConfig>
  );
}

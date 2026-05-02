"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from "../hooks/useLenis";
import { useScrollAnimations } from "../hooks/useScrollAnimations";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import JourneySection from "../sections/JourneySection";
import SkillsSection from "../sections/SkillsSection";
import WorkSection from "../sections/WorkSection";
import CursorFollower from "./ui/CursorFollower";
import ScrollProgress from "./ui/ScrollProgress";

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const rootRef = useScrollAnimations();
  useLenis();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div ref={rootRef} className="portfolio-root relative bg-background text-foreground">
      <ScrollProgress />
      <CursorFollower />

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[#07080d]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
          >
            <motion.div
              className="heading-font text-lg tracking-[0.36em] text-white/85 uppercase"
              animate={{ opacity: [0.4, 1, 0.5], y: [8, 0, -2] }}
              transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
            >
              Loading Experience
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="relative z-10">
        <HeroSection />
        <WorkSection />
        <SkillsSection />
        <AboutSection />
        <JourneySection />
        <ContactSection />
      </main>
    </div>
  );
}

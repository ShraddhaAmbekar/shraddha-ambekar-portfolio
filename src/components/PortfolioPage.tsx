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
    const timer = window.setTimeout(() => setLoading(false), 3000);
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
      className="fixed inset-0 z-[120] overflow-hidden bg-[#07080d]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="h-[38rem] w-[38rem] rounded-full bg-cyan-400/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      {/* Main Loader */}
      <div className="relative flex h-full flex-col items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          className="absolute h-52 w-52 rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner Ring */}
        <motion.div
          className="absolute h-36 w-36 rounded-full border border-cyan-300/20"
          animate={{ rotate: -360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: [0.96, 1, 0.96],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <h1 className="heading-font text-6xl tracking-[0.35em] text-white uppercase">
            SA
          </h1>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="mt-12 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.p
            className="heading-font text-xs tracking-[0.55em] text-white/55 uppercase"
            animate={{
              opacity: [0.35, 1, 0.35],
              letterSpacing: [
                "0.45em",
                "0.6em",
                "0.45em",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Crafting Digital Experience
          </motion.p>
        </motion.div>

        {/* Smooth Bottom Line */}
        <div className="absolute bottom-0 left-0 h-[1px] w-full overflow-hidden bg-white/5">
          <motion.div
            className="h-full w-1/4 bg-white/80"
            animate={{
              x: ["-120%", "520%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
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

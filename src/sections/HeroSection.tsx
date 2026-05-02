"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import LazyHeroScene from "../components/scene/LazyHeroScene";
import MagneticButton from "../components/ui/MagneticButton";

export default function HeroSection() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setPointer({ x, y });
    };

    const onScroll = () => {
      const raw = window.scrollY / window.innerHeight;
      setScrollProgress(Math.min(1, raw));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const heroTransform = useMemo(
    () => ({
      transform: `scale(${1 - scrollProgress * 0.12}) rotateX(${scrollProgress * 12}deg)`,
      opacity: 1 - scrollProgress * 0.65,
    }),
    [scrollProgress],
  );

  return (
    <section id="hero" className="hero-section hero-gradient relative min-h-screen overflow-hidden px-5 py-8 md:px-10">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-25" />
      <div className="floating-bg floating-bg-1" />
      <div className="floating-bg floating-bg-2" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between" style={heroTransform}>
        <div className="glass-panel inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs tracking-[0.24em] text-white/70 uppercase">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#00ffd0]" />
          AVAILABLE FOR PREMIUM COLLABORATIONS
        </div>

        <div className="grid items-end gap-8 pt-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="hero-copy space-y-8">
            <h1 className="heading-font hero-title max-w-3xl font-semibold text-white">
              Crafting Immersive
              <br />
              Digital Experiences
            </h1>
            <p className="hero-sub max-w-2xl text-base text-white/75 md:text-xl">
              I design and build motion-rich interfaces that combine cinematic storytelling, clear product thinking, and
              smooth engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton label="View Selected Work" href="#work" />
              <MagneticButton label="Start a Project" href="#contact" className="bg-white/8" />
            </div>
          </div>

          <motion.div
            className="hero-panel glass-panel relative h-[48vh] min-h-[360px] overflow-hidden rounded-[2.2rem] border border-white/15"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <LazyHeroScene scrollProgress={scrollProgress} pointer={pointer} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

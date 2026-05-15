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

      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-between" style={heroTransform}>
        <div className="glass-panel inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs tracking-[0.24em] text-white/70 uppercase">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#00ffd0]" />
          AVAILABLE FOR PREMIUM COLLABORATIONS
        </div>

        <div className="items-center grid gap-7 pt-0 lg:grid-cols-[1.17fr_0.85fr]">
          <div className="hero-copy space-y-4 max-w-3xl">
            <h1 className="heading-font hero-title max-w-3xl font-semibold text-white leading-tight">
              Building Modern, Fast & Scalable Web Applications
            </h1>

            <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Frontend Developer • React • Angular • UI Engineer
            </span>

            <p className="hero-sub max-w-2xl text-base text-white/75 md:text-xl">
              I am Shraddha Ambekar, a frontend developer who specializes in React, Angular, Tailwind CSS and modern frontend architecture to build responsive, fast-loading
              and visually engaging digital experiences optimized for performance and scalability.
            </p>
            <div className="flex flex-wrap gap-4">

              <MagneticButton label="View My Work" href="#work" />
              <MagneticButton label="Hire Me" href="#contact" className="bg-white/8" />
              <div className="flex gap-6 text-xs text-white/60 pt-4">
                <span>✔ 2+ Years Experience</span>
                <span>✔ Freelance Projects Delivered</span>
                <span>✔ UI/Performance Focused</span>
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/hero-5.png" alt="hero" className="w-full h-full object-cover" />
          </div>
          <motion.div
          // className="hero-panel glass-panel relative h-[48vh] min-h-[360px] overflow-hidden rounded-[2.2rem] border border-white/15"
          // initial={{ opacity: 0, y: 28 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: 0.2, duration: 0.9 }}
          >

          </motion.div>
        </div>
      </div>
    </section>
  );
}

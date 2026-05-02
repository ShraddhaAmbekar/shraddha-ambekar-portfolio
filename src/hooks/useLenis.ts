"use client";

import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    let rafId = 0;
    let active = true;
    let lenis:
      | {
          raf: (time: number) => void;
          destroy: () => void;
          on: (event: "scroll", cb: (...args: unknown[]) => void) => unknown;
        }
      | null = null;

    const setup = async () => {
      const Lenis = (await import("lenis")).default;
      if (!active) {
        return;
      }

      lenis = new Lenis({
        duration: 1.12,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.05,
        lerp: 0.09,
      });

      lenis.on("scroll", () => {
        window.dispatchEvent(new Event("lenis-scroll"));
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    void setup();

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);
}

"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimations() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    const run = async () => {
      const [{ default: gsap }, { ScrollTrigger }, { default: SplitType }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("split-type"),
      ]);
      if (!active || !rootRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const split = new SplitType(".hero-title", { types: "lines,words" });
        gsap.from(split.words, {
          yPercent: 110,
          opacity: 0,
          stagger: 0.04,
          duration: 1.1,
          ease: "power4.out",
        });

        gsap.from(".hero-sub", {
          y: 28,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "+=120%",
            scrub: 1.1,
            pin: true,
          },
        })
          .to(".hero-copy", { y: -80, opacity: 0.36, ease: "none" }, 0)
          .to(".hero-panel", { scale: 0.84, rotationX: 8, y: 46, opacity: 0.55, ease: "none" }, 0)
          .to(".hero-grid", { opacity: 0.08, ease: "none" }, 0);

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 56,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
            },
          });
        });

        const workTrack = document.querySelector<HTMLElement>(".work-track");
        const workPin = document.querySelector<HTMLElement>(".work-pin");
        if (workTrack && workPin) {
          const distance = Math.max(0, workTrack.scrollWidth - window.innerWidth);
          gsap.to(workTrack, {
            x: () => -distance,
            ease: "none",
            scrollTrigger: {
              trigger: workPin,
              start: "top top",
              end: () => `+=${distance + window.innerHeight * 0.8}`,
              pin: true,
              scrub: 1,
            },
          });
        }

        gsap.utils.toArray<HTMLElement>(".counter-value").forEach((counter) => {
          const target = Number(counter.dataset.counter || "0");
          const state = { value: 0 };
          gsap.to(state, {
            value: target,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 84%",
              once: true,
            },
            onUpdate: () => {
              counter.textContent = `${Math.round(state.value)}${target === 100 ? "%" : "+"}`;
            },
          });
        });
      }, rootRef);

      const onLenisScroll = () => ScrollTrigger.update();
      window.addEventListener("lenis-scroll", onLenisScroll);

      cleanup = () => {
        window.removeEventListener("lenis-scroll", onLenisScroll);
        ctx.revert();
      };
    };

    void run();

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return rootRef;
}

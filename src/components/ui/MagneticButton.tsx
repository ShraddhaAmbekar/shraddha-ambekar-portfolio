"use client";

import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { useRef } from "react";

type MagneticButtonProps = {
  label: string;
  href: string;
  className?: string;
};

export default function MagneticButton({ label, href, className }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const element = buttonRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;
    element.style.transform = `translate(${x * 0.12}px, ${y * 0.2}px)`;
  };

  const handleLeave = () => {
    const element = buttonRef.current;
    if (!element) return;
    element.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`cta-button inline-flex items-center justify-center rounded-2xl px-7 py-3 font-semibold tracking-wide text-white transition-transform duration-300 ${className ?? ""}`}
    >
      {label}
    </motion.a>
  );
}

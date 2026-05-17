"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type MagneticButtonProps = {
  label: string;
  href: string;
  className?: string;
};

export default function MagneticButton({
  label,
  href,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        href={href}
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`cta-button inline-flex items-center justify-center rounded-2xl px-7 py-3 font-semibold tracking-wide text-white transition-transform hover:scale-105 active:scale-95 ${className ?? ""}`}
      >
        {label}
      </Link>
    </motion.div>
  );
}
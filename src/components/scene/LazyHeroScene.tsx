"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-[2rem] bg-white/5" />,
});

type LazyHeroSceneProps = {
  scrollProgress: number;
  pointer: { x: number; y: number };
};

export default function LazyHeroScene({ scrollProgress, pointer }: LazyHeroSceneProps) {
  return <HeroScene scrollProgress={scrollProgress} pointer={pointer} />;
}

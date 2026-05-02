"use client";

import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

type HeroSceneProps = {
  scrollProgress: number;
  pointer: { x: number; y: number };
};

function Orb({ scrollProgress, pointer }: HeroSceneProps) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!ref.current) return;

    ref.current.rotation.x = t * 0.15 + pointer.y * 0.3;
    ref.current.rotation.y = t * 0.22 + pointer.x * 0.4;
    ref.current.position.y = Math.sin(t * 0.7) * 0.22 - scrollProgress * 0.8;
    ref.current.scale.setScalar(1 - scrollProgress * 0.22);
  });

  return (
    <Float speed={1.2} floatIntensity={1.3} rotationIntensity={0.8}>
      <Sphere ref={ref} args={[1.2, 96, 96]}>
        <MeshDistortMaterial
          color="#8a7cff"
          distort={0.35}
          speed={2}
          roughness={0.12}
          metalness={0.75}
          emissive="#1b9cff"
          emissiveIntensity={0.45}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroScene({ scrollProgress, pointer }: HeroSceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 3.6], fov: 42 }} dpr={[1, 1.5]} className="hero-canvas">
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 2, 4]} intensity={1.1} />
      <pointLight position={[-2.4, -1.5, 1.6]} color="#00ffd0" intensity={18} distance={7} />
      <Orb scrollProgress={scrollProgress} pointer={pointer} />
    </Canvas>
  );
}

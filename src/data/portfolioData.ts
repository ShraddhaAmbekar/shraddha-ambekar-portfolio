export type Project = {
  title: string;
  description: string;
  stack: string[];
  tone: string;
};

export const projects: Project[] = [
  {
    title: "Nova Commerce",
    description:
      "A conversion-focused luxury commerce platform with cinematic product storytelling and intelligent personalization.",
    stack: ["Next.js", "TypeScript", "GSAP", "Stripe"],
    tone: "from-[#7f5bff]/40 via-[#3b82f6]/30 to-[#00ffe1]/30",
  },
  {
    title: "Pulse Finance",
    description:
      "An immersive analytics dashboard where complex financial flows become elegant and intuitive interactions.",
    stack: ["React", "D3", "Framer Motion", "Node.js"],
    tone: "from-[#8a7cff]/45 via-[#22d3ee]/30 to-[#0ea5e9]/30",
  },
  {
    title: "Aether Studio",
    description:
      "A digital experience for a creative agency blending 3D narratives, rich motion, and editorial design rhythm.",
    stack: ["Next.js", "R3F", "GSAP", "Sanity"],
    tone: "from-[#4f46e5]/40 via-[#9333ea]/35 to-[#06b6d4]/25",
  },
  {
    title: "Orbit Health",
    description:
      "A trustworthy and human healthcare portal crafted with micro-interactions and clear, calming information architecture.",
    stack: ["TypeScript", "Tailwind", "Motion", "Prisma"],
    tone: "from-[#2563eb]/35 via-[#6366f1]/35 to-[#22d3ee]/25",
  },
];

export const skillGroups = [
  {
    title: "Creative Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Motion & Storytelling",
    skills: ["GSAP Timelines", "ScrollTrigger", "SplitType", "Parallax Design", "Micro Interactions"],
  },
  {
    title: "3D & Visual Systems",
    skills: ["React Three Fiber", "Drei", "WebGL Basics", "Shader Thinking", "Performance Tuning"],
  },
];

export const timeline = [
  {
    year: "2022",
    title: "Started Product Design + Frontend",
    text: "Moved from visual experiments to production-ready interfaces with strong UX and interaction patterns.",
  },
  {
    year: "2023",
    title: "Shipped First Motion-Driven Product",
    text: "Led a full redesign with animation narratives that improved dwell time and brand perception.",
  },
  {
    year: "2024",
    title: "Focused on Premium Web Experiences",
    text: "Specialized in cinematic scroll systems, 3D integration, and high-end digital storytelling.",
  },
  {
    year: "Now",
    title: "Building Future-Ready Interfaces",
    text: "Crafting emotionally engaging products where design, performance, and technology feel seamless.",
  },
];

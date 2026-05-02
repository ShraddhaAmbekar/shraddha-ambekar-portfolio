export type Project = {
  title: string;
  description: string;
  stack: string[];
  tone: string;
};

export const projects: Project[] = [
  {
    title: "Travel U",
    description:
      "A modern travel booking platform with dynamic tour packages, daily itineraries, and interactive image sliders for a smooth user experience.",
    stack: ["React.js", "CSS", "Bootstrap"],
    tone: "from-[#3b82f6]/40 via-[#06b6d4]/30 to-[#22d3ee]/30",
  },
  {
    title: "Printing Service Website",
    description:
      "A responsive frontend for an online printing service with clean product listings and seamless backend integration.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    tone: "from-[#6366f1]/40 via-[#8b5cf6]/30 to-[#a78bfa]/30",
  },
  {
    title: "E-Commerce Web App",
    description:
      "A feature-rich shopping platform with product search, filtering, cart management, and real-time updates using REST APIs.",
    stack: ["Angular", "Angular Material", "Tailwind CSS"],
    tone: "from-[#0ea5e9]/40 via-[#22d3ee]/30 to-[#67e8f9]/30",
  },
  {
    title: "Hotel Management App",
    description:
      "A hotel booking and management system with real-time room tracking, admin controls, and mobile-friendly UI.",
    stack: ["Angular", "Bootstrap", "Json-server"],
    tone: "from-[#2563eb]/40 via-[#4f46e5]/30 to-[#6366f1]/30",
  },
  {
    title: "School Website",
    description:
      "A responsive school website displaying information, announcements, and essential resources with a clean and accessible design.",
    stack: ["HTML", "CSS", "JavaScript"],
    tone: "from-[#16a34a]/40 via-[#4ade80]/30 to-[#22c55e]/30",
  },
  {
    title: "OpsMind AI Website",
    description:
      "A modern AI-focused website showcasing tools and features with a clean UI and engaging user experience.",
    stack: ["Next.js", "Tailwind CSS"],
    tone: "from-[#9333ea]/40 via-[#c084fc]/30 to-[#e879f9]/30",
  },

];

export const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Angular", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "Bootstrap", "CSS", "Responsive Design"],
  },
  {
    title: "Advanced & Tools",
    skills: ["REST API Integration", "GSAP", "Framer Motion", "Basic Three.js"],
  },
];

export const timeline = [
  {
    // year: "2022",
    title: "Started Web Development",
    text: "Learned HTML, CSS, and JavaScript while building basic responsive websites.",
  },
  {
    // year: "2023",
    title: "Built Real Projects",
    text: "Developed projects like Travel U and Printing Website with real-world UI and functionality.",
  },
  {
    // year: "2024",
    title: "Advanced Frontend Development",
    text: "Worked with Angular, React, and API integrations to build scalable applications.",
  },
  {
    // year: "Now",
    title: "Building Modern Web Experiences",
    text: "Focused on creating fast, responsive, and user-friendly web applications for real users.",
  },
];

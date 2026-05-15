import { title } from "process";
import { text } from "stream/consumers";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  tone: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Tours and Travel Website",
    description:
      "A modern travel website with dynamic tour packages, detailed itineraries, and interactive image sliders. Focused on delivering a smooth and engaging user experience with responsive design and optimized UI flow.",
    stack: ["HTML","CSS", "JavaScript", "React.js", "CSS", "Bootstrap"],
    tone: "from-[#3b82f6]/40 via-[#06b6d4]/30 to-[#22d3ee]/30",
    highlights: [
      "Dynamic tour package UI",
      "Interactive sliders and image galleries",
      "Fully responsive across devices",
      "Optimized user navigation flow",
    ],
  },

  {
    title: "Printing Service Website",
    description:
      "A responsive frontend web application for an online printing service featuring structured product listings, service categories, and seamless backend integration for order handling.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    tone: "from-[#ec4899]/40 via-[#f472b6]/30 to-[#f9a8d4]/30",
    highlights: [
      "Service-based product catalog UI",
      "Clean and minimal layout design",
      "Backend-ready architecture",
      "Mobile-first responsive design",
    ],
  },


  {
    title: "Travel Booking Platform",
    description:
      "A structured travel booking interface named as Travel-U displaying tour packages, itineraries, and destination details with a clean card-based layout and user-focused booking flow design.",
    stack: ["React.js", "Tailwind CSS"],
    tone: "from-[#10b981]/40 via-[#14b8a6]/30 to-[#2dd4bf]/30",
    highlights: [
      "Card-based package system",
      "Clean booking flow UI",
      "Reusable React components",
      "Optimized layout structure",
    ],
  },

  {
    title: "Play School Website",
    description:
      "A dedicated website for a play school named as Humming Kitez, featuring child-friendly design, activity showcases, and easy access to information for parents.",
    stack: ["HTML", "CSS", "js", "React", "Bootstrap"],
    tone: "from-[#ef4444]/40 via-[#f97316]/30 to-[#f59e0b]/30",
    highlights: [
      "Child-friendly UI design",
      "Activity gallery sections",
      "Parent-focused information layout",
      "Bright and engaging visual style",
      "SEO friendly"
    ],
  },

  {
    title: "Fashion and Beauty Website",
    description:
      "A premium fashion and beauty website named as glamorlite designed to highlight branding, aesthetics, and product showcase with a modern luxury UI experience.",
    stack: ["HTML","CSS","JavaScript", "React.js", "Tailwind CSS"],
    tone: "from-[#8b5cf6]/40 via-[#a78bfa]/30 to-[#c4b5fd]/30",
    highlights: [
      "Luxury-focused UI design",
      "Brand-centric visual storytelling",
      "Interactive product showcase",
      "Modern and elegant layout structure",  
    ],
  },

  {
    title: "My Restaurant Website",
    description:
      "A responsive restaurant website showcasing menu items, food categories, and dining services with a clean and appetizing UI presentation.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    tone: "from-[#f97316]/40 via-[#fb923c]/30 to-[#fdba74]/30",
    highlights: [
      "Digital menu presentation system",
      "Category-based food sections",
      "Restaurant branding UI",
      "Mobile-friendly layout",
    ],
  },

  {
    title: "Q-commerce Website",
    description:
      "A quick commerce (q-commerce) website designed for fast and efficient online shopping, featuring streamlined product listings, easy navigation, and a focus on speed and convenience.",
    stack: ["React.js", "Tailwind CSS"],
    tone: "from-[#8b5cf6]/40 via-[#a78bfa]/30 to-[#c4b5fd]/30",
    highlights: [
      "Streamlined product listings",
      "Easy navigation system",
      "Focus on speed and convenience",
      "Modern and responsive UI",
      "Payment integration"
    ],
  }
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
  {
    title: "Digital marketing",
    skills: ["SEO", "google search console", "keyword research", "content creation"],
  }
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

  {
    title:"Continuous Learning & Growth",
    text:"Committed to staying updated with the latest frontend technologies and best practices to deliver high-quality digital experiences.",
  }
];

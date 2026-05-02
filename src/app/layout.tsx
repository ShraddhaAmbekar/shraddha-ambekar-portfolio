import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shraddha Ambekar | Creative Frontend Developer",
  description:
    "A premium, animation-forward portfolio showcasing frontend craft, 3D visuals, and modern UI storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<footer className="mt-32 border-t border-white/10 py-10 text-center text-white/60">
  
  <p className="text-sm">
    © 2026 Shraddha Ambekar. All rights reserved.
  </p>

  <div className="mt-4 flex justify-center gap-6">
    <a href="#">GitHub</a>
    <a href="#">LinkedIn</a>
    <a href="#">Email</a>
  </div>

</footer></body>
    </html>
  );
}

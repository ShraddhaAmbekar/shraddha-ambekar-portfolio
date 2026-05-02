"use client";

import MagneticButton from "../components/ui/MagneticButton";

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-24 pt-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[#8a7cff]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#00ffd0]/20 blur-3xl" />
          <p className="section-eyebrow">LET&apos;S BUILD SOMETHING UNFORGETTABLE</p>
          <h2 className="heading-font mt-4 max-w-3xl text-4xl leading-tight text-white md:text-6xl">
            Ready to turn your idea into a premium digital experience?
          </h2>
          <p className="mt-5 max-w-2xl text-white/75">
            If you care about performance, emotion, and detail in every frame, we should talk.
          </p>
          <div className="mt-8">
            <MagneticButton label="Book a Discovery Call" href="mailto:hello@shraddha.dev" />
          </div>
        </div>
      </div>
    </section>
  );
}

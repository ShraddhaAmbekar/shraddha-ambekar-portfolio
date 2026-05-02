"use client";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell section-dark py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div>
          <p className="section-eyebrow">ABOUT</p>
          <h2 className="section-title heading-font mt-3 text-white">Designing Emotion Into Interfaces</h2>
          <p className="about-line mt-6 max-w-2xl text-lg leading-relaxed text-white/75" data-reveal>
            I build products where each interaction has purpose. My work blends strategy, typography, motion, and code to
            transform simple pages into memorable journeys.
          </p>
          <p className="about-line mt-4 max-w-2xl text-lg leading-relaxed text-white/75" data-reveal>
            From first scroll to final click, I focus on rhythm, clarity, and delight so users feel guided, engaged, and
            inspired.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
          <div className="glass-panel rounded-3xl p-6 text-center">
            <p className="counter-value heading-font text-5xl text-white" data-counter="24">
              0
            </p>
            <p className="mt-2 text-sm tracking-wide text-white/70 uppercase">Projects Crafted</p>
          </div>
          <div className="glass-panel rounded-3xl p-6 text-center">
            <p className="counter-value heading-font text-5xl text-white" data-counter="4">
              0
            </p>
            <p className="mt-2 text-sm tracking-wide text-white/70 uppercase">Years of Experience</p>
          </div>
          <div className="glass-panel rounded-3xl p-6 text-center">
            <p className="counter-value heading-font text-5xl text-white" data-counter="100">
              0
            </p>
            <p className="mt-2 text-sm tracking-wide text-white/70 uppercase">Obsessed With Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
}

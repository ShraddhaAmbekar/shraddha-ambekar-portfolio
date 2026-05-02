"use client";

import { timeline } from "../data/portfolioData";

export default function JourneySection() {
  return (
    <section id="journey" className="section-shell py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="section-eyebrow">EXPERIENCE</p>
        <h2 className="section-title heading-font mt-3 text-white">Journey Through Craft</h2>

        <div className="mt-12 space-y-5">
          {timeline.map((item) => (
            <article key={item.title} data-reveal className="timeline-item glass-panel rounded-3xl p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="heading-font text-2xl text-white">{item.title}</h3>
                <span className="rounded-full border border-cyan-200/30 px-3 py-1 text-xs tracking-[0.15em] text-cyan-100/70 uppercase">
                  {/* {item.year} */}
                </span>
              </div>
              <p className="mt-4 max-w-3xl text-white/75">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

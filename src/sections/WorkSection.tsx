"use client";

import { projects } from "../data/portfolioData";

export default function WorkSection() {
  return (
    <section id="work" className="section-shell section-dark py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="section-eyebrow">SELECTED WORK</p>

        <h2 className="section-title heading-font mt-3 text-white">
          Stories That Move People
        </h2>
      </div>

      <div className="work-pin relative mt-14 h-[70vh] overflow-hidden">
        <div className="work-track flex h-full items-stretch gap-6 px-5 md:px-10">
          {[...projects.slice(0, -1), "view-all"].map((project) => (
            <article
              key={typeof project === "string" ? project : project.title}
              className="project-card project-panel min-w-[82vw] md:min-w-[48vw]"
              data-reveal
            >
              {typeof project === "string" ? (
                <div className="flex h-full flex-col items-center justify-center rounded-[1.25rem] border border-white/10 bg-#1d4ed8 text-center">
                  <h3 className="heading-font text-4xl text-white">
                    View All
                  </h3>

                  <p className="mt-3 text-white/60">
                    Explore more selected projects
                  </p>

                  <button className="mt-6 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white/10">
                    Open Projects
                  </button>
                </div>
              ) : (
                <>
                  <div
                    className={`absolute inset-0 -z-10 rounded-[1.25rem] bg-gradient-to-br ${project.tone}`}
                  />

                  <div className="space-y-5">
                    <h3 className="heading-font text-3xl text-white">
                      {project.title}
                    </h3>

                    <p className="max-w-xl text-white/75">
                      {project.description}
                    </p>


                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item, index) => (
                        <span
                          key={`${item}-${index}`}
                          className="rounded-full border border-white/20 bg-white/8 px-3 py-1 text-xs tracking-wide text-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>


                    {project.highlights && (
                      <ul className="mt-4 space-y-1 text-sm text-white/70">
                        {project.highlights.map((point, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-white/60">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button className="rounded-full bg-white/10 px-4 py-2 text-xs text-white hover:bg-white/20 transition">
                      Live Demo
                    </button>

                    <button className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 hover:bg-white/10 transition">
                      View Code
                    </button>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

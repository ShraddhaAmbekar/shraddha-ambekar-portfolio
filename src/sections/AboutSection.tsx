"use client";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell section-dark py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        
        <div>
          <p className="section-eyebrow">ABOUT ME</p>

          <h2 className="section-title heading-font mt-3 text-white">
            Turning Ideas Into Immersive Products
          </h2>

          <p className="about-line mt-6 max-w-2xl text-lg leading-relaxed text-white/75" data-reveal>
            I’m Shraddha Ambekar, a frontend-focused web developer with hands-on experience in building responsive and
            user-friendly applications using React, Angular, and modern web technologies.
          </p>

          <p className="about-line mt-4 max-w-2xl text-lg leading-relaxed text-white/75" data-reveal>
            I enjoy transforming designs into clean, functional interfaces and focus on performance, usability, and
            scalability. I’m continuously learning and improving my skills to build better digital experiences.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
          
          <div className="glass-panel rounded-3xl p-6 text-center">
            <p className="counter-value heading-font text-5xl text-white" data-counter="20">
              0
            </p>
            <p className="mt-2 text-sm tracking-wide text-white/70 uppercase">
              Projects Completed
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-6 text-center">
            <p className="counter-value heading-font text-5xl text-white" data-counter="2">
              0
            </p>
            <p className="mt-2 text-sm tracking-wide text-white/70 uppercase">
              Years of Learning
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-6 text-center">
            <p className="counter-value heading-font text-5xl text-white" data-counter="100">
              0
            </p>
            <p className="mt-2 text-sm tracking-wide text-white/70 uppercase">
              Commitment to Quality
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

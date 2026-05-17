import Link from "next/link";
import BackButton from "../BackButton";

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-24 text-white">
         <div className="fixed top-6 left-6 z-50">
        <BackButton />
      </div>
      <div className="mx-auto max-w-6xl">

        {/* HERO INTRO */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold heading-font">
            About Me
          </h1>

          <p className="mt-6 text-white/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            I am <span className="text-cyan-400 font-medium">Shraddha Ambekar</span>,
            a passionate Frontend Developer focused on building modern,
            scalable, and high-performance web applications using
            React, Next.js, Angular, and Tailwind CSS.
          </p>
        </div>

        {/* PERSONAL SUMMARY */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Who I Am</h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            I am a self-driven developer who enjoys solving real-world problems
            through clean and efficient code. I started my journey with basic
            HTML and CSS, and gradually moved into modern frameworks like React
            and Angular.
            <br /><br />
            I enjoy building user-friendly interfaces and focusing on performance,
            accessibility, and responsive design. I believe good UI is not just
            about looks, but also about usability and smooth experience.
          </p>
        </div>

        {/* STATS */}
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {[
            { title: "2+ Years", desc: "Frontend Development" },
            { title: "10+ Projects", desc: "Real-world Builds" },
            { title: "Freelance Ready", desc: "Open for Work" },
            { title: "UI Focused", desc: "Design + UX" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {item.title}
              </h3>
              <p className="text-white/70 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* MY APPROACH (DETAILED) */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">My Development Approach</h2>

          <p className="mt-6 text-white/70 leading-relaxed">
            I follow a structured approach while building applications:
            <br /><br />
            • Understand the problem clearly before coding<br />
            • Break UI into reusable components<br />
            • Focus on performance optimization from the start<br />
            • Maintain clean and readable code structure<br />
            • Ensure mobile-first responsive design<br />
            • Test and refine UI for better user experience
            <br /><br />
            My goal is always to build applications that are fast, scalable,
            and easy to maintain.
          </p>
        </div>

        {/* SKILLS */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-center">
            Technical Skills
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "React.js",
              "Next.js",
              "Angular",
              "TypeScript",
              "JavaScript (ES6+)",
              "Tailwind CSS",
              "HTML5 & CSS3",
              "Bootstrap",
              "REST APIs",
              "Responsive Design",
              "Git & GitHub",
              "Figma to UI",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm text-white/80 hover:bg-cyan-500/10 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold">Soft Skills</h2>

          <div className="mt-6 max-w-3xl mx-auto text-white/70 leading-relaxed">
            • Problem Solving mindset<br />
            • Quick Learner & Adaptable to new tech<br />
            • Strong Communication skills<br />
            • Team collaboration experience<br />
            • Time management & consistency<br />
            • Attention to detail in UI design
          </div>
        </div>

        {/* GOALS */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">My Goals</h2>

          <p className="mt-6 text-white/70 leading-relaxed">
            My short-term goal is to gain real-world industry experience by
            working on freelance projects or joining a development team where
            I can contribute and grow.
            <br /><br />
            My long-term goal is to become a full-stack developer and build
            impactful products that solve real problems for users.
          </p>
        </div>

        {/* WHY HIRE ME */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">Why Work With Me?</h2>

          <p className="mt-6 text-white/70 leading-relaxed">
            I bring dedication, consistency, and a strong focus on quality.
            I don’t just build UI — I build user experiences that feel smooth,
            modern, and reliable.
            <br /><br />
            I am always ready to learn, improve, and take responsibility for
            delivering work that meets expectations and deadlines.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:scale-105 transition"
          >
            View My Work
          </Link>
        </div>

      </div>
    </section>
  );
}

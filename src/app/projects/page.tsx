import { projects } from "@/data/portfolioData"; // adjust path if needed
import BackButton from "../BackButton";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-20 text-white">
         <div className="fixed top-6 left-6 z-50">
        <BackButton />
      </div>
      <h1 className="text-4xl font-bold">Projects</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-white/70 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

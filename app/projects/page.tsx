import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-xl border border-line bg-background"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="h-48 w-full object-cover"
              />
            )}

            <div className="p-5">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="mt-2 text-muted">{project.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-chip px-3 py-1 text-xs text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-secondary underline decoration-line underline-offset-4 transition-colors hover:text-foreground hover:decoration-current"
                >
                  View project →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
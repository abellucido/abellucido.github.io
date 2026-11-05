import { jobs } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Experience</h1>

      <div className="mt-10 space-y-10">
        {jobs.map((job) => (
          <section key={job.company + job.start}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <span className="text-sm text-gray-500">
                {job.start} – {job.end}
              </span>
            </div>
            <p className="text-gray-600">
              {job.company} · {job.location}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
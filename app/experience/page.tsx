import { jobs } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="w-full px-6 py-16 sm:px-10 lg:px-16">
      <h1 className="text-3xl font-bold">Experience</h1>

      <div className="mt-10 divide-y divide-line border-t border-line">
        {jobs.map((job) => (
          <section
            key={job.company + job.start}
            className="grid gap-4 py-10 lg:grid-cols-[18rem_1fr] lg:gap-12"
          >
            <div>
              <p className="text-sm text-muted">
                {job.start} – {job.end}
              </p>
              <p className="mt-2 font-medium">{job.company}</p>
              <p className="text-sm text-muted">{job.location}</p>
            </div>
            <div className="max-w-4xl">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
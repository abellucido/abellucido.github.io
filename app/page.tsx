import Image from "next/image";
import Link from "next/link";
import { education, profile, profileLinks } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <section className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={160}
          height={160}
          priority
          className="h-40 w-40 shrink-0 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="mt-1 text-gray-500">{profile.role}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="text-blue-600 hover:underline"
            >
              Email
            </a>
            {profileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-4 leading-7">
        <p>{profile.intro}</p>
        <p>{profile.research}</p>
      </section>

      <section className="mt-12">
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="text-xl font-semibold">Featured projects</h2>
          <Link href="/projects" className="text-sm text-blue-600 hover:underline">
            All projects →
          </Link>
        </div>
        <ul className="mt-4 space-y-4">
          {featured.map((project) => (
            <li key={project.slug}>
              <h3 className="font-medium">{project.title}</h3>
              <p className="text-gray-600">{project.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="mt-4 space-y-3">
          {education.map((item) => (
            <li
              key={item.degree}
              className="flex flex-wrap items-baseline justify-between gap-2"
            >
              <div>
                <p className="font-medium">{item.degree}</p>
                <p className="text-gray-600">{item.school}</p>
              </div>
              <span className="text-sm text-gray-500">{item.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

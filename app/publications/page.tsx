import Image from "next/image";
import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Publications</h1>

      <div className="mt-10 space-y-10">
        {publications.map((article) => (
          <section
            key={article.title}
            className="flex flex-col gap-5 sm:flex-row sm:items-start"
          >
            <Image
              src={article.image}
              alt={article.imageAlt}
              width={320}
              height={200}
              className="h-32 w-full shrink-0 rounded-lg border border-line bg-white object-contain sm:w-48"
            />

            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <span className="text-sm text-muted">{article.year}</span>
              </div>

              <p className="text-muted">{article.authors}</p>
              <p className="italic text-muted">{article.journal}</p>

              <a
                href={`https://doi.org/${article.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline decoration-line underline-offset-4 transition-colors hover:text-foreground hover:decoration-current"
              >
                View publication
              </a>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
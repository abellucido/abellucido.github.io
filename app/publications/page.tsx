import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Publications</h1>

      <div className="mt-10 space-y-10">
        {publications.map((article) => (
          <section key={article.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <span className="text-sm text-gray-500">{article.year}</span>
            </div>

            <p className="text-gray-600">{article.authors}</p>
            <p className="italic text-gray-600">{article.journal}</p>

            {article.doi && (
              <a
                href={`https://doi.org/${article.doi}`}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                View publication
              </a>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
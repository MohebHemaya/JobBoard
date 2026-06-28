import Link from "next/link";
import jobs from "../../../jobs.json";

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 py-12">
      <main className="max-w-5xl mx-auto px-6">
        <div className="text-center sm:text-left mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
            All Job Openings
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
            Explore curated roles in engineering, product design, and operations at leading tech companies.
          </p>
        </div>

        {/* Jobs List Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/50 hover:border-indigo-500/50 dark:hover:border-indigo-500/50"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
                      {job.employmentType}
                    </span>
                    <h2 className="mt-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {job.title}
                    </h2>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                      {job.company} • {job.location} • Posted {new Date(job.datePosted).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 mb-6">
                  {job.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {job.salary.currency} {job.salary.value.toLocaleString()}
                  {job.salary.currency && "/mo"}
                </span>
                <Link
                  href={`/jobs/${job.slug}`}
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600 dark:bg-zinc-800 dark:hover:bg-indigo-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

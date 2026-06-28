import Link from "next/link";
import jobs from "../../jobs.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-zinc-50 dark:bg-zinc-900 dark:ring-zinc-800/50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

        <div className="max-w-5xl mx-auto px-6 text-center lg:text-left">
          <div className="lg:flex lg:items-center lg:justify-between gap-12">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/20 mb-6">
                Now Live: Next-gen Tech Job Board
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-700 dark:from-white dark:via-zinc-150 dark:to-zinc-350 bg-clip-text text-transparent">
                Discover the Best Jobs in Tech
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Connect with leading technology companies offering remote-first, hybrid, and onsite roles across development, design, DevOps, and project management.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link
                  href="/jobs"
                  className="rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Explore Job Openings
                </Link>
                <Link
                  href="/jobs"
                  className="text-sm font-semibold leading-6 text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Learn how it works <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <div className="relative mx-auto max-w-sm rounded-3xl border border-zinc-200 bg-white/60 p-8 shadow-xl backdrop-blur-md dark:border-zinc-850 dark:bg-zinc-900/60">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                      {jobs.length}+
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white">Active Listings</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Updated today</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-violet-600 flex items-center justify-center text-white font-bold text-lg">
                      100%
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white">Verified Companies</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Strict quality filters</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                      $$$
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white">Competitive Salaries</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Global and local standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </div>
  );
}

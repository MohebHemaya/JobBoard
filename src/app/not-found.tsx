import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-3xl font-extrabold mb-6">
          404
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Page Not Found</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          The page or job listing you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-600 dark:bg-zinc-800 dark:hover:bg-indigo-500 shadow-sm"
        >
          Back to Directory
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function Error({ error, unstable_retry }: ErrorProps) {
  useEffect(() => {
    // Log the error to console
    console.error("Runtime error caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 text-3xl font-extrabold mb-6">
          ⚠
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Something went wrong</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          An unexpected application error occurred. We have logged this issue and are looking into it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => unstable_retry()}
            className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 shadow-sm"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 shadow-sm"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function GlobalError({ error, unstable_retry }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global Layout Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <span className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-3xl font-extrabold mb-6">
            ☠
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Critical Application Error</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
            A critical system error occurred at the root level of the application.
          </p>
          <button
            onClick={() => unstable_retry()}
            className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 shadow-sm"
          >
            Attempt Recovery
          </button>
        </div>
      </body>
    </html>
  );
}

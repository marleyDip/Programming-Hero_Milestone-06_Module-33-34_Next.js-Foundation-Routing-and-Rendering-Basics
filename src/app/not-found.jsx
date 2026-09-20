import Link from "next/link";
import GoBackButton from "./components/GoBackButton";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-12">
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-400">
            <span className="h-2 w-2 rounded-full bg-pink-400" />
            Page Not Found
          </div>

          {/* 404 */}
          <h1 className="mt-8 bg-linear-to-r from-orange via-secondary to-foreground bg-clip-text text-[clamp(6rem,20vw,10rem)] font-black leading-none tracking-tighter text-transparent">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Oops! This page wandered off.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
            The page you are looking for doesn't exist, may have been moved, or
            the URL might be incorrect. Let's get you back on track.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-pink-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-950/20 transition duration-300 cursor-pointer hover:from-pink-500 hover:to-violet-500 hover:shadow-pink-500/20"
            >
              <span>Back to Home</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <GoBackButton />
          </div>

          {/* URL hint */}
          <div className="mt-10 border-t border-slate-800 pt-6">
            <p className="text-xs text-slate-500">
              Error code{" "}
              <span className="font-mono font-semibold text-slate-400">
                404
              </span>
              <span className="mx-2 text-slate-700">•</span>
              Page unavailable
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

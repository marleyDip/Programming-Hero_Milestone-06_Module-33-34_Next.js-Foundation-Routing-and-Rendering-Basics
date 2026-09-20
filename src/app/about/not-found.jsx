import Link from "next/link";

const AboutNotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-2xl text-center">
        {/* Error Code */}
        <p className="text-7xl font-extrabold tracking-tight text-pink-500 sm:text-8xl">
          404
        </p>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
          About Page Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
          The About page you are looking for does not exist. Please check the
          URL or return to the About page.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/about"
            className="rounded-lg bg-linear-to-r from-pink-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-pink-500 hover:to-violet-500"
          >
            Go to About
          </Link>

          <Link
            href="/"
            className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-pink-500/50 hover:bg-slate-800 hover:text-pink-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutNotFound;

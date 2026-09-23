import Link from "next/link";

const FoodNotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-slate-100 overflow-hidden">
      {/* Decorative background glows for glassmorphism pop */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Glassmorphism Card */}
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/3 p-8 md:p-12 shadow-2xl backdrop-blur-md">
        {/* Icon container with matching glass effect */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-pink-500/30 bg-pink-500/10 text-3xl shadow-inner">
          🍽️
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-pink-400">
          Food Not Found
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          This dish isn't on the menu
        </h1>

        <p className="mt-4 leading-7 text-slate-400">
          The food you're looking for doesn't exist or may no longer be
          available.
        </p>

        <Link
          href="/foods"
          className="mt-8 inline-flex rounded-xl bg-linear-to-r from-pink-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-pink-500 hover:to-violet-500 hover:shadow-lg hover:shadow-pink-500/20"
        >
          Explore Foods →
        </Link>
      </div>
    </main>
  );
};

export default FoodNotFound;

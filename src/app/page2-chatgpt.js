import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-400">
            Next.js Foundation
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Learning Next.js
            <span className="block bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Foundation & Routing
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A beginner-friendly project for learning the fundamentals of
            Next.js, including App Router, pages, layouts, route parameters,
            navigation, and rendering.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/posts"
              className="rounded-lg bg-pink-600 px-5 py-3 font-semibold transition hover:bg-pink-500"
            >
              Explore Posts
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-pink-500 hover:text-pink-400"
            >
              About This Project
            </Link>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">
              What I'm Learning
            </p>

            <h2 className="mt-2 text-3xl font-bold">Next.js Core Concepts</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Routing */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                01
              </div>

              <h3 className="text-xl font-bold">Routing</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Learning how folders and page files create routes using the
                Next.js App Router.
              </p>
            </div>

            {/* Dynamic Routes */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                02
              </div>

              <h3 className="text-xl font-bold">Dynamic Routes</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Working with dynamic route parameters such as{" "}
                <code className="text-pink-400">[postId]</code>.
              </p>
            </div>

            {/* Rendering */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                03
              </div>

              <h3 className="text-xl font-bold">Rendering</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Understanding how Next.js renders pages and handles data on the
                server.
              </p>
            </div>

            {/* Navigation */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                04
              </div>

              <h3 className="text-xl font-bold">Navigation</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Using Next.js <code className="text-pink-400">Link</code> for
                client-side navigation between routes.
              </p>
            </div>

            {/* Params */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                05
              </div>

              <h3 className="text-xl font-bold">Route Params</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Reading route parameters from the{" "}
                <code className="text-pink-400">params</code> object.
              </p>
            </div>

            {/* Pages */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                06
              </div>

              <h3 className="text-xl font-bold">Pages & Layouts</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Understanding how{" "}
                <code className="text-pink-400">page.tsx</code> and{" "}
                <code className="text-pink-400">layout.tsx</code> work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">
            Project Structure
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Understanding the App Router
          </h2>

          <div className="mt-6 overflow-x-auto rounded-xl bg-slate-950 p-5">
            <pre className="text-sm leading-7 text-slate-300">
              {`app/
├── layout.tsx
├── page.tsx
├── about/
│   └── page.tsx
└── posts/
    ├── page.tsx
    └── [postId]/
        └── page.tsx`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        Learning Next.js one concept at a time.
      </footer>
    </main>
  );
}

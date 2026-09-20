// app/page.js
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const topics = [
  {
    title: "Next.js & Project Structure",
    description:
      "App Router, folder conventions, and how a Next.js project is organized.",
    href: "/topics/project-structure",
    emoji: "🗂️",
    category: "Structure",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Pages, Routing & Navigation",
    description:
      "File-based routing and moving between pages with the Link component.",
    href: "/topics/routing",
    emoji: "🧭",
    category: "Routing",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Layouts & Nested Layouts",
    description:
      "Shared UI across routes using layout.js, nested at multiple levels.",
    href: "/topics/layouts",
    emoji: "🧩",
    category: "Structure",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Dynamic Routes",
    description:
      "Route segments like [id] that render pages based on URL params.",
    href: "/topics/dynamic-routes",
    emoji: "🔗",
    category: "Routing",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Dynamic Blog Data",
    description:
      "Rendering blog posts from dynamic data using generateStaticParams.",
    href: "/blog",
    emoji: "📝",
    category: "Data",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Image Optimization",
    description:
      "Using next/image for automatic resizing, lazy loading, and formats.",
    href: "/topics/images",
    emoji: "🖼️",
    category: "Styling",
    color: "from-rose-500 to-red-500",
  },
  {
    title: "not-found.js",
    description: "Custom 404 pages at the root or per-route level.",
    href: "/topics/not-found-demo",
    emoji: "🚫",
    category: "Routing",
    color: "from-slate-600 to-slate-800",
  },
  {
    title: "Metadata",
    description: "SEO-friendly titles and descriptions via the metadata API.",
    href: "/topics/metadata",
    emoji: "🏷️",
    category: "Structure",
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Active Links",
    description: "Highlighting the current route using usePathname.",
    href: "/topics/active-links",
    emoji: "🎯",
    category: "Routing",
    color: "from-lime-500 to-green-600",
  },
  {
    title: "Google Fonts",
    description: "Self-hosted, optimized fonts with next/font/google.",
    href: "/topics/fonts",
    emoji: "🔤",
    category: "Styling",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "CSR / SSR",
    description: "Client-side vs server-side rendering and when to use each.",
    href: "/topics/csr-ssr",
    emoji: "⚙️",
    category: "Rendering",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Hydration",
    description: "How server-rendered HTML becomes interactive in the browser.",
    href: "/topics/hydration",
    emoji: "💧",
    category: "Rendering",
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Server vs Client Components",
    description:
      "The 'use client' boundary and choosing the right component type.",
    href: "/topics/server-client-components",
    emoji: "🖥️",
    category: "Rendering",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Client-side Data Loading",
    description:
      "Fetching data in the browser with useEffect / SWR / React Query.",
    href: "/topics/client-data-loading",
    emoji: "📡",
    category: "Data",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Dynamic Food Details",
    description:
      "A practice project: food item details rendered from a dynamic route.",
    href: "/food",
    emoji: "🍔",
    category: "Data",
    color: "from-red-500 to-orange-500",
  },
];

const categories = [
  "All",
  "Structure",
  "Routing",
  "Rendering",
  "Styling",
  "Data",
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [completed, setCompleted] = useState(new Set());

  const filtered = useMemo(() => {
    return topics.filter((t) => {
      const matchesCategory =
        activeCategory === "All" || t.category === activeCategory;
      const matchesQuery =
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const toggleComplete = (href, e) => {
    e.preventDefault();
    e.stopPropagation();
    setCompleted((prev) => {
      const next = new Set(prev);
      next.has(href) ? next.delete(href) : next.add(href);
      return next;
    });
  };

  const progress = Math.round((completed.size / topics.length) * 100);

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-16 text-center">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur">
            🚀 Next.js Learning Journey
          </p>
          <h1 className="bg-linear-to-r from-cyan-300 via-fuchsia-300 to-amber-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Foundations, Routing &amp; Rendering
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            A hands-on roadmap from project structure to hydration — track your
            progress as you go.
          </p>

          {/* Progress bar */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="mb-2 flex justify-between text-sm text-slate-400">
              <span>Progress</span>
              <span>
                {completed.size} / {topics.length} topics
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-linear-to-r from-cyan-400 via-fuchsia-400 to-amber-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="mx-auto max-w-5xl px-6 pb-6">
        <input
          type="text"
          placeholder="🔍 Search topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-5 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder-slate-400 outline-none backdrop-blur focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/30"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-linear-to-r from-cyan-400 to-fuchsia-500 text-slate-900 shadow-lg shadow-fuchsia-500/30"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Topics grid */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-slate-400">
            No topics match "{query}" 🤔
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((topic, i) => {
              const isDone = completed.has(topic.href);
              return (
                <Link
                  key={topic.href}
                  href={topic.href}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className="group relative animate-[fadeIn_0.4s_ease-out_forwards] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 opacity-0 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl"
                >
                  {/* colorful glow accent */}
                  <div
                    className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-linear-to-br ${topic.color} opacity-20 blur-2xl transition group-hover:opacity-40`}
                  />

                  <div className="relative flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${topic.color} text-xl shadow-lg`}
                    >
                      {topic.emoji}
                    </div>

                    <button
                      onClick={(e) => toggleComplete(topic.href, e)}
                      title="Mark as done"
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-sm transition ${
                        isDone
                          ? "border-emerald-400 bg-emerald-400/20 text-emerald-300"
                          : "border-white/20 text-transparent hover:border-white/40"
                      }`}
                    >
                      ✓
                    </button>
                  </div>

                  <h2 className="relative mt-4 text-base font-semibold text-white group-hover:text-cyan-300">
                    {topic.title}
                  </h2>
                  <p className="relative mt-1 text-sm text-slate-400">
                    {topic.description}
                  </p>

                  <span className="relative mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                    {topic.category}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        Built while learning Next.js App Router 🚀
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

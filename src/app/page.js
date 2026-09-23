import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Pages & Routing",
    description:
      "Create pages, understand file-based routing, and navigate between routes using Next.js Link.",
    href: "/about",
    color: "bg-pink-500/10 text-pink-400",
    hover: "hover:border-pink-500/50 group-hover:text-pink-400",
  },
  {
    number: "02",
    title: "Layouts",
    description:
      "Build basic layouts, dynamic layouts, and nested layouts for different sections of an application.",
    href: "/dashboard",
    color: "bg-violet-500/10 text-violet-400",
    hover: "hover:border-violet-500/50 group-hover:text-violet-400",
  },
  {
    number: "03",
    title: "Dynamic Routing",
    description:
      "Create dynamic routes and use route parameters to display individual blog details.",
    href: "/users",
    color: "bg-blue-500/10 text-blue-400",
    hover: "hover:border-blue-500/50 group-hover:text-blue-400",
  },
  {
    number: "04",
    title: "Data Loading",
    description:
      "Load data and display dynamic content such as blog posts and food details.",
    href: "/blogs",
    color: "bg-emerald-500/10 text-emerald-400",
    hover: "hover:border-emerald-500/50 group-hover:text-emerald-400",
  },
  {
    number: "05",
    title: "Image Optimization",
    description:
      "Use the Next.js Image component to optimize and display images efficiently.",
    href: "/about/image",
    color: "bg-orange-500/10 text-orange-400",
    hover: "hover:border-orange-500/50 group-hover:text-orange-400",
  },
  {
    number: "06",
    title: "Metadata & Not Found",
    description:
      "Work with custom metadata, not-found pages, and better page experiences.",
    href: "/not-found",
    color: "bg-cyan-500/10 text-cyan-400",
    hover: "hover:border-cyan-500/50 group-hover:text-cyan-400",
  },
  {
    number: "07",
    title: "CSR & SSR",
    description:
      "Understand Client-Side Rendering, Server-Side Rendering, and how Next.js renders pages.",
    href: "/foods",
    color: "bg-yellow-500/10 text-yellow-400",
    hover: "hover:border-yellow-500/50 group-hover:text-yellow-400",
  },
  {
    number: "08",
    title: "Hydration",
    description:
      "Understand how React hydration connects server-rendered HTML with client-side React. Client component inside Server component.",
    href: "/dashboard",
    color: "bg-red-500/10 text-red-400",
    hover: "hover:border-red-500/50 group-hover:text-red-400",
  },
  {
    number: "09",
    title: "Server & Client Components",
    description:
      "Learn the difference between Server Components and Client Components in Next.js.",
    href: "/foods",
    color: "bg-indigo-500/10 text-indigo-400",
    hover: "hover:border-indigo-500/50 group-hover:text-indigo-400",
  },
];

// color: "bg-pink-500/10 text-pink-400",
// hoverBorder: "hover:border-pink-500/50",
// hoverText: "group-hover:text-pink-400",

export default function Home() {
  // console.log("Hello from the Home component!");
  // Output: Server Hello from the Home component!

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-400">
            Next.js Foundation • Modules 33 & 34
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Learning Next.js
            <span className="block bg-linear-to-r from-pink-500 via-[#d81b7e] to-violet-500 bg-clip-text text-transparent">
              Routing & Rendering
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A learning project covering Next.js fundamentals, App Router,
            layouts, dynamic routing, data loading, image optimization,
            metadata, rendering, hydration, and Server & Client Components.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blogs"
              className="rounded-lg bg-pink-600 px-5 py-3 font-semibold transition hover:bg-pink-500"
            >
              Explore Blogs
            </Link>

            <Link
              href="/foods"
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-pink-500 hover:text-pink-400"
            >
              Explore Foods
            </Link>
          </div>
        </div>
      </section>
      {/* Learning Topics */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
              What I Learned
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Next.js Concepts
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              Concepts and features practiced while learning Next.js
              fundamentals and rendering.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.number}
                href={topic.href}
                className={`group rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:bg-slate-900 ${topic.hover}`}
              >
                <div className="flex items-center justify-between">
                  {/* Different color number badge */}
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${topic.color}`}
                  >
                    {topic.number}
                  </span>

                  <span className={`text-slate-600 transition ${topic.hover}`}>
                    →
                  </span>

                  {/* <span className="text-slate-600 transition group-hover:text-current">
                    →
                  </span> */}
                </div>

                <h3
                  className={`mt-5 text-xl font-bold text-white ${topic.hover}`}
                >
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rendering Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Rendering Fundamentals
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Understanding How Next.js Renders
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-400">
            This section of the project focuses on understanding how rendering
            works in modern web applications and how Next.js uses Server and
            Client Components.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-bold text-pink-400">CSR</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Client-Side Rendering and loading data inside Client Components.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-bold text-violet-400">SSR</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Server-Side Rendering and understanding how content can be
                rendered on the server.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-bold text-cyan-400">Hydration</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Understanding how React connects server-rendered HTML with
                client-side behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Practice */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Blogs */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
              <span className="text-sm font-semibold text-pink-400">
                Practice Project
              </span>

              <h2 className="mt-2 text-2xl font-bold">Dynamic Blog System</h2>

              <p className="mt-3 leading-7 text-slate-400">
                Practice dynamic routing, route parameters, data loading,
                layouts, images, metadata, and blog detail pages.
              </p>

              <Link
                href="/blogs"
                className="mt-6 inline-flex font-semibold text-pink-400 transition hover:text-pink-300"
              >
                View blogs →
              </Link>
            </div>

            {/* Foods */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
              <span className="text-sm font-semibold text-violet-400">
                Rendering Practice
              </span>

              <h2 className="mt-2 text-2xl font-bold">Food Details</h2>

              <p className="mt-3 leading-7 text-slate-400">
                Practice loading data with Client Components and displaying
                dynamic food details.
              </p>

              <Link
                href="/foods"
                className="mt-6 inline-flex font-semibold text-violet-400 transition hover:text-violet-300"
              >
                View foods →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      {/* <section className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
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
        </div>
      </section> */}

      {/* Footer */}
      <footer className="group border-t border-slate-800 py-8 text-center">
        <p className="text-sm text-slate-500">
          Learning Next.js Basics • Building one concept at a time.
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Built & documented by{" "}
          <a
            href="https://marleydip.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-400 transition-colors group-hover:text-lime-500/80"
          >
            Md. Sofian Hasan.
          </a>
        </p>
      </footer>
    </main>
  );
}

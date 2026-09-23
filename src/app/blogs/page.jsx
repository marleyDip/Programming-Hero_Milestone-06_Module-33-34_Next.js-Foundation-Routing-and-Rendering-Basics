import Post from "@/components/Post";
import Link from "next/link";

export const metadata = {
  title: "Blogs | Sofian Hasan",
  description:
    "Read Sofian Hasan's practical learning notes on Next.js, React, routing, rendering, image optimization, TypeScript, and modern web development.",
};

const blogsData = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "Learn the fundamentals of Next.js and how to build modern React applications with routing, layouts, rendering, and more.",
    author: "Sofian Hasan",
    category: "Next.js",
    date: "2026-09-10",
    image: "/blog/next.png",
  },
  {
    id: 2,
    title: "Understanding React Components",
    description:
      "Explore React components, props, state, and reusable UI patterns for building maintainable applications.",
    author: "Sofian Hasan",
    category: "React",
    date: "2026-09-08",
    image: "/blog/react.png",
  },
  {
    id: 3,
    title: "Building REST APIs with Node.js",
    description:
      "A beginner-friendly introduction to building REST APIs using Node.js, Express, routes, controllers, and JSON responses.",
    author: "Sofian Hasan",
    category: "Node.js",
    date: "2026-09-05",
    image: "/blog/node.png",
  },
  {
    id: 4,
    title: "Database Design for Web Applications",
    description:
      "Understand database tables, relationships, indexing, and the basic principles of designing reliable web application databases.",
    author: "Sofian Hasan",
    category: "Database",
    date: "2026-09-02",
    image: "/blog/database.png",
  },
  {
    id: 5,
    title: "Writing Clean and Maintainable Code",
    description:
      "Discover practical techniques for writing readable, reusable, organized, and maintainable code.",
    author: "Sofian Hasan",
    category: "Programming",
    date: "2026-08-28",
    image: "/blog/cleanCode.jpg",
  },
  {
    id: 6,
    title: "Learning TypeScript for React",
    description:
      "Learn how TypeScript improves React development through interfaces, type safety, props, arrays, and reusable types.",
    author: "Sofian Hasan",
    category: "TypeScript",
    date: "2026-08-24",
    image: "/blog/typescript.avif",
  },
  {
    id: 7,
    title: "Building Responsive Interfaces with Tailwind CSS",
    description:
      "Explore utility-first styling, responsive design, reusable classes, spacing, typography, and modern UI patterns with Tailwind CSS.",
    author: "Sofian Hasan",
    category: "Tailwind CSS",
    date: "2026-08-20",
    image: "/blog/css.avif",
  },
  {
    id: 8,
    title: "Understanding Next.js Dynamic Routes",
    description:
      "Learn how dynamic route segments work and how route parameters can be used to display individual blog details.",
    author: "Sofian Hasan",
    category: "Next.js",
    date: "2026-08-16",
    image: "/blog/dynamic.avif",
  },
  {
    id: 9,
    title: "Client-Side vs Server-Side Rendering",
    description:
      "Understand CSR, SSR, hydration, and how modern frameworks decide where application content should be rendered.",
    author: "Sofian Hasan",
    category: "Next.js",
    date: "2026-08-12",
    image: "/blog/client.avif",
  },
  {
    id: 10,
    title: "Git and GitHub for Developers",
    description:
      "Learn the essential Git workflow including repositories, commits, branches, pushing changes, and collaborating through GitHub.",
    author: "Sofian Hasan",
    category: "Git & GitHub",
    date: "2026-08-08",
    image: "/blog/github.avif",
  },
];

const BlogsPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-400">
            My Learning Journal
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Explore My{" "}
            <span className="bg-linear-to-r from-pink-500 via-secondary to-violet-500 bg-clip-text text-transparent">
              Blogs
            </span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Notes, tutorials, and practical lessons from my journey through
            Next.js, React, TypeScript, backend development, databases, and
            modern web technologies.
          </p>
        </header>

        {/* Blog Stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center">
            <p className="text-2xl font-bold text-pink-400">
              {blogsData.length}
            </p>
            <p className="mt-1 text-sm text-slate-500">Articles</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center">
            <p className="text-2xl font-bold text-violet-400">10+</p>
            <p className="mt-1 text-sm text-slate-500">Topics</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center">
            <p className="text-2xl font-bold text-cyan-400">2026</p>
            <p className="mt-1 text-sm text-slate-500">Learning Year</p>
          </div>
        </div>

        {/* Blog Grid */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
                Latest Posts
              </p>

              <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                Knowledge & Practice
              </h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Test Not Found Post */}
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-dashed border-red-500/30 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-red-500/60">
              {/* No Image */}
              <div className="flex h-52 items-center justify-center bg-red-500/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-2xl text-red-400">
                  ?
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                  Test Post
                </span>

                <h2 className="mt-4 text-xl font-bold text-white transition group-hover:text-red-400">
                  Blog Not Found Test
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
                  This is a test post for checking the custom Blog Not Found
                  page. Clicking the button will open an invalid blog ID and
                  demonstrate how the application handles a missing blog post.
                </p>

                <Link
                  href="/blogs/999"
                  className="mt-auto inline-flex w-full items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 transition hover:border-red-500/50 hover:bg-red-500/20"
                >
                  Test Not Found
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>

            {/* Send data to Post child through props */}
            {blogsData.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default BlogsPage;

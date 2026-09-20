import Image from "next/image";

// ToDo: fetch data from an API instead of using static data.
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

const PostDetailPage = async ({ params }) => {
  const { postId } = await params;

  // By default, Route Parameters are always received as strings.
  // console.log(typeof postId); // string

  // TODO: Load data from database
  // Convert the string into number.
  // find method return a first element which match the specific condition.
  // { id: 4, title: 'Database Design for Web Applications', ... }

  const post = blogsData.find((post) => post.id === parseInt(postId));

  // return array of element which match the specific condition.
  // [ { id: 4, title: 'Database Design for Web Applications', ... } ]
  // when fetch, used post[0].propertyName for every object value.
  // const post = blogsData.filter((post) => post.id === parseInt(postId))[0];

  // console.log(post);

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Blog Post
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-600 sm:text-4xl">
            Post Detail
          </h2>

          <p className="mt-2 text-sm text-slate-500">Reading post #{postId}</p>
        </div>

        {/* Post */}
        {post ? (
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            {/* Cover Image */}
            <div className="relative h-56 overflow-hidden bg-slate-100 sm:h-72 md:h-150">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={500}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Category Badge */}
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm backdrop-blur">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Title */}
              <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-700 sm:text-3xl">
                {post.title}
              </h1>

              {/* Author & Date */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-slate-100 pb-5 text-sm text-gray-500">
                <span>
                  By{" "}
                  <span className="font-semibold text-slate-700">
                    {post.author}
                  </span>
                </span>

                <span className="hidden h-2 w-2 rounded-full bg-slate-500 sm:block" />

                <time dateTime={post.date}>{post.date}</time>
              </div>

              {/* Description */}
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                {post.description}
              </p>

              {/* Footer */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                <span className="text-sm font-medium text-gray-600">
                  Article #{post.id}
                </span>

                <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600">
                  {post.category}
                </span>
              </div>
            </div>
          </article>
        ) : (
          /* Not Found */
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Post Not Found</h3>

            <p className="mt-2 text-sm text-slate-500">
              We couldn't find a blog post with ID {postId}.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default PostDetailPage;

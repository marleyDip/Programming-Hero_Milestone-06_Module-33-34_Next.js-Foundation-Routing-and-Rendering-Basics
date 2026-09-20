
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  date: string;
  image: string;
}

interface PostDetailPageProps {
  params: Promise<{
    postId: string;
  }>;
}

const blogsData: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "Learn the fundamentals of Next.js and understand why it is widely used for building modern React applications. Explore file-based routing, layouts, navigation, rendering, image optimization, metadata, and the overall structure of a Next.js project. This guide provides a beginner-friendly introduction to the core concepts you need before building larger applications.",
    author: "Sofian Hasan",
    category: "Next.js",
    date: "2026-09-10",
    image: "/blog/next.png",
  },
  {
    id: 2,
    title: "Understanding React Components",
    description:
      "Explore the fundamentals of React components and learn how reusable UI pieces can be combined to build complete applications. Understand props, state, event handling, conditional rendering, and component composition while following practical examples. The goal is to build a strong foundation for creating clean, maintainable, and reusable React interfaces.",
    author: "Sofian Hasan",
    category: "React",
    date: "2026-09-08",
    image: "/blog/react.png",
  },
  {
    id: 3,
    title: "Building REST APIs with Node.js",
    description:
      "Learn the fundamentals of building REST APIs with Node.js and Express. Understand how routes, controllers, HTTP methods, request parameters, JSON responses, and basic API structures work together. This beginner-friendly guide focuses on creating organized backend services that can communicate with frontend applications and provide reliable data through RESTful endpoints.",
    author: "Sofian Hasan",
    category: "Node.js",
    date: "2026-09-05",
    image: "/blog/node.png",
  },
  {
    id: 4,
    title: "Database Design for Web Applications",
    description:
      "Understand the basic principles of designing databases for modern web applications. Learn about tables, columns, primary keys, relationships, normalization, indexing, and how application requirements influence database structure. A well-designed database helps applications store information efficiently while making data easier to maintain and retrieve.",
    author: "Sofian Hasan",
    category: "Database",
    date: "2026-09-02",
    image: "/blog/database.png",
  },
  {
    id: 5,
    title: "Writing Clean and Maintainable Code",
    description:
      "Discover practical techniques for writing code that is easier to read, understand, debug, and maintain. Explore meaningful naming, reusable functions, proper component structure, separation of responsibilities, consistent formatting, and avoiding unnecessary complexity. Clean code makes it easier for developers to work on projects over time and collaborate with others.",
    author: "Sofian Hasan",
    category: "Programming",
    date: "2026-08-28",
    image: "/blog/cleanCode.jpg",
  },
  {
    id: 6,
    title: "Learning TypeScript for React",
    description:
      "Learn how TypeScript can improve React development by adding static typing and better developer feedback. Explore interfaces, type aliases, typed props, arrays, objects, event types, and reusable types for components and data. Using TypeScript with React can make applications easier to understand and help identify many common mistakes during development.",
    author: "Sofian Hasan",
    category: "TypeScript",
    date: "2026-08-24",
    image: "/blog/typescript.avif",
  },
  {
    id: 7,
    title: "Building Responsive Interfaces with Tailwind CSS",
    description:
      "Explore the utility-first approach of Tailwind CSS and learn how to create responsive and modern user interfaces efficiently. Understand responsive breakpoints, spacing, typography, colors, borders, shadows, flexbox, grid layouts, and reusable styling patterns. The guide focuses on building clean interfaces that work consistently across different screen sizes.",
    author: "Sofian Hasan",
    category: "Tailwind CSS",
    date: "2026-08-20",
    image: "/blog/css.avif",
  },
  {
    id: 8,
    title: "Understanding Next.js Dynamic Routes",
    description:
      "Learn how dynamic route segments work in Next.js and how a single page can display different content based on a route parameter. Explore patterns such as [id], accessing route parameters, finding data based on an identifier, and creating individual detail pages. Dynamic routing is especially useful for blogs, products, users, and other data-driven applications.",
    author: "Sofian Hasan",
    category: "Next.js",
    date: "2026-08-16",
    image: "/blog/dynamic.avif",
  },
  {
    id: 9,
    title: "Client-Side vs Server-Side Rendering",
    description:
      "Understand the differences between Client-Side Rendering and Server-Side Rendering and how they affect the way web pages are generated and displayed. Learn about browser rendering, server rendering, hydration, loading data, and the role of Server and Client Components in Next.js. Understanding these concepts helps developers choose the appropriate rendering approach for different parts of an application.",
    author: "Sofian Hasan",
    category: "Next.js",
    date: "2026-08-12",
    image: "/blog/client.avif",
  },
  {
    id: 10,
    title: "Git and GitHub for Developers",
    description:
      "Learn the essential Git and GitHub workflow used in modern software development. Understand repositories, commits, branches, staging changes, pushing code, pulling updates, and collaborating through GitHub. A solid Git workflow helps developers track changes, experiment safely, collaborate with teams, and maintain a history of their projects.",
    author: "Sofian Hasan",
    category: "Git & GitHub",
    date: "2026-08-08",
    image: "/blog/github.avif",
  },
];

/* --------------------------------------------------
   Generate Dynamic Metadata
-------------------------------------------------- */

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const { postId } = await params;

  const post = blogsData.find(
    (blog) => blog.id === Number(postId),
  );

  if (!post) {
    return {
      title: "Blog Not Found",
      description:
        "The requested blog post could not be found in the Next.js Learning Journal.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const siteUrl = "https://your-domain.com";

  const postUrl = `${siteUrl}/blogs/${post.id}`;
  const imageUrl = `${siteUrl}${post.image}`;

  /*
    A shorter description works better as a search/social description.
    The complete description is still displayed on the page.
  */
  const seoDescription =
    post.id === 1
      ? "A beginner-friendly guide to Next.js covering routing, layouts, navigation, rendering, image optimization, metadata, and project structure."
      : post.description;

  return {
    title: post.title,

    description: seoDescription,

    authors: [
      {
        name: post.author,
      },
    ],

    keywords: [
      post.category,
      "Next.js",
      "React",
      "Web Development",
      "Next.js Tutorial",
      "Next.js Beginner Guide",
    ],

    alternates: {
      canonical: postUrl,
    },

    openGraph: {
      title: post.title,
      description: seoDescription,
      url: postUrl,
      siteName: "Next.js Learning Journal",
      type: "article",

      publishedTime: post.date,

      authors: [post.author],

      section: post.category,

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: seoDescription,
      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* --------------------------------------------------
   Blog Details Page
-------------------------------------------------- */

const PostDetailPage = async ({
  params,
}: PostDetailPageProps) => {
  const { postId } = await params;

  const post = blogsData.find(
    (post) => post.id === Number(postId),
  );

  /*
    If the post doesn't exist,
    Next.js will render app/blogs/not-found.tsx
  */
  if (!post) {
    notFound();
  }

  const siteUrl = "https://your-domain.com";

  const postUrl = `${siteUrl}/blogs/${post.id}`;
  const imageUrl = `${siteUrl}${post.image}`;

  /*
    Structured Data
    Helps search engines understand
    that this page represents a blog article.
  */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: post.title,

    description: post.description,

    image: [imageUrl],

    datePublished: post.date,

    author: {
      "@type": "Person",
      name: post.author,
    },

    publisher: {
      "@type": "Person",
      name: post.author,
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },

    articleSection: post.category,
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-5xl">

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Back Navigation */}
        <Link
          href="/blogs"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-pink-400"
        >
          <span className="transition duration-500 group-hover:-translate-x-1 group-hover:scale-125 group-hover:-rotate-360">
            ←
          </span>

          Back to Blogs
        </Link>

        {/* Article */}
        <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

          {/* Cover Image */}
          <div className="relative h-64 overflow-hidden sm:h-80 md:h-105">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1024px"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Category */}
            <div className="absolute left-5 top-5">
              <span className="rounded-full border border-pink-500/30 bg-slate-950/80 px-4 py-2 text-sm font-semibold text-pink-400 shadow-lg backdrop-blur-sm">
                {post.category}
              </span>
            </div>

            {/* Article Number */}
            <div className="absolute bottom-5 right-5">
              <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-sm">
                Article #{post.id}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-10">

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
              <span>
                By{" "}
                <span className="font-medium text-slate-300">
                  {post.author}
                </span>
              </span>

              <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-600 sm:block" />

              <time dateTime={post.date}>
                {post.date}
              </time>
            </div>

            {/* Title */}
            <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Gradient Divider */}
            <div className="mt-6 h-px w-full bg-linear-to-r from-pink-500/60 via-violet-500/40 to-transparent" />

            {/* Description */}
            <div className="mt-7 max-w-4xl">
              <p className="text-left text-base leading-8 text-slate-400 sm:text-lg md:text-justify">
                {post.description}
              </p>

              <p className="mt-5 text-left text-base leading-8 text-slate-400 md:text-justify">
                This article is part of my learning journey as I explore
                modern web development and build practical projects with
                Next.js, React, TypeScript, and other technologies.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6">

              {/* Category */}
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Category
                </p>

                <p className="mt-1 text-sm font-semibold text-pink-400">
                  {post.category}
                </p>
              </div>

              {/* All Posts */}
              <Link
                href="/blogs"
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-pink-500/50 hover:text-pink-400"
              >
                View All Posts

                <span className="transition duration-300 group-hover:translate-x-1 group-hover:scale-125">
                  →
                </span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default PostDetailPage;

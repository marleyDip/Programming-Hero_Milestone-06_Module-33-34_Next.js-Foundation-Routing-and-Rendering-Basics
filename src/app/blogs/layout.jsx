import styles from "./blogs.module.css";

export const metadata = {
  title: {
    default: "Blogs | Next.js Learning Journal",
    template: "%s | Next.js Learning Journal",
  },
  description:
    "Explore practical articles and learning notes on Next.js, React, TypeScript, Node.js, databases, and modern web development.",
};

const PostLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Blog Header */}
      <header className="px-6 py-10 sm:py-12">
        <div className="mx-auto max-w-5xl">
          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
            Knowledge Hub
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Insights from My{" "}
            <span className="bg-linear-to-r from-pink-500 via-secondary to-violet-500 bg-clip-text text-transparent">
              Development Journey
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore practical guides, development concepts, coding lessons, and
            experiences covering frontend, backend, databases, and modern
            JavaScript technologies.
          </p>

          <div className="mt-6 h-px w-full bg-linear-to-r from-pink-500/50 via-violet-500/30 to-transparent" />
        </div>
      </header>

      {/* Blog Content */}
      <div className={styles.blogs}> {children} </div>
    </div>
  );
};

export default PostLayout;

/* What does template do?

This part is particularly useful:

title: {
  default: "Blogs | Next.js Learning Journal",
  template: "%s | Next.js Learning Journal",
},

For example:

/blogs
→ Blogs | Next.js Learning Journal

And if your individual blog page has:

export const metadata = {
  title: "Getting Started with Next.js",
};

the final title becomes:

Getting Started with Next.js | Next.js Learning Journal

So your structure can be:

app/blogs/layout.tsx
        ↓
Shared metadata for /blogs
        ↓
        ├── page.tsx
        ├── not-found.tsx
        └── [postId]/page.tsx

        
One important detail:
  - child pages can override or extend metadata from the layout. 
  
  - This makes blogs/layout.tsx a good place for your shared blog identity, while individual blog posts can provide their own titles and descriptions.

*/

/* 
app/
└── blogs/
    ├── layout.tsx
    ├── page.tsx
    └── [postId]/
        └── page.tsx

then layout.tsx wraps both the /blogs page and /blogs/[postId] pages.

app/
│
└── blogs/
    │
    ├── layout.tsx        ← shared Blogs layout
    │
    ├── page.tsx          ← /blogs
    │   └── max-w-7xl
    │
    └── [postId]/
        └── page.tsx      ← /blogs/1, /blogs/2...
            └── max-w-5xl

How Next.js combines them

For /blogs:

Blogs layout
└── Blogs page
    └── max-w-7xl

For /blogs/1:

Blogs layout
└── Blog detail page
    └── max-w-5xl

So your layout.tsx should contain only the styling/content that is truly common to both pages.

If your goal is specifically to demonstrate Next.js nested layouts, this is a good example because "blogs/layout.tsx" is shared automatically by all routes inside /blogs.

*/

/* const PostLayout = ({ children }) => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-emerald-500 my-5">
        Fixed portion of blog layout.
      </h2>

      <div>{children}</div>
    </div>
  );
};

export default PostLayout; */

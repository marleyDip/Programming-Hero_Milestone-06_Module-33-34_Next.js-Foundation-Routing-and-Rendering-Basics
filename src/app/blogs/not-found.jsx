import Link from "next/link";

const BlogNotFound = () => {
  return (
    <main className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/blogs"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-pink-400"
        >
          <span className="transition duration-500 group-hover:-translate-x-1 group-hover:scale-125">
            ←
          </span>
          Back to Blogs
        </Link>

        <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-500/10 text-2xl text-pink-400">
            ?
          </div>

          <h1 className="mt-5 text-2xl font-bold text-white">Post Not Found</h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
            We couldn't find a blog post with ID{" "}
            <span className="font-semibold text-slate-300">999</span>. The post
            may have been removed or the URL may be incorrect.
          </p>

          <Link
            href="/blogs"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-500"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BlogNotFound;

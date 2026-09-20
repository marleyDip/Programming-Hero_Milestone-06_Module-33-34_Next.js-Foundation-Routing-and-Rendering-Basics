import Image from "next/image";
import Link from "next/link";

const Post = ({ post }) => {
  const { id, title, description, author, category, date, image } = post;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:shadow-pink-500/5">
      {/* Blog Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full border border-pink-500/30 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-pink-400 backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <h2 className="line-clamp-2 text-xl font-bold text-white transition group-hover:text-pink-400">
          {title}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
          {description}
        </p>

        {/* Author & Date */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4 text-xs">
          <span className="text-slate-400">
            By <span className="font-medium text-slate-300">{author}</span>
          </span>

          <time className="text-slate-500">{date}</time>
        </div>

        {/* Details Button */}
        <Link
          href={`/blogs/${id}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-pink-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-pink-500"
        >
          Read Article
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default Post;

/* import Link from "next/link";

const Post = ({ post }) => {
  const { id, title, description } = post;

  return (
    <div className="card bg-base-100 w-96 shadow-sm m-2">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p>{description}</p>

        <div className="card-actions justify-end">
          <Link href={`/blogs/${id}`}>
            <button className="btn btn-primary">Show Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post; */

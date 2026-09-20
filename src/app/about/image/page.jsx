import Image from "next/image";
import Link from "next/link";
// import { notFound } from "next/navigation";

export const metadata = {
  title: "Image Optimization | Sofian Hasan",
  description:
    "Learn how to optimize images in Next.js using the Image component, responsive images, priority loading, sizes, quality, placeholders, and other image properties.",

  keywords: [
    "Next.js Image",
    "Next.js Image Optimization",
    "Image Component",
    "Next.js Image Properties",
    "Next.js Image Optimization Tutorial",
    "Responsive Images",
    "Next.js",
    "React",
  ],

  openGraph: {
    title: "Image Optimization | Next.js Learning Journal",
    description:
      "Learn Next.js Image optimization, responsive images, loading strategies, placeholders, and Image component properties.",
    type: "article",
  },

  twitter: {
    card: "summary",
    title: "Image Optimization | Next.js Learning Journal",
    description:
      "Learn Next.js Image optimization and the most useful Image component properties.",
  },

  robots: { index: true, follow: true },
};

const ImagePage = () => {
  // For testing only:
  // notFound();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-400">
            Next.js Image Optimization
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Working with{" "}
            <span className="bg-linear-to-r from-pink-500 via-secondary to-violet-500 bg-clip-text text-transparent">
              Next.js Image
            </span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Explore how the Next.js Image component handles local images, remote
            images, dimensions, loading behavior, responsive layouts, and image
            optimization.
          </p>
        </header>

        <div className="mb-12 flex justify-center">
          <Link
            href="/about/image/component"
            className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-pink-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-pink-500 hover:to-violet-500"
          >
            Explore Image Component
            <span className="transition-transform group-hover:translate-x-1 group-hover:scale-125 group-hover:rotate-180 duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Image Grid */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Local Image */}
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src="/images/dip.png"
                  alt="Sofian Hasan profile image"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold">Local Image</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  An image stored inside the Next.js public folder.
                </p>
              </div>
            </article>

            {/* Eager Loading */}
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/me.jpg"
                  alt="Sofian Hasan"
                  fill
                  priority
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold">Priority Image</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This image uses priority loading because it can be considered
                  important content.
                </p>
              </div>
            </article>

            {/* Local Image */}
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src="/images/sofian.png"
                  alt="Sofian Hasan portrait"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold">Local Asset</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Another example of loading an image from the public folder.
                </p>
              </div>
            </article>

            {/* Unsplash */}
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1788371642972-cd2eda4805ac"
                  alt="Modern workspace"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold">Remote Image</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  An image loaded from an external image provider.
                </p>
              </div>
            </article>

            {/* Unsplash */}
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1788956766784-dcc68a38cf95"
                  alt="Developer workspace"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold">Optimized Remote Image</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Next.js can optimize supported remote images before serving
                  them to the browser.
                </p>
              </div>
            </article>

            {/* Cloudinary */}
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/df4biggtk/image/upload/v1775587862/ECommerce_Store/Product_Images/8232ee8a-e593-4645-963c-378d056fa498/BrightBeam_LED_Car_Headlight_Bulbs_High_Brightness__Pair__53959_1"
                  alt="Cloudinary product image"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold">Cloudinary Image</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A remote image served through Cloudinary's image delivery
                  domain.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ImagePage;

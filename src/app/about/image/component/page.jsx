import Image from "next/image";
import Link from "next/link";
import dipImage from "../../../../../public/images/dip.png";

export const metadata = {
  title: "Image Component Properties | Sofian Hasan",
  description:
    "Explore the most useful Next.js Image component properties including src, alt, width, height, fill, priority, loading, sizes, quality, placeholder, blurDataURL, and more.",

  keywords: [
    "Next.js Image component",
    "Next.js Image props",
    "Image properties",
    "Next.js Image src",
    "Next.js Image fill",
    "Next.js Image priority",
    "Next.js Image sizes",
    "Next.js Image placeholder",
    "Next.js",
  ],

  openGraph: {
    title: "Image Component Properties | Next.js Learning Journal",
    description:
      "A practical reference for the most useful properties of the Next.js Image component.",
    type: "article",
  },

  twitter: {
    card: "summary",
    title: "Image Component Properties | Next.js Learning Journal",
    description:
      "A practical guide to the most useful Next.js Image component properties.",
  },

  robots: { index: true, follow: true },
};

const imageProperties = [
  {
    property: "src",
    purpose: "Image source",
    example: 'src="/images/photo.png"',
  },
  {
    property: "alt",
    purpose: "Accessibility description",
    example: 'alt="Profile photo"',
  },
  {
    property: "width",
    purpose: "Image width",
    example: "width={400}",
  },
  {
    property: "height",
    purpose: "Image height",
    example: "height={300}",
  },
  {
    property: "fill",
    purpose: "Makes the image fill its parent",
    example: "fill",
  },
  {
    property: "priority",
    purpose: "Loads an important image early",
    example: "priority",
  },
  {
    property: "loading",
    purpose: "Controls loading behavior",
    example: 'loading="eager"',
  },
  {
    property: "sizes",
    purpose: "Helps responsive image optimization",
    example: 'sizes="(max-width: 768px) 100vw, 50vw"',
  },
  {
    property: "quality",
    purpose: "Controls image quality",
    example: "quality={75}",
  },
  {
    property: "placeholder",
    purpose: "Shows a placeholder while loading",
    example: 'placeholder="blur"',
  },
  {
    property: "blurDataURL",
    purpose: "Provides a custom blur placeholder",
    example: 'blurDataURL="data:image/..."',
  },
  {
    property: "className",
    purpose: "Adds CSS or Tailwind styling",
    example: 'className="rounded-xl"',
  },
  {
    property: "style",
    purpose: "Adds inline CSS styling",
    example: 'style={{ objectFit: "cover" }}',
  },
  {
    property: "unoptimized",
    purpose: "Skips Next.js image optimization",
    example: "unoptimized",
  },
];

const ImagePropertiesPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto mb-12 md:mb-16 lg:mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-400">
            Next.js Image Component
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Image{" "}
            <span className="bg-linear-to-r from-pink-500 via-secondary to-violet-500 bg-clip-text text-transparent">
              Properties
            </span>
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Practice different properties of the Next.js Image component and
            understand how they help with performance, responsiveness,
            accessibility, and user experience.
          </p>

          {/* <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            A quick reference for the most useful properties of the Next.js
            <code className="mx-1 rounded bg-slate-800 px-2 py-1 text-pink-400">
              Image
            </code>
            component.
          </p> */}

          {/* Back Button */}
          <div className="mt-8">
            <Link
              href="/about/image"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-pink-500/50 hover:bg-slate-800 hover:text-pink-400"
            >
              <span className="transition-transform group-hover:-translate-x-1 group-hover:scale-125 group-hover:rotate-180 duration-300">
                ←
              </span>
              Back to Image Examples
            </Link>
          </div>
        </header>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-190 border-collapse text-left">
            {/* Table Description */}
            <caption className="caption-top px-3 md:px-6 pb-6 text-left">
              <p className="text-base leading-8 text-slate-400 sm:text-lg">
                A quick reference for the most useful properties of the Next.js
                <code className="mx-1 rounded bg-slate-800 px-2 py-1 text-pink-400">
                  Image
                </code>
                component.
              </p>
            </caption>

            {/* Table Header */}
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60">
                <th className="px-6 py-4 text-sm font-semibold text-pink-400">
                  #
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-pink-400">
                  Property
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-pink-400">
                  Purpose
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-pink-400">
                  Example
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {imageProperties.map((item, index) => (
                <tr
                  key={item.property}
                  className="border-b border-slate-800/80 transition hover:bg-slate-800/40"
                >
                  <td className="px-6 py-5 text-sm text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  <td className="px-6 py-5">
                    <code className="rounded-md bg-pink-500/10 px-3 py-1.5 text-sm font-semibold text-pink-400">
                      {item.property}
                    </code>
                  </td>

                  <td className="px-6 py-5 text-sm leading-6 text-slate-300">
                    {item.purpose}
                  </td>

                  <td className="px-6 py-5">
                    <code className="whitespace-nowrap rounded-md bg-slate-950 px-3 py-2 text-sm text-violet-400">
                      {item.example}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 bg-slate-950/40 px-3 md:px-6 py-4">
          <p className="text-sm text-slate-500">
            Total properties covered:{" "}
            <span className="font-semibold text-slate-300">
              {imageProperties.length}
            </span>
          </p>
        </div>

        {/* Image Examples */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-16">
          {/* 1. Width & Height */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <Image
              src="/images/dip.png"
              alt="Sofian Hasan profile"
              width={300}
              height={400}
              className="mx-auto rounded-xl object-cover"
            />

            <h2 className="mt-5 text-xl font-bold">Width & Height</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Define the intrinsic dimensions of an image using the
              <code className="mx-1 text-pink-400">width</code> and
              <code className="mx-1 text-pink-400">height</code> properties.
            </p>
          </article>

          {/* 2. Fill */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="relative h-72 overflow-hidden rounded-xl">
              <Image
                src="/images/me.jpg"
                alt="Sofian Hasan"
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            <h2 className="mt-5 text-xl font-bold">Fill</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              The
              <code className="mx-1 text-pink-400">fill</code>
              property makes the image fill its parent container.
            </p>
          </article>

          {/* 3. Priority */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <Image
              src="/images/sofian.png"
              alt="Sofian Hasan portrait"
              width={300}
              height={400}
              priority
              className="mx-auto rounded-xl object-cover"
            />

            <h2 className="mt-5 text-xl font-bold">Priority</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              The
              <code className="mx-1 text-pink-400">priority</code>
              property tells Next.js that an important image should load
              earlier.
            </p>
          </article>

          {/* 4. Loading */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <Image
              src="/images/dip.png"
              alt="Profile image"
              width={300}
              height={400}
              loading="eager"
              className="mx-auto rounded-xl object-cover"
            />

            <h2 className="mt-5 text-xl font-bold">Loading</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              The
              <code className="mx-1 text-pink-400">loading</code>
              property controls when the browser loads the image.
            </p>
          </article>

          {/* 5. Quality */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <Image
              src="/images/me.jpg"
              alt="Sofian Hasan"
              width={400}
              height={400}
              quality={60}
              className="mx-auto rounded-xl object-cover"
            />

            <h2 className="mt-5 text-xl font-bold">Quality</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              The
              <code className="mx-1 text-pink-400">quality</code>
              property controls the requested image quality during optimization.
            </p>
          </article>

          {/* 6. Responsive Sizes */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1788371642972-cd2eda4805ac"
                alt="Modern workspace"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <h2 className="mt-5 text-xl font-bold">Responsive Sizes</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              The
              <code className="mx-1 text-pink-400">sizes</code>
              property tells Next.js how much space the image occupies at
              different screen sizes.
            </p>
          </article>

          {/* 7. Placeholder */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <Image
              src={dipImage}
              placeholder="blur"
              alt="Profile image"
              width={300}
              height={400}
              // src="/images/dip.png"
              // blurDataURL="data:image/jpeg;base64,..."
              className="mx-auto rounded-xl object-cover"
            />

            <h2 className="mt-5 text-xl font-bold">Blur Placeholder</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              The
              <code className="mx-1 text-pink-400">placeholder="blur"</code>
              option displays a blurred preview while the image loads.
            </p>
          </article>

          {/* 8. Styling */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <Image
              src="/images/sofian.png"
              alt="Sofian Hasan"
              width={300}
              height={400}
              className="mx-auto rounded-full border-4 border-pink-500/30 object-cover shadow-xl"
            />

            <h2 className="mt-5 text-xl font-bold">Styling</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Use
              <code className="mx-1 text-pink-400">className</code>
              to apply Tailwind CSS classes and customize the appearance of the
              image.
            </p>
          </article>

          {/* 9. Unoptimized */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <Image
              src="/images/me.jpg"
              alt="Sofian Hasan"
              width={400}
              height={400}
              unoptimized
              className="mx-auto rounded-xl object-cover"
            />

            <h2 className="mt-5 text-xl font-bold">Unoptimized</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              The
              <code className="mx-1 text-pink-400">unoptimized</code>
              property tells Next.js to serve the image without its normal image
              optimization process.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default ImagePropertiesPage;

/* 
  app/about/page.tsx → creates the /about route
  Link → navigates to /about
   
  File-based routing → folder structure determines the URL

*/

export const metadata = {
  title: "About | Sofian Hasan",
  description:
    "Learn more about Sofian Hasan, his Next.js learning journey, web development interests, and the projects he is building.",

  keywords: [
    "Sofian Hasan",
    "About Sofian Hasan",
    "Next.js Developer",
    "React Developer",
    "Full-Stack Developer",
    "Web Development",
    "Next.js Learning Journey",
  ],

  openGraph: {
    title: "About | Next.js Learning Journal",
    description:
      "Learn more about Sofian Hasan, his Next.js learning journey, web development interests, and projects.",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "About | Next.js Learning Journal",
    description:
      "Learn more about Sofian Hasan and his Next.js learning journey.",
  },

  robots: { index: true, follow: true },
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-12">
          <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-400">
            Pages & Routing
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            About Me
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Welcome to my Next.js learning project. This page demonstrates how
            pages are created and connected using file-based routing.
          </p>
        </div>

        {/* About Card */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Md. Sofian Hasan</h2>
          <p className="mt-4 leading-8 text-slate-400">
            I am a Full-Stack Web Developer interested in building modern,
            scalable, and user-focused web applications. I work with
            technologies such as React, Next.js, Nest.js, Node.js, Express,
            PostgreSQL, MongoDB, and TypeScript.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            This project is part of my Next.js learning journey, where I am
            practicing the fundamentals of the App Router, Routing, Pages,
            Layouts, Dynamic Routes, Data Fetching, Rendering, Server & Client
            Components, Image Optimization, Metadata, and Dynamic pages.
          </p>
        </section>

        {/* Routing Explanation */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <span className="text-sm font-semibold text-pink-400">Route</span>

            <h2 className="mt-2 text-xl font-bold">/about</h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              This page is available at the <code>/about</code> URL because the
              page component is placed inside the <code>app/about</code>
              folder.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <span className="text-sm font-semibold text-violet-400">
              Navigation
            </span>

            <h2 className="mt-2 text-xl font-bold">Next.js Link</h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              The homepage uses Next.js <code>Link</code> to navigate to this
              page without manually handling browser navigation.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;

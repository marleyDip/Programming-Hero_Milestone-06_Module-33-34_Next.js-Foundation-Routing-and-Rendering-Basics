import Counter from "@/components/Counter";

export const metadata = {
  title: "Dashboard | Sofian Hasan",
  description:
    "Manage and monitor your application from the Next.js dashboard.",

  robots: { index: false, follow: false },
};

/* const DashboardPage = () => {
  // console.log("Dashboard page rendered");
  // Server  Dashboard page rendered

  return (
    <div>
      <h2 className="text-4xl bg-linear-to-bl from-red-400 to-green-400 bg-clip-text text-transparent pb-5">
        Dashboard Page
      </h2>

      <Counter />

      <ul className="mt-10 p-10 border border-amber-400 rounded-2xl shadow-xl">
        <li>Dashboard item 1</li>
        <li>Dashboard item 2</li>
        <li>Dashboard item 3</li>
      </ul>
    </div>
  );
};

export default DashboardPage; */

const DashboardPage = () => {
  // Server Component
  // This component does NOT need "use client".

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Server Component
          </div>

          <h1 className="bg-linear-to-r from-orange via-secondary to-foreground bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Dashboard Page
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            This page is a Server Component, but it renders a Client Component
            below for interactive state and event handling.
          </p>
        </div>

        {/* Component Architecture */}
        <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/10 backdrop-blur-sm">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Component Architecture
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              Server → Client
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            {/* Server */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Server Component
              </span>

              <h3 className="mt-2 text-lg font-semibold text-white">
                DashboardPage
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Can render normally without{" "}
                <code className="rounded bg-slate-800 px-1.5 py-0.5 text-pink-400">
                  "use client"
                </code>
                .
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden text-center text-2xl text-slate-600 sm:block">
              →
            </div>

            {/* Client */}
            <div className="rounded-xl border border-pink-500/20 bg-pink-500/5 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                Client Component
              </span>

              <h3 className="mt-2 text-lg font-semibold text-white">Counter</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Uses{" "}
                <code className="rounded bg-slate-800 px-1.5 py-0.5 text-pink-400">
                  useState
                </code>{" "}
                and{" "}
                <code className="rounded bg-slate-800 px-1.5 py-0.5 text-pink-400">
                  onClick
                </code>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Counter */}
        <Counter />

        {/* Dashboard Items */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
          <div className="border-b border-slate-800 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Server-rendered content
            </p>

            <h2 className="mt-1 text-xl font-semibold text-white">
              Dashboard Items
            </h2>
          </div>

          <ul className="divide-y divide-slate-800">
            <li className="flex items-center gap-3 px-6 py-4 text-slate-300 transition hover:bg-slate-800/50">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-sm text-orange-400">
                01
              </span>
              Dashboard item 1
            </li>

            <li className="flex items-center gap-3 px-6 py-4 text-slate-300 transition hover:bg-slate-800/50">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-sm text-pink-400">
                02
              </span>
              Dashboard item 2
            </li>

            <li className="flex items-center gap-3 px-6 py-4 text-slate-300 transition hover:bg-slate-800/50">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-sm text-violet-400">
                03
              </span>
              Dashboard item 3
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default DashboardPage;

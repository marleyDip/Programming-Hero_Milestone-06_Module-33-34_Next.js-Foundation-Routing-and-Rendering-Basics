/*
API
 ↓
lib/foods.ts
 ↓
 ├── Foods Page
 │      ↓
 │   FoodCard
 │
 └── Food Details Page
        ↓
     Food Details
*/

import { getFoods } from "@/lib/foods";
import Link from "next/link";
import FoodCard from "../components/FoodCard";

export const metadata = {
  title: "Foods | Sofian Hasan",
  description:
    "Explore a curated collection of delicious dishes, cuisines, ingredients, nutrition information, prices, and cooking details.",
  keywords: [
    "Foods",
    "Food Menu",
    "Food Recipes",
    "World Cuisine",
    "Food Details",
    "Nutrition",
    "Next.js Food App",
  ],

  openGraph: {
    title: "Foods | Next.js Learning Journal",
    description:
      "Explore delicious dishes with ingredients, nutrition, cuisine, pricing, and cooking information.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Foods | Next.js Learning Journal",
    description:
      "Explore dishes, cuisines, ingredients, nutrition, and cooking information.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const FoodsPage = async () => {
  const foods = await getFoods();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 px-6 py-12 shadow-2xl shadow-black/10 sm:px-10 lg:px-14">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-pink-400">
              Discover • Taste • Explore
            </span>

            <h1 className="mt-5 bg-linear-to-r from-orange via-secondary to-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Explore Delicious Foods
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Discover dishes from different cuisines with detailed ingredients,
              nutrition information, pricing, ratings, and cooking insights.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                <p className="text-2xl font-bold text-white">{foods.length}</p>
                <p className="text-xs text-slate-500">Featured Foods</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                <p className="text-2xl font-bold text-white">∞</p>
                <p className="text-xs text-slate-500">Flavors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Header */}
        <section className="mt-12">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">
                Featured Menu
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                Today's Selection
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              Freshly loaded from the phi-lab food API
            </p>
          </div>

          {/* Food Grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* Test Not Found Food */}
            <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-pink-500/30">
              {/* Image Area */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-slate-950 to-pink-950/20">
                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

                {/* Category Badge */}
                <span className="absolute left-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-400 backdrop-blur-md">
                  Test Food
                </span>

                {/* Placeholder */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/80 text-3xl text-slate-500 shadow-xl">
                  🍽️
                </div>

                {/* Test Badge */}
                <span className="absolute bottom-4 right-4 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-400 backdrop-blur-md">
                  Demo
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Title + Rating */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-white transition duration-300 group-hover:text-pink-400">
                      Food Not Found Test
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Invalid food ID
                    </p>
                  </div>

                  <span className="shrink-0 rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-500">
                    —
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-400">
                  Test the custom Food Not Found page by opening an invalid food
                  ID. This card is only for development and testing.
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-800 pt-5">
                  <div>
                    <p className="text-xs text-slate-500">Test Route</p>

                    <p className="mt-1 text-sm font-semibold text-slate-300">
                      /foods/999999
                    </p>
                  </div>

                  <Link
                    href="/foods/999999"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-linear-to-r from-pink-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-950/20 transition duration-300 hover:from-pink-500 hover:to-violet-500 hover:shadow-pink-500/20"
                  >
                    Test
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>

            {/* Real Food Cards */}
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default FoodsPage;

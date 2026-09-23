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

import { getFoodById } from "@/lib/foods";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// interface FoodDetailsPageProps {
//   params: Promise<{
//     foodId: string;
//   }>;
// }

// export async function generateMetadata({ params, }: FoodDetailsPageProps): Promise<Metadata> {}

export async function generateMetadata({ params }) {
  const { foodId } = await params;

  const food = await getFoodById(foodId);

  if (!food) {
    return {
      title: "Food Not Found",
      description: "The requested food could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: food.dish_name,
    description: `Explore ${food.dish_name}, including its ingredients, cuisine, nutrition information, price, rating, and cooking details.`,
    keywords: [
      food.dish_name,
      food.cuisine,
      food.category,
      "Food Details",
      "Nutrition",
      "Ingredients",
      "Cooking",
    ],

    openGraph: {
      title: `${food.dish_name} | Food Details`,
      description: `Explore ingredients, nutrition, pricing, cuisine, and cooking information for ${food.dish_name}.`,
      type: "article",

      images: [
        {
          url: food.image_link,
          alt: food.dish_name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${food.dish_name} | Food Details`,
      description: `Explore detailed information about ${food.dish_name}.`,
      images: [food.image_link],
    },
  };
}

// const FoodDetailsPage = async ({ params }: FoodDetailsPageProps) => {}

const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;

  const food = await getFoodById(foodId);

  if (!food) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <Link
          href="/foods"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-pink-400"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Foods
        </Link>

        {/* Main Card */}
        <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/20">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-100 lg:min-h-150">
              <Image
                src={food.image_link}
                alt={food.dish_name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-semibold capitalize text-white backdrop-blur-md">
                  {food.category}
                </span>

                <span className="rounded-full border border-amber-300/20 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-amber-300 backdrop-blur-md">
                  ★ {food.rating}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">
                {food.cuisine}
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {food.dish_name}
              </h1>

              <p className="mt-5 leading-8 text-slate-400">
                {food.origin_and_popularity}
              </p>

              {/* Price & Rating */}
              <div className="mt-7 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                {/* Price */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Estimated Price
                  </p>

                  <p className="mt-1 text-3xl font-bold text-white">
                    ৳{food.price}
                  </p>
                </div>

                {/* Rating */}
                <div className="rounded-xl bg-pink-500/10 px-4 py-3 text-right">
                  <p className="text-xs text-slate-500">Rating</p>
                  <p className="mt-1 font-semibold text-amber-300">
                    ★ {food.rating}/5
                  </p>
                </div>
              </div>

              {/* Alternative Names */}
              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Also Known As
                </h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  {food.alternative_names.map((name) => (
                    <span
                      key={name}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-400"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="border-t border-slate-800 p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Ingredients */}
              <section>
                <h2 className="text-2xl font-bold text-white">
                  Main Ingredients
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {food.main_ingredients.map((ingredient) => (
                    <div
                      key={ingredient}
                      className="rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-400"
                    >
                      <span className="mr-2 text-pink-400">•</span>
                      {ingredient}
                    </div>
                  ))}
                </div>
              </section>

              {/* Nutrition */}
              <section>
                <h2 className="text-2xl font-bold text-white">Nutrition</h2>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <NutritionItem
                    label="Calories"
                    value={food.approximate_nutrition_per_serving.calories}
                  />

                  <NutritionItem
                    label="Protein"
                    value={food.approximate_nutrition_per_serving.protein}
                  />

                  <NutritionItem
                    label="Carbs"
                    value={food.approximate_nutrition_per_serving.carbohydrates}
                  />

                  <NutritionItem
                    label="Fat"
                    value={food.approximate_nutrition_per_serving.fat}
                  />

                  <NutritionItem
                    label="Fiber"
                    value={food.approximate_nutrition_per_serving.fiber}
                  />
                </div>
              </section>
            </div>

            {/* Cooking Steps */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white">Cooking Steps</h2>

              <div className="mt-6 space-y-4">
                {food.cooking_steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-pink-500/20 to-violet-500/20 text-sm font-bold text-pink-400">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-7 text-slate-400">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
};

const NutritionItem = ({ label, value }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>

      <p className="mt-2 text-sm font-semibold text-slate-200">{value}</p>
    </div>
  );
};

export default FoodDetailsPage;

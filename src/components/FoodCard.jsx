import Image from "next/image";
import Link from "next/link";

// interface FoodCardProps {
//   food: Food;
// }

// const FoodCard = ({ food }: FoodCardProps) => {

const FoodCard = ({ food }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-2xl hover:shadow-pink-950/20">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={food.image_link}
          alt={food.dish_name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold capitalize text-white backdrop-blur-md">
            {food.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-amber-300/20 bg-slate-950/70 px-3 py-1.5 text-sm font-semibold text-amber-300 backdrop-blur-md">
          <span>★</span>
          {food.rating}
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <p className="text-xs font-medium text-slate-300">Starting from</p>

          <p className="mt-1 text-2xl font-bold text-white">৳{food.price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-pink-400 line-clamp-2">
          {food.cuisine}
        </p>

        <h2 className="mt-2 line-clamp-2 text-xl font-bold leading-7 text-white">
          {food.dish_name}
        </h2>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
          {food.origin_and_popularity}
        </p>

        {/* Ingredients */}
        <div className="mt-5 flex flex-wrap gap-2">
          {food.main_ingredients.slice(0, 3).map((ingredient) => (
            <span
              key={ingredient}
              className="rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-400"
            >
              {ingredient}
            </span>
          ))}

          {food.main_ingredients.length > 3 && (
            <span className="rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-500">
              +{food.main_ingredients.length - 3} more
            </span>
          )}
        </div>

        {/* Action */}
        <Link
          href={`/foods/${food.id}`}
          className="group/link mt-6 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm font-semibold text-slate-300 transition duration-300 hover:border-pink-500/30 hover:bg-pink-500/10 hover:text-pink-400"
        >
          <span>View Details</span>

          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default FoodCard;

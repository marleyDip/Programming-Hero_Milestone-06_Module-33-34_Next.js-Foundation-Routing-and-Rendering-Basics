import { getFoodById } from "@/lib/foods";
import { notFound } from "next/navigation";

const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;
  console.log(foodId);

  const food = await getFoodById(foodId);

  console.log(food);

  if (!food) {
    notFound();
  }

  return (
    <div>
      <h2>{foodId}</h2>
    </div>
  );
};

export default FoodDetailsPage;

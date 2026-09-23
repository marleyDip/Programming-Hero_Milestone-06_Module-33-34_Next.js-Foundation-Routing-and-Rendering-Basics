import FoodCard from "../components/FoodCard";

const FoodsPage = async () => {
  // console.log("Foods page rendered"); //  Server  Foods page rendered

  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
  );
  const data = await res.json();

  // console.log("Food Data", data);
  // { status: 'success', message: 'Issues fetched successfully', data: Array(4) }

  const foods = data.data;
  // console.log("Foods Data", foods);

  /*
    {
        alternative_names: ['Mediterranean Chicken Rice Plate', 'Chicken Rice Power Bowl', 'Grilled Chicken over Rice with Cucumber Tomato Salad']

        approximate_nutrition_per_serving: { calories: '550-750 kcal', protein: '35-45 g', carbohydrates: '60-80 g', fat: '20-30 g', fiber: '5-8 g'}

        category: "dish"
        cooking_steps: ['Marinate chicken drumsticks with olive oil, minced…pepper (30 minutes to overnight for best flavor).', 'Cook rice in water or broth with a pinch of salt (…utter for color and flavor). Fluff and set aside.', 'Grill the marinated chicken (grill pan, oven at 20…ed outside and internal temperature reaches 75°C.', 'Prepare fresh veggies: dice/slice cucumber, halve …erry tomatoes, slice red onion, cube bell pepper.', 'Toss the chopped vegetables lightly with olive oil…mon juice, salt, pepper, and chopped fresh herbs.', 'Assemble the bowl: Place a bed of warm rice, top w…g, and garnish with extra herbs or a lemon wedge.']
        
        cuisine: "Mediterranean-inspired (with Greek/Middle Eastern influences)"
        dish_name: "Grilled Chicken Rice Bowl with Fresh Veggie Salad"
        id: "food_001"
        
        image_link: "https://res.cloudinary.com/dj493l0jy/image/upload/v1773986441/foods/672baf2f-8c93-4d9f-a255-f097b77fc8dc.png"
        
        main_ingredients: ['Cooked rice (basmati or long-grain)', 'Grilled chicken drumstick (skin-on)', 'Cucumber (cubed/sliced)', 'Cherry tomatoes (halved)', 'Red onion (sliced)', 'Bell pepper (orange/yellow, cubed)', 'Fresh parsley or cilantro', 'Olive oil', 'Lemon juice', 'Garlic', 'Salt, pepper, herbs (oregano/paprika)']
        
        origin_and_popularity: "Popular in US, Europe, Australia; commonly adapted in urban South Asia including Bangladesh as a healthy bowl meal"
        possible_price_in_dhaka: {home_cooked: 'BDT 150-300', street_food_or_small_restaurant: 'BDT 250-450', cafe_or_healthy_eatery: 'BDT 400-700'}
        price: 300
        rating: 5
    }
  */

  return (
    <div>
      <h2>Menu Page</h2>

      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodsPage;

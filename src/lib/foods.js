/*  
  my-nextjs-app/
  ├── src/       <-- If using src layout (otherwise these go at root)
  │   ├── app/           <-- Keep this strictly for routing and pages
  │   │   ├── page.tsx
  │   │   └── layout.tsx
  │   ├── lib/    <-- Global utility functions, API clients, DB config
  │   │   └── prisma.ts
  │   └── types/     <-- Global TypeScript interfaces and types
  │       └── index.d.ts
*/

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

const FOODs_API = "https://phi-lab-server.vercel.app/api/v1/lab/foods/";

/* interface FoodsResponse { 
    status: string; 
    message: string; 
    data: Food[]; 
} */

// export const getFoods = async (): Promise<Food[]> => {

export const getFoods = async () => {
  const response = await fetch(FOODs_API, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new error(`Failed to fetch foods: ${response.status}`);
  }

  const result = await response.json();

  return result.data;
};

// export const getFoodById = async ( foodId: string, ): Promise<Food | undefined> => {}

export const getFoodById = async (foodId) => {
  const foods = await getFoods();

  return foods.find((food) => food.id === foodId);
};

/* Why this is better

Instead of doing this in multiple pages:

    const res = await fetch(...);
    const data = await res.json();

you now simply do:

    const foods = await getFoods();

    and:

    const food = await getFoodById(foodId);

Your pages don't need to know where the API lives.
*/

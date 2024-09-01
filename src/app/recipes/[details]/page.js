import RecipeDetails from "@/components/RecipeDetails";

export async function fetchingRData({ details }) {
  try {
    const Reacipesdata = await fetch(
      `https://dummyjson.com/recipes/${details}`
    );
    const data = await Reacipesdata.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export default async function recipes({ params }) {
  const { details } = params;
  const recipeData = await fetchingRData({ details });
  return (
    <div className="container mx-auto py-12">
      <RecipeDetails recipe={recipeData} />
    </div>
  );
}

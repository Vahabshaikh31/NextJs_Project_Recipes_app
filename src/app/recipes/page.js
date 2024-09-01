import RecipeList from "@components/recipe-list";

export async function fetchingRData() {
  try {
    const Reacipesdata = await fetch("https://dummyjson.com/recipes");
    const data = await Reacipesdata.json();
    return data?.recipes;
  } catch (error) {
    console.error(error);
  }
}

export default async function RecipesPage() {
  const recipesData = await fetchingRData();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Recipes</h1>
      <RecipeList recipesData={recipesData} />
    </div>
  );
}

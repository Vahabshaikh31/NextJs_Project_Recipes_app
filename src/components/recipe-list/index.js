import Link from "next/link";

export default function RecipeList({ recipesData }) {
  return (
    <>
      <div className="mb-4 flex justify-between">
        <Link href="/" className="text-blue-500 hover:underline">
          Home
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {recipesData.map((recipe) => (
          <Link href={`/recipes/${recipe.id}`}>
            <div
              key={recipe.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={recipe.image}
                alt={recipe.name}
              />
              <div className="p-4">
                <h1 className="text-xl font-semibold mb-2">{recipe.name}</h1>
                <h2 className="text-gray-600 text-sm">{recipe.tags[0]}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

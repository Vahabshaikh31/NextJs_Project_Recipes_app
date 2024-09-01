import Link from "next/link";
import React from "react";

export default function RecipeDetails({ recipe }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4 flex justify-between">
        <Link href="/recipes" className="text-blue-500 hover:underline">
          Back to Recipes
        </Link>
        <Link href="/" className="text-blue-500 hover:underline">
          Home
        </Link>
      </div>
      <img
        className="w-full h-64 object-cover rounded-md mb-6"
        src={recipe.image}
        alt={recipe.name}
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <span className="text-gray-600">Cuisine: {recipe.cuisine}</span>
        <span className="text-gray-600">Difficulty: {recipe.difficulty}</span>
        <span className="text-gray-600">
          Rating: {recipe.rating} ⭐ ({recipe.reviewCount} reviews)
        </span>
      </div>
      <p className="text-gray-800 mb-4">
        Calories per serving: {recipe.caloriesPerServing}
      </p>
      <p className="text-gray-800 mb-4">
        Prep Time: {recipe.prepTimeMinutes} minutes | Cook Time:{" "}
        {recipe.cookTimeMinutes} minutes
      </p>
      <p className="text-gray-800 mb-6">Servings: {recipe.servings}</p>

      <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="text-gray-700 mb-2">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
}

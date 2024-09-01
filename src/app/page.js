import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to Recipes App
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover delicious recipes and create your own culinary masterpieces.
        </p>
        <Link
          href="/recipes"
          className="text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded"
        >
        Explore Recipes
        </Link>
      </div>
    </div>
  );
}

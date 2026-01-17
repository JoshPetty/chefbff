import { createClient } from "@/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createClient();

  const { data: recipe } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", id)
    .single();

  if (!recipe) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              ChefBFF
            </Link>
            <Link
              href="/recipes"
              className="text-orange-600 hover:text-orange-700 font-semibold"
            >
              ← Back to Recipes
            </Link>
          </div>
        </div>
      </nav>

      {/* Recipe Detail */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Image */}
          {recipe.image_url && (
            <img
              src={recipe.image_url}
              alt={recipe.title}
              className="w-full h-96 object-cover"
            />
          )}
          {!recipe.image_url && (
            <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center">
              <span className="text-9xl">🍳</span>
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {recipe.title}
            </h1>

            {recipe.description && (
              <p className="text-xl text-gray-600 mb-8">{recipe.description}</p>
            )}

            {/* Ingredients */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients?.map((ingredient: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start"
                  >
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Instructions
              </h2>
              <ol className="space-y-4">
                {recipe.instructions?.map((instruction: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
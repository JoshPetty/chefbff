"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewRecipePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [instructions, setInstructions] = useState<string[]>([""]);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Add ingredient field
  function addIngredient() {
    setIngredients([...ingredients, ""]);
  }

  // Update ingredient at index
  function updateIngredient(index: number, value: string) {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  }

  // Remove ingredient at index
  function removeIngredient(index: number) {
    setIngredients(ingredients.filter((_, i) => i !== index));
  }

  // Add instruction field
  function addInstruction() {
    setInstructions([...instructions, ""]);
  }

  // Update instruction at index
  function updateInstruction(index: number, value: string) {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  }

  // Remove instruction at index
  function removeInstruction(index: number) {
    setInstructions(instructions.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      let imageUrl = null;

      // Upload image if provided
      if (image) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("recipe-images")
          .upload(filePath, image);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data } = supabase.storage
          .from("recipe-images")
          .getPublicUrl(filePath);

        imageUrl = data.publicUrl;
      }

      // Filter out empty ingredients and instructions
      const cleanIngredients = ingredients.filter((i) => i.trim() !== "");
      const cleanInstructions = instructions.filter((i) => i.trim() !== "");

      // Insert recipe
      const { error: insertError } = await supabase.from("recipes").insert({
        title,
        description,
        ingredients: cleanIngredients,
        instructions: cleanInstructions,
        image_url: imageUrl,
      });

      if (insertError) throw insertError;

      // Success! Redirect to recipes page
      router.push("/recipes");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
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
          </div>
        </div>
      </nav>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Add New Recipe</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Recipe Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none"
              placeholder="e.g., Grandma's Chocolate Chip Cookies"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none"
              placeholder="Tell us about this recipe..."
              rows={3}
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ingredients *
            </label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => updateIngredient(index, e.target.value)}
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 outline-none"
                  placeholder="e.g., 2 cups flour"
                />
                {ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeIngredient(index)}
                    className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="mt-2 text-orange-600 hover:text-orange-700 font-medium"
            >
              + Add Ingredient
            </button>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Instructions *
            </label>
            {instructions.map((instruction, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <span className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 rounded-full font-semibold flex-shrink-0 mt-2">
                  {index + 1}
                </span>
                <textarea
                  value={instruction}
                  onChange={(e) => updateInstruction(index, e.target.value)}
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-500 outline-none"
                  placeholder="Describe this step..."
                  rows={2}
                />
                {instructions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeInstruction(index)}
                    className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addInstruction}
              className="mt-2 text-orange-600 hover:text-orange-700 font-medium"
            >
              + Add Step
            </button>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Recipe Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 outline-none"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:from-orange-600 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            {loading ? "Creating Recipe..." : "Create Recipe"}
          </button>
        </form>
      </div>
    </div>
  );
}
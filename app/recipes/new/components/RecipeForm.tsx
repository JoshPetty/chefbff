"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Container } from "./styles";

export function RecipeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [instructions, setInstructions] = useState<string[]>([""]);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function addIngredient() {
    setIngredients([...ingredients, ""]);
  }

  function updateIngredient(index: number, value: string) {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  }

  function removeIngredient(index: number) {
    setIngredients(ingredients.filter((_, i) => i !== index));
  }

  function addInstruction() {
    setInstructions([...instructions, ""]);
  }

  function updateInstruction(index: number, value: string) {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  }

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

      if (image) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("recipe-images")
          .upload(filePath, image);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("recipe-images")
          .getPublicUrl(filePath);

        imageUrl = data.publicUrl;
      }

      const cleanIngredients = ingredients.filter((i) => i.trim() !== "");
      const cleanInstructions = instructions.filter((i) => i.trim() !== "");

      const { error: insertError } = await supabase.from("recipes").insert({
        title,
        description,
        ingredients: cleanIngredients,
        instructions: cleanInstructions,
        image_url: imageUrl,
      });

      if (insertError) throw insertError;

      router.push("/recipes");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} className="recipe-form">
        {/* Title */}
        <div className="form-group">
          <label className="form-label">Recipe Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            placeholder="e.g., Grandma's Chocolate Chip Cookies"
            required
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            placeholder="Tell us about this recipe..."
            rows={3}
          />
        </div>

        {/* Ingredients */}
        <div className="form-group">
          <label className="form-label">Ingredients *</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="dynamic-field">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => updateIngredient(index, e.target.value)}
                className="form-input"
                placeholder="e.g., 2 cups flour"
              />
              {ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="add-button"
          >
            + Add Ingredient
          </button>
        </div>

        {/* Instructions */}
        <div className="form-group">
          <label className="form-label">Instructions *</label>
          {instructions.map((instruction, index) => (
            <div key={index} className="dynamic-field with-number">
              <span className="step-number">{index + 1}</span>
              <textarea
                value={instruction}
                onChange={(e) => updateInstruction(index, e.target.value)}
                className="form-textarea"
                placeholder="Describe this step..."
                rows={2}
              />
              {instructions.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeInstruction(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addInstruction}
            className="add-button"
          >
            + Add Step
          </button>
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label className="form-label">Recipe Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="form-file"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="submit-button"
        >
          {loading ? "Creating Recipe..." : "Create Recipe"}
        </button>
      </form>
    </Container>
  );
}
import Link from "next/link";
import { Container } from "./styles";
import { RecipeCard } from "../RecipeCard/RecipeCard";

interface Recipe {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  ingredients: string[] | null;
}

interface FeaturedRecipesProps {
  recipes: Recipe[];
}

export function FeaturedRecipes({ recipes }: FeaturedRecipesProps) {
  if (!recipes || recipes.length === 0) return null;

  return (
    <Container>
      <div className="featured-header">
        <div>
          <h2>Available Recipes</h2>
          <p>Handpicked from our community</p>
        </div>
        <Link href="/recipes" className="view-all">
          View all →
        </Link>
      </div>

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </Container>
  );
}
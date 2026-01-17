import Link from "next/link";
import { Container } from "./styles";

interface Recipe {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  ingredients: string[] | null;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Container>
      <Link href={`/recipes/${recipe.id}`} className="recipe-link">
        <div className="image-container">
          {recipe.image_url ? (
            <img
              src={recipe.image_url}
              alt={recipe.title}
              className="recipe-image"
            />
          ) : (
            <div className="placeholder-image">
              <span className="emoji">🍳</span>
            </div>
          )}
        </div>
        
        <div className="recipe-content">
          <h3 className="recipe-title">{recipe.title}</h3>
          
          {recipe.description && (
            <p className="recipe-description">{recipe.description}</p>
          )}
          
          <p className="recipe-meta">
            {recipe.ingredients?.length || 0} ingredients
          </p>
        </div>
      </Link>
    </Container>
  );
}
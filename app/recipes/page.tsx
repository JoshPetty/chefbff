import { createClient } from "@/lib/supabase";
import { Navigation } from "@/app/components/Navigation/Navigation";
import { Footer } from "@/app/components/Footer/Footer";
import { RecipesGrid } from "./components/RecipesGrid";

export default async function RecipesPage() {
  const supabase = createClient();
  
  const { data: recipes } = await supabase
    .from("recipes")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main style={{ paddingTop: '5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 2rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              color: '#111827',
              marginBottom: '0.5rem'
            }}>
              All Recipes
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
              {recipes?.length || 0} recipes shared by our community
            </p>
          </div>
          
          <RecipesGrid recipes={recipes || []} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
import { createClient } from "@/lib/supabase";
import { notFound } from "next/navigation";
import { Navigation } from "@/app/components/Navigation/Navigation";
import { Footer } from "@/app/components/Footer/Footer";
import { RecipeDetail } from "./components/RecipeDetail";
import Link from "next/link";

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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem' }}>
          {/* Back Button */}
          <Link 
            href="/recipes"
            className="back-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#86C540',
              fontWeight: '600',
              marginBottom: '2rem',
              transition: 'opacity 0.3s'
            }}
          >
            ← Back to Recipes
          </Link>

          <RecipeDetail recipe={recipe} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
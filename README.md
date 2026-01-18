# ChefBFF

A full-stack recipe sharing and discovery platform that combines user-generated content with AI-powered recipe matching.

## Overview

ChefBFF allows users to browse, share, and discover recipes through two powerful features:
- **Recipe Library**: Browse and share user-submitted recipes with images
- **AI Recipe Helper**: Get recipe recommendations based on available ingredients using machine learning

## Tech Stack

### Frontend
- **Next.js 16** (App Router)
- **React 19** with TypeScript
- **Tailwind CSS 4** - Utility-first styling
- **Styled Components 6** - Component-level styling
- **Supabase** - Database and storage

### Backend
- **Supabase** (PostgreSQL) - User-generated recipes and image storage
- **FastAPI** (Python) - ML-powered recipe matching service
- **Pandas** - Data processing
- **Scikit-learn** - TF-IDF and cosine similarity for recipe matching

## Features

### Recipe Library
- Browse all user-submitted recipes
- View detailed recipe information with ingredients and instructions
- Upload and share your own recipes with images
- Featured recipes on homepage

### AI Recipe Helper
- Enter available ingredients to find matching recipes
- Mark required ingredients (must-have items)
- Filter out recipes based on allergies
- Get match percentage scores
- See which ingredients you have vs need
- Powered by 50,000+ recipe dataset

## Project Structure

```
chefbff/
├── app/                          # Next.js App Router
│   ├── components/               # Shared UI components
│   │   ├── Navigation/          # Top navigation
│   │   ├── Hero/                # Landing page hero
│   │   ├── RecipeCard/          # Recipe card component
│   │   ├── FeaturedRecipes/     # Featured recipes grid
│   │   └── Footer/              # Footer component
│   ├── recipes/                 # Recipe pages
│   │   ├── page.tsx            # All recipes listing
│   │   ├── [id]/               # Individual recipe page
│   │   └── new/                # Create new recipe
│   ├── recipe-helper/           # AI recipe matcher
│   └── page.tsx                 # Homepage
├── python/                      # Python microservice
│   ├── main.py                  # FastAPI application
│   ├── matcher.py               # Recipe matching ML engine
│   └── requirements.txt         # Python dependencies
├── data/                        # Data storage
│   └── recipes.csv              # 50k+ recipe dataset (2.3GB)
├── lib/                         # Utility libraries
│   └── supabase.ts             # Supabase client config
└── public/                      # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+
- Supabase account

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd chefbff
```

2. Install Node.js dependencies
```bash
npm install
```

3. Set up Python environment
```bash
cd python
python -m venv venv
venv\Scripts\activate  # On Windows
# source venv/bin/activate  # On macOS/Linux
pip install -r requirements.txt
cd ..
```

4. Configure environment variables

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Set up Supabase

Create a `recipes` table in your Supabase project:
```sql
CREATE TABLE recipes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  ingredients TEXT[] NOT NULL,
  instructions TEXT[] NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

Create a storage bucket named `recipe-images` with public access.

6. Add the recipe dataset

Place your `recipes.csv` file in the `data/` directory. The CSV should contain columns for recipe titles, ingredients, and directions.

### Running the Application

1. Start the Next.js development server
```bash
npm run dev
```

2. In a separate terminal, start the Python FastAPI service
```bash
cd python
venv\Scripts\activate  # On Windows
# source venv/bin/activate  # On macOS/Linux
uvicorn main:app --reload
```

3. Access the application
- Frontend: http://localhost:3000
- FastAPI docs: http://localhost:8000/docs

## Architecture

### Data Flow

```
User Browser
    ↓
Next.js Frontend (Port 3000)
    ├─→ Supabase API
    │   ├─→ PostgreSQL Database (User recipes)
    │   └─→ Storage Buckets (Recipe images)
    │
    └─→ Python FastAPI Service (Port 8000)
        └─→ recipes.csv Dataset
            └─→ ML Matching (TF-IDF + Cosine Similarity)
```

### Recipe Matching Algorithm

The AI Recipe Helper uses:
- **TF-IDF Vectorization** - Transforms recipe ingredients into numerical vectors
- **Cosine Similarity** - Calculates similarity between user ingredients and recipe ingredients
- **Smart Filtering** - Excludes recipes with allergens and requires specified ingredients
- **Match Scoring** - Provides percentage match and lists missing ingredients

## API Endpoints

### FastAPI Service (Port 8000)

- `GET /` - Health check
- `POST /match` - Match recipes based on ingredients
  - Body: `{ ingredients: string[], allergies: string[], required_ingredients: string[], top_n: number }`
  - Returns: Matched recipes with scores and ingredient analysis
- `GET /health` - Service health and recipe count

## Deployment

### Frontend (Next.js)
Deploy to Vercel, Netlify, or any Node.js hosting platform:
```bash
npm run build
npm start
```

### Backend (FastAPI)
Deploy to services like Railway, Render, or AWS:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

Update the frontend to point to your deployed FastAPI URL.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Recipe dataset: 50,000+ recipes from public sources
- Built with Next.js, React, FastAPI, and Supabase

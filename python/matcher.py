import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import re

class RecipeMatcher:
    def __init__(self, dataset_path='../data/recipes.csv'):
        print("Loading dataset...")
        self.df = pd.read_csv(dataset_path, nrows=50000)  # Load first 50k for speed
        print(f"Loaded {len(self.df)} recipes")
        
        # Clean NER column
        self.df['NER'] = self.df['NER'].fillna('')
        self.df['NER'] = self.df['NER'].apply(self.clean_ingredients)
        
        # Create TF-IDF vectors
        print("Creating TF-IDF vectors...")
        self.vectorizer = TfidfVectorizer(max_features=5000)
        self.recipe_vectors = self.vectorizer.fit_transform(self.df['NER'])
        print("Ready to match!")
    
    def clean_ingredients(self, text):
        """Clean ingredient text"""
        if not isinstance(text, str):
            return ""
        # Convert to lowercase, remove special chars
        text = text.lower()
        text = re.sub(r'[^\w\s,]', '', text)
        return text
    
    def find_matches(self, user_ingredients, allergies=None, required_ingredients=None, top_n=10):
        """Find recipes matching user ingredients"""
        # Convert user input to string
        user_text = ' '.join([ing.lower().strip() for ing in user_ingredients])
        
        # Start with full dataset
        df_filtered = self.df.copy()
        
        # Filter out allergies
        if allergies:
            for allergy in allergies:
                allergy_lower = allergy.lower()
                df_filtered = df_filtered[~df_filtered['NER'].str.contains(allergy_lower, case=False, na=False)]
        
        # Filter for REQUIRED ingredients (must have ALL of these)
        if required_ingredients:
            for required in required_ingredients:
                required_lower = required.lower().strip()
                df_filtered = df_filtered[df_filtered['NER'].str.contains(required_lower, case=False, na=False)]
        
        # If no recipes left after filtering, return empty
        if len(df_filtered) == 0:
            return []
        
        # Update vectors if filtered
        if allergies or required_ingredients:
            filtered_vectors = self.vectorizer.transform(df_filtered['NER'])
        else:
            filtered_vectors = self.recipe_vectors
        
        # Calculate similarity
        user_vector = self.vectorizer.transform([user_text])
        similarities = cosine_similarity(user_vector, filtered_vectors)[0]
        
        # Get top matches
        df_filtered['match_score'] = similarities
        top_matches = df_filtered.nlargest(top_n, 'match_score')
        
        # Format results
        results = []
        user_set = set(ing.lower().strip() for ing in user_ingredients)
        
        for _, row in top_matches.iterrows():
            recipe_ingredients = set(row['NER'].split(','))
            recipe_ingredients = {ing.strip() for ing in recipe_ingredients if ing.strip()}
            
            has = user_set & recipe_ingredients
            needs = recipe_ingredients - user_set
            
            results.append({
                'title': row['title'],
                'match_score': round(row['match_score'] * 100, 1),
                'has_ingredients': sorted(list(has))[:10],  # Limit display
                'needs_ingredients': sorted(list(needs))[:10],
                'total_ingredients': len(recipe_ingredients),
                'directions': row.get('directions', 'No directions available'),
                'link': row.get('link', None),
                'source': row.get('source', 'Unknown')
            })
        
        return results

# Initialize matcher (load once on startup)
matcher = None

def get_matcher():
    global matcher
    if matcher is None:
        matcher = RecipeMatcher()
    return matcher
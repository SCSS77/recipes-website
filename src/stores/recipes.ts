import { defineStore } from 'pinia';
import { apiClient } from '@/main';
import { Recipe } from '@/interfaces/types';

const handleError = (error: unknown, context: string) => {
  if (error instanceof Error) {
    console.error(`Error ${context}:`, error.message);
  } else {
    console.error(`Error ${context}:`, error);
  }
};

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [] as Recipe[],
    query: '',
    recipeDetail: null as Recipe | null,
    recommendedRecipes: [] as Recipe[],
    newRecipes: [] as Recipe[],
    popularRecipes: [] as Recipe[],
  }),
  actions: {
    async searchRecipes() {
      try {
        const response = await apiClient.get('/complexSearch', {
          params: {
            query: this.query,
          },
        });
        this.recipes = response.data.results.map((recipe: Recipe) => ({
          ...recipe,
          isFavorite: false,
        }));
      } catch (error) {
        handleError(error, 'searching for recipes');
      }
    },

    toggleFavorite(recipeId: number) {
      const recipe = this.recipes.find(r => r.id === recipeId);
      if (recipe) {
        recipe.isFavorite = !recipe.isFavorite;
      }
    },

    async fetchRecipeDetail(recipeId: number) {
      try {
        const response = await apiClient.get(`/${recipeId}/information`);
        this.recipeDetail = response.data;
      } catch (error) {
        handleError(error, 'fetching recipe detail');
      }
    },

    async fetchRecipes(type: string, params: Record<string, unknown>) {
      try {
        const response = await apiClient.get(type, { params });
        return response.data.recipes || response.data.results;
      } catch (error) {
        handleError(error, `fetching ${type} recipes`);
        return [];
      }
    },

    async fetchRecommendedRecipes() {
      this.recommendedRecipes = await this.fetchRecipes('random', { number: 4 });
    },

    async fetchNewRecipes() {
      this.newRecipes = await this.fetchRecipes('complexSearch', { sort: 'date', number: 4 });
    },

    async fetchPopularRecipes() {
      this.popularRecipes = await this.fetchRecipes('complexSearch', { sort: 'popularity', number: 4 });
    },
  },
});

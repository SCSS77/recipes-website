<template>
  <section class="home-section">
    <Search />
    <section v-if="!loading" class="recipes-section">
      <div class="recipes-section__category container">
        <div class="recipes-section__category-list">
          <RecipeCard v-for="recipe in recommendedRecipes" :key="recipe.id" :recipe="recipe" />
        </div>
      </div>
      <div class="recipes-section__category container">
        <h2 class="recipes-section__category-title">New Recipes</h2>
        <div class="recipes-section__category-list">
          <RecipeCard v-for="recipe in newRecipes" :key="recipe.id" :recipe="recipe" :isNew="true" />
        </div>
      </div>
      <div class="recipes-section__category container">
        <h2 class="recipes-section__category-title">Popular Recipes</h2>
        <div class="recipes-section__category-list">
          <RecipeCard v-for="recipe in popularRecipes" :key="recipe.id" :recipe="recipe" />
        </div>
      </div>
    </section>
    <div v-if="loading" class="loader">Loading...</div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Search from '@/components/Search.vue';
import { useRecipeStore } from '@/stores/recipes';

export default defineComponent({
  name: 'HomeView',
  components: {
    Search
  },
  setup() {
    const recipeStore = useRecipeStore();
    const loading = ref(true);

    onMounted(async () => {
      try {
        await Promise.all([
          recipeStore.fetchRecommendedRecipes(),
          recipeStore.fetchNewRecipes(),
          recipeStore.fetchPopularRecipes(),
        ]);
        loading.value = false;
      } catch (error) {
        console.error('Error loading recipes:', error);
        loading.value = false;
      }
    });

    return {
      loading,
      recommendedRecipes: recipeStore.recommendedRecipes,
      newRecipes: recipeStore.newRecipes,
      popularRecipes: recipeStore.popularRecipes
    };
  }
});
</script>

<style></style>

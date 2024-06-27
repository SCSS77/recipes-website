<template>
  <div class="favorites-section__container">
    <div class="favorites-section__content" v-if="favoriteRecipes.length === 0">
      <p>No favorite recipes found.</p>
    </div>
    <ul class="favorites-section__list" v-else>
      <li class="favorites-section__item" v-for="recipe in favoriteRecipes" :key="recipe.id">
        <img class="favorites-section__image" :src="recipe.image" :alt="recipe.title" />
        <div class="favorites-section__content">
          <h2 class="favorites-section__title">{{ recipe.title }}</h2>
          <button class="favorites-section__button" @click="removeFromFavorites(recipe.id)">Remove from Favorites</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRecipeStore } from '@/stores/recipes';

export default defineComponent({
  name: 'Favorites',
  setup() {
    const recipeStore = useRecipeStore();

    const favoriteRecipes = computed(() => {
      return recipeStore.recipes.filter(recipe => recipe.isFavorite);
    });

    const removeFromFavorites = (id: number) => {
      recipeStore.toggleFavorite(id);
    };

    return {
      favoriteRecipes,
      removeFromFavorites
    };
  }
});
</script>

<style></style>

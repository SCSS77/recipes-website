<template>
  <div class="recipe-card">
    <div class="recipe-card__image">
      <span v-if="isNew" class="recipes-section__category-badge">New</span>
      <img :src="recipe.image" :alt="recipe.title" height="365" width="548" />
    </div>
    <div class="recipe-card__details">
      <h3 class="recipe-card__title">{{ recipe.title }}</h3>
      <p class="recipe-card__description">{{ recipe.description }}</p>
      <router-link :to="`/recipe/${recipe.id}`" class="recipe-card__link">View Recipe</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Recipe } from '@interfaces/types';

export default defineComponent({
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      required: true,
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
});
</script>

<style></style>

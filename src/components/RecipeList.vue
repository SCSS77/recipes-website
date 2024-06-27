<template>
  <div class="recipes-section__container">
    <div class="recipes-section__loader" v-if="loading">Loading recipes...</div>
    <div class="recipes-section__no-found" v-else-if="recipes.length === 0">No recipes found.</div>
    <div class="recipes-section__item" v-else v-for="recipe in recipes" :key="recipe.id">
      <router-link :to="{ name: 'RecipeDetail', params: { id: recipe.id } }">
        <h2 class="recipes-section__title">{{ recipe.title }}</h2>
        <img class="recipes-section__image" :src="recipe.image" :alt="recipe.title" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'RecipeList',
  props: {
    recipes: {
      type: Array as PropType<Array<{ id: number; title: string; image: string }>>,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style></style>

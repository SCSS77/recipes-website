<template>
  <section class="recipe-section container" v-if="recipeDetail">
    <h1 class="recipe-section__title">{{ recipeDetail.title }}</h1>
    <img class="recipe-section__image" :src="recipeDetail.image" :alt="recipeDetail.title" />
    <p class="recipe-section__summary" v-html="recipeDetail.summary"></p>
    <h2 class="recipe-section__subtitle">Ingredients</h2>
    <ul class="recipe-section__list">
      <li class="recipe-section__item" v-for="ingredient in recipeDetail.extendedIngredients" :key="ingredient.id">
        {{ ingredient.original }}
      </li>
    </ul>
    <h2 class="recipe-section__subtitle">Instructions</h2>
    <div class="recipe-section__instructions" v-html="recipeDetail.instructions"></div>
  </section>
  <div class="recipe-section__loader" v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useRecipeStore } from '@/stores/recipes';

export default defineComponent({
  name: 'RecipeDetail',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const recipeStore = useRecipeStore();

    const loadRecipeDetail = async () => {
      await recipeStore.fetchRecipeDetail(Number(props.id));
    };

    watch(() => props.id, loadRecipeDetail, { immediate: true });

    return {
      recipeDetail: recipeStore.recipeDetail,
    };
  },
});
</script>

<style></style>

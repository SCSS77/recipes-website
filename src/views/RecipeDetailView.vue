<template>
  <div>
    <RecipeDetail :id="recipeId" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RecipeDetail from '@/components/RecipeDetail.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'RecipeDetailView',
  components: {
    RecipeDetail,
  },
  setup() {
    const route = useRoute();
    const recipeId = route.params.id;

    return {
      recipeId,
    };
  },
});
</script>

<style></style>

<template>
  <section class="favorites-section container">
    <h1>Favorites</h1>
    <Favorites />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Favorites from '@/components/Favorites.vue';

export default defineComponent({
  name: 'FavoritesView',
  components: {
    Favorites
  }
});
</script>

<style></style>

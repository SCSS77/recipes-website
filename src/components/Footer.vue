<template>
  <footer class="footer">
    <p class="footer_text">&copy; {{ currentYear }} Recipe App</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style></style>

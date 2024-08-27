<template>
  <section class="login-section container">
    <h1>Login</h1>
    <LoginForm />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/LoginForm.vue';

export default defineComponent({
  name: 'LoginView',
  components: {
    LoginForm,
  },
});
</script>

<style></style>

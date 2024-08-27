<template>
  <form class="login-section__form" @submit.prevent="login">
    <div class="login-section__form-fieldset">
      <label class="login-section__form-label" for="email">Email:</label>
      <input class="login-section__form-input" type="email" v-model="email" required />
    </div>
    <div>
      <label class="login-section__form-label" for="password">Password:</label>
      <input class="login-section__form-input" type="password" v-model="password" required />
    </div>
    <button class="login-section__form-button" type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const email = ref('');
    const password = ref('');

    const login = () => {
      console.log('Attempting login with:', email.value, password.value);
    };

    return {
      email,
      password,
      login,
    };
  },
});
</script>

<style></style>

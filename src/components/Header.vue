<template>
  <header class="header">
    <div class="header__container">
      <div class="container">
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item"><router-link to="/" class="header__link">Home</router-link></li>
            <li class="header__item"><router-link to="/recipes" class="header__link">Recipes</router-link></li>
            <li class="header__item"><router-link to="/create-recipe" class="header__link">Create Recipe</router-link></li>
          </ul>
        </nav>
        <nav class="header__nav header__nav--right">
          <ul class="header__list">
            <li class="header__item"><router-link to="/login" class="header__link">Login</router-link></li>
            <li class="header__item"><router-link to="/favorites" class="header__link">Favorites</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style></style>

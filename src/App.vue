<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoadingSpinner from './components/LoadingSpinner.vue';
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="brand">
        PokeAPI
      </RouterLink>

      <div>
        <RouterLink class="btn btn-dark" to="/">Home</RouterLink>
        <RouterLink class="btn btn-dark" to="/pokemons">Pokemons</RouterLink>
        <RouterLink class="btn btn-dark" to="/favorites">Favoritos</RouterLink>
      </div>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>


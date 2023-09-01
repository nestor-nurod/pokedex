<script setup>
import { useFavoriteStore } from '../store/favorites';

const useFavorites = useFavoriteStore()

</script>

<template>
    <div class="container mt-3">
        <h1 class="text-center mb-3">Pokemon Favoritos</h1>
        <div class="row text-center">
            <div v-for="pokemon in useFavorites.favorites" class="col-md-4">
                <div class="card mb-4">
                    <div class="card-header">
                        <h5>{{ pokemon.name }}</h5>
                    </div>
                    <div class="card-body">
                        <div>
                            <img class="card-img-top" style="width: 200px; height: auto; margin: 0 auto;"
                                :src="pokemon.sprites?.front_default" :alt="pokemon.name">
                        </div>
                        <div class="mb-3"></div>
                        <div><button class="btn btn-info me-2"><RouterLink :to="`/pokemons/${pokemon.name}`" class="fa fa-circle-info text-white"></RouterLink></button><button @click="useFavorites.removeFavorites(pokemon.id)" class="btn btn-danger"><i
                                    class="fa fa-ban"></i></button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
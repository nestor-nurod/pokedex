<script setup>
import axios from 'axios';
import {ref} from 'vue';
import {RouterLink} from 'vue-router';

import PokemonCard from '../components/PokemonCard.vue';

const pokemons = ref([]);

const getData = async () => {
    try {
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon")
        pokemons.value = data.results;
    } catch (error) {
        console.log(error)
    }
}
getData()

</script>

<template>
    <div class="container">
        <h1>Pokemons</h1>
        <div class="row">
            <ul>
                <li :id="index" v-for="(pokemon, index) in pokemons" :key="index"><RouterLink :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</RouterLink></li>
            </ul>
            
        </div>
    </div>
</template>
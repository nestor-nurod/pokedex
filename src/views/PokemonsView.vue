<script setup>
import {RouterLink} from 'vue-router';
import {useGetData} from '@/composables/getData';
import LoadingSpinner from '../components/LoadingSpinner.vue';


const {data, getData, loading, error} = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");

</script>

<template>
    <h1>Pokemons</h1>
    <div v-if="error" class="alert alert-danger" role="alert">
        Ha ocurrido un error al recuperar la información
    </div>
    <LoadingSpinner v-if="loading" class="mt-5"></LoadingSpinner>
    <div v-if="data" class="container">
        <div class="row">
            <ul class="list-group">
                <li class="list-group-item mb-1" :id="index" v-for="(pokemon, index) in data.results" :key="index"><RouterLink class="custom-link" :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</RouterLink></li>
            </ul>
            
        </div>
    </div>
    <div class="mt-3 text-center mb-5">
        <button :disabled="!data?.previous" @click="getData(data.previous)" class="btn btn-warning me-2">Prev</button>
    <button :disabled="!data?.next" @click="getData(data.next)" class="btn btn-primary">Sig</button>
    </div>
</template>

<style>
.custom-link{
    text-decoration: none;
}
</style>
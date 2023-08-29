<script setup>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { ref } from 'vue';


const pokemonInfo = ref({})

const route = useRoute()
const router = useRouter();

const back = () => {
    router.push('/pokemons')
}

const loading = ref(true)

const getPokemonData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
        pokemonInfo.value = data
        loading.value = false
    } catch (error) {
        console.log(error)
        pokemonInfo.value = null;
        loading.value = false
    }
}

getPokemonData()

</script>

<template>
    <LoadingSpinner v-if="loading" class="mt-5"></LoadingSpinner>
    <div v-else class="container">
        <div class="row text-center">
            <div v-if="pokemonInfo">
                <div class="col-md-12">
                    <h1>{{ $route.params.name }}</h1>
                </div>
                <div class="col-md-12">
                    <img style="width: 300px; height: auto;" :src="pokemonInfo.sprites?.front_default"
                        :alt="pokemonInfo.name">
                </div>
            </div>
            <div v-else class="col-md-12 mt-5">
                <h1>El pokemon ingresado no existe...</h1>
                <img src="@/assets/ditto.png" alt="ditto">
            </div>
            <div class="col-md-12">
                <button @click="back" class="btn btn-warning">Regresar</button>
            </div>
        </div>
    </div>
</template>
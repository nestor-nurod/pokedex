<script setup>
import { useRoute, useRouter } from 'vue-router';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { useGetData } from '@/composables/getData';
import { useFavoriteStore } from '../store/favorites';
import { computed, ref } from 'vue'



const route = useRoute()
const router = useRouter();
const usefavorites = useFavoriteStore()

const back = () => {
    router.push('/pokemons')
}


const { data, getData, loading, error } = useGetData()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

const setFavorite = computed(() => {
    if (usefavorites.findPokemon(route.params.name)) {
        return 'btn btn-danger active'

    } else {
        return 'btn btn-outline-danger'
    }
})

</script>

<template>
    <LoadingSpinner v-if="loading" class="mt-5"></LoadingSpinner>
    <div class="container">
        <div class="row text-center">
            <div v-if="data">
                <div style="margin: 0 auto;" class="col-md-6">
                    <div class="card border-primary mt-5">
                        <div class="card-header border-primary bg-primary text-white">
                            <h1 class="mt-2">{{ $route.params.name }}</h1>
                        </div>
                        <img class="card-img-top" style="width: 200px; height: auto; margin: 0 auto;"
                            :src="data.sprites?.front_default" :alt="data.name">
                        <div class="card-body">
                            <h5>Estadisticas base</h5>
                            <ul class="list-group">
                                <li style="width: 200px; margin: 0 auto;" v-for="pokemon in data.stats"
                                    class="list-group-item">{{ pokemon.stat.name }}: {{ pokemon.base_stat }}</li>
                            </ul>
                            <div class="col-md-12 mt-3">
                                <button :class="setFavorite" :disabled="usefavorites.findPokemon(data.name)"
                                    @click="usefavorites.addFavorites(data)"><i class="fa fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="error" class="col-md-12 mt-5">
                <h1>El pokemon ingresado no existe...</h1>
                <img src="@/assets/ditto.png" alt="ditto">
            </div>
            <div class="col-md-12 mt-4">
                <button @click="back" class="btn btn-warning">Regresar</button>
            </div>
        </div>
    </div>
</template>
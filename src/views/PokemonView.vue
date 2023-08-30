<script setup>
import { useRoute, useRouter } from 'vue-router';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import {useGetData} from '@/composables/getData';



const route = useRoute()
const router = useRouter();

const back = () => {
    router.push('/pokemons')
}

const {data, getData, loading, error} = useGetData()


getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<template>
    <LoadingSpinner v-if="loading" class="mt-5"></LoadingSpinner>
    <div class="container">
        <div class="row text-center">
            <div v-if="data">
                <div class="col-md-12">
                    <h1>{{ $route.params.name }}</h1>
                </div>
                <div class="col-md-12">
                    <img style="width: 300px; height: auto;" :src="data.sprites?.front_default"
                        :alt="data.name">
                </div>
            </div>
            <div v-if="error" class="col-md-12 mt-5">
                <h1>El pokemon ingresado no existe...</h1>
                <img src="@/assets/ditto.png" alt="ditto">
            </div>
            <div class="col-md-12">
                <button @click="back" class="btn btn-warning">Regresar</button>
            </div>
        </div>
    </div>
</template>
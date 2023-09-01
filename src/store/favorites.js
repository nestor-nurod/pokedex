import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useFavoriteStore = defineStore('favorites', ()=>{
    const favorites = ref([])

    if(localStorage.getItem("favorites")){
        favorites.value = JSON.parse(localStorage.getItem("favorites"))
    }

    const addFavorites = (pokemon) => {
        favorites.value.push(pokemon)
        localStorage.setItem("favorites", JSON.stringify(favorites.value))
    }

    const removeFavorites = (id) =>{
        favorites.value = favorites.value.filter((item)=>item.id !== id)
        localStorage.setItem("favorites", JSON.stringify(favorites.value))
    }

    const findPokemon = name => favorites.value.find((item)=>item.name === name)

    return{
        favorites,
        addFavorites,
        removeFavorites,
        findPokemon,
    }

})
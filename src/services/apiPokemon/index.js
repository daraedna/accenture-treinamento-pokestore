import axios from 'axios';

export const apiPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})
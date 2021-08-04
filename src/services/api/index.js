import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://server-pokestore.herokuapp.com/'
})
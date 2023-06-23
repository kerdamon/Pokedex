import axios from "axios";

const baseURL = 'https://pokeapi.co/api/v2/';

const instance = axios.create({baseURL});

export default instance;
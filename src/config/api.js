import axios from 'axios';
// esta constante "api", refere-se a instancia base do axios, o axios é um gerenciador de requisições para apis restfull
// nessa base criada encontrasse a base da url padrao para as requisições e seus headers;
const api = axios.create({
  baseURL: 'https://api.npoint.io/1f92d0953c963a4d2452/',
  headers: {
    'Cache-Control': 'no-cache',
    'Content-type': 'application/json',
  },
});

export default api;

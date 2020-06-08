import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rb-ecoleta.herokuapp.com/',
});

export default api;

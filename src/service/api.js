import axios from 'axios';

const api = axios.create({
  baseURL: 'https://clinica-geralperes-abcff5fsf2c7hxag.brazilsouth-01.azurewebsites.net/auth/login',
});

export default api;

import axios from 'axios';

const BASE_URL = 'https://clinica-geralperes-abcff5fsf2c7hxag.brazilsouth-01.azurewebsites.net/auth';

export async function loginUsuario(credentials) {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data;
}

export async function cadastrarUsuario(dados) {
  const response = await axios.post(`${BASE_URL}/users`, dados);
  return response.data;
}

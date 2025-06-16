import axios from 'axios';

const BASE_URL = 'clinica-geralperes-abcff5fsf2c7hxag.brazilsouth-01.azurewebsites.net/auth'; 

export async function cadastrarUsuario(usuario) {
  const response = await axios.post(`${BASE_URL}/users`, usuario);
  return response.data;
}

export async function loginUsuario(credentials) {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data;
}

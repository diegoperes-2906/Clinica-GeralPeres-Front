import axios from 'axios';

const BASE_URL = 'https://clinica-geralperes-abcff5fsf2c7hxag.brazilsouth-01.azurewebsites.net';

export async function getPatients() {
  try {
    const response = await axios.get(`${BASE_URL}/patients`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar pacientes:', error.response?.data || error.message);
    throw error;
  }
}

export async function getPacienteById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/patients/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar paciente com id ${id}:`, error.response?.data || error.message);
    throw error;
  }
}

export async function createPatient(patientData) {
  try {
    const response = await axios.post(`${BASE_URL}/patients`, patientData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar paciente:', error.response?.data || error.message);
    throw error;
  }
}

export async function deletePatient(id) {
  try {
    await axios.delete(`${BASE_URL}/patients/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar paciente com id ${id}:`, error.response?.data || error.message);
    throw error;
  }
}

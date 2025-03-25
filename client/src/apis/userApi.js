import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

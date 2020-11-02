import axios from 'axios';

export const Client = axios.create({
  baseURL: 'https://alvocifras-api.herokuapp.com/',
  crossDomain: true,
  headers: { 'Content-Type': 'application/json', 'temporary-access': 'alvo2020' }
});
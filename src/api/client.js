import axios from 'axios';

export const Client = axios.create({
  baseURL: 'http://localhost:3080',
  crossDomain: true,
  headers: { 'Content-Type': 'application/json' }
});
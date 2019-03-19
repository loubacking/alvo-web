import axios from 'axios';

export const Client = axios.create({
  baseURL: 'https://music-apps.herokuapp.com/',
  crossDomain: true,
  headers: { 'Content-Type': 'application/json' }
});
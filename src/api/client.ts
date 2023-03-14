import axios from 'axios';
import Cookies from 'universal-cookie';
import { AUTH_TOKEN } from '../reducers/types';

export const Client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'temporary-access': 'alvo2020'
  }
});

Client.interceptors.request.use(async function ConfigRequest(configReq) {
  const cookie = new Cookies();

  configReq.headers = {
    'Content-Type': 'application/json',
    'temporary-access': 'alvo2020',
    'X-ACCESS-TOKEN': cookie.get(AUTH_TOKEN)
  };
  return configReq;
});

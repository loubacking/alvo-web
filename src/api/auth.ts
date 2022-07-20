import { RegisterType } from '../containers/Register/types';
import { Client } from './client';

const createUser = async (user: RegisterType) => {
  const res = await Client.post('register', user);
  return res;
};

export {createUser}
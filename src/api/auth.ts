import { LoginTypes, ResLoginType } from '../containers/Login/types';
import { RegisterType } from '../containers/Register/types';
import { Client } from './client';

const createUser = async (user: RegisterType) => {
  const res = await Client.post('register', user);
  return res;
};

const login = async (formData: LoginTypes): Promise<ResLoginType> => {
  const res = await Client.post('login', formData);
  return res.data;
};

export { createUser, login };

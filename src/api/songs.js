import { Client } from './client';

const fetchAllSongs = async () => {
  const res = await Client.get('songs');
  return res;
};

export { fetchAllSongs };
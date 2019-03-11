import { Client } from './client';

const fetchAllSongs = async () => {
  const res = await Client.get('songs');
  return res;
};

const fetchSongs = async (id) => {
  const res = await Client.get('songs/' + id);
  return res;
};

export { fetchAllSongs, fetchSongs };
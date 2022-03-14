import { Client } from './client';

const fetchAllSongs = async () => {
  const res = await Client.get('songs');
  return res;
};

const fetchSongs = async (id: string) => {
  const res = await Client.get('songs/' + id);
  return res;
};

const createSong = async (data: any) => {
  const res = await Client.post('songs/', data);
  return res;
}

export { fetchAllSongs, fetchSongs, createSong };
import { Client } from './client';

const fetchAllArtists = async () => {
  const res = await Client.get('artists');
  return res;
};

const fetchArtists = async (id: string) => {
    const res = await Client.get('artists/' + id);
    return res;
  };

const fetchAllSongsArtists = async (id: string) => {
    const res = await Client.get('artists/' + id + '/songs');
    return res;
};

const createArtist = async (name: string, imageUrl: any) => {
  const res = await Client.post('artists', { name, imageUrl });
  return res;
};

export { fetchAllArtists, fetchArtists, fetchAllSongsArtists, createArtist };
import { Client } from './client';

const fetchAllArtists = async () => {
  const res = await Client.get('artists');
  return res;
};

const fetchArtists = async (id) => {
    const res = await Client.get('artists/' + id);
    return res;
  };

const fetchAllSongsArtists = async (id) => {
    const res = await Client.get('artists/' + id + '/songs');
    return res;
};

const createArtist = async (name, image) => {
  const res = await Client.post('artists', { name, image });
  return res;
};

export { fetchAllArtists, fetchArtists, fetchAllSongsArtists, createArtist };
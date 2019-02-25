import { Client } from './client';

const searchSong = async (keyword) => {
  const res = await Client.get('searchSong', keyword);
  return res;
};

const searchArtist = async (keyword) => {
  const res = await Client.get('searchArtist', keyword);
  return res;
};

export { searchSong, searchArtist };
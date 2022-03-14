import { Client } from './client';

const searchSong = async (keyword: string) => {
  const res = await Client.get('/searchSong?keyword=' + keyword);
  return res;
};

const searchArtist = async (keyword: string) => {
  const res = await Client.get('/searchArtist?keyword=' + keyword);
  return res;
};

export { searchSong, searchArtist };
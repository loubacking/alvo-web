import { Client } from './client';

const searchSong = async (keyword) => {
  const res = await Client.get('searchSong', keyword);
  return res;
};

export { searchSong };
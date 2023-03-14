import { Link } from 'react-router-dom';
import { SongName, SongWrapper, ArtistName } from './styled';

interface ListSongProps {
  song: {
    id: string;
    name: string;
    artistName: string;
  };
}

const ListSong = ({ song }: ListSongProps) => {
  return (
    <SongWrapper>
      <Link to={{ pathname: '/songs', state: { songId: song.id } }}>
        <SongName>{song.name}</SongName>
        <ArtistName>{song.artistName}</ArtistName>
      </Link>
    </SongWrapper>
  );
};

export default ListSong;

import { Link } from 'react-router-dom';
import { Image, ArtistName, ArtistWrapper } from './styled';

interface ListArtistProps {
  artist: {
    id: string;
    imageUrl: string;
    name: string;
  };
}

const ListArtist = ({ artist }: ListArtistProps) => {
  return (
    <ArtistWrapper>
      <Link to={{ pathname: '/artists', state: { artistId: artist.id } }}>
        <Image src={artist.imageUrl} />
        <ArtistName>{artist.name}</ArtistName>
      </Link>
    </ArtistWrapper>
  );
};

export default ListArtist;

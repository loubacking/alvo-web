import Skeleton from 'react-loading-skeleton';
import { Container } from './styled';

const RecentSearchSkeleton = () => {
  return (
    <Container>
      <Skeleton width={100} style={{ marginRight: 12 }} />
      <Skeleton width={100} style={{ marginRight: 12 }} />
      <Skeleton width={100} style={{ marginRight: 12 }} />
      <Skeleton width={100} style={{ marginRight: 12 }} />
    </Container>
  );
};

export default RecentSearchSkeleton;

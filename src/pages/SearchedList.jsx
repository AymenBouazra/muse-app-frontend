import { useSelector } from 'react-redux';
import PageContainer from '../components/PageContainer';
import Tracks from '../components/Tracks';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const SearchedList = () => {
 const searchResults = useSelector((state) => state.search.searchResults);
 const { playTrack } = useMusicPlayer();

 return (
  <PageContainer>
   <Tracks videos={searchResults} playTrack={playTrack} />
  </PageContainer>
 );
};

export default SearchedList;
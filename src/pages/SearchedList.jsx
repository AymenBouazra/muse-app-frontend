import { useSelector } from 'react-redux';
import PageContainer from '../components/PageContainer';
import Tracks from '../components/Tracks';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const SearchedList = () => {
 const searchResults = useSelector((state) => state.search.searchResults);
 const { playTrack } = useMusicPlayer();

 return (
  <div className='flex flex-col w-screen'>
   <PageContainer>
    <Tracks videos={searchResults} playTrack={playTrack} />
   </PageContainer>
  </div>
 );
};

export default SearchedList;
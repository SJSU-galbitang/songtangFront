import styled from '@emotion/styled';
import color from '@/styles/color';
import SongCard from '@/components/SelectSong/SongCard';
import SongTangLogo from '../../assets/images/SongTangTextLogo.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSong } from '@/hooks/useSong';

interface Melody {
  id: string;
  title: string;
  length: string;
}

const HomePage = () => {
  const navigate = useNavigate();
  const [recentSongs, setRecentSongs] = useState<Melody[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { data } = useSong(searchTerm);

  useEffect(() => {
    if (data?.id && data?.title && data?.length) {
      const recents = JSON.parse(localStorage.getItem('recentSongs') || '[]');

      const updated = recents.filter((song: any) => song.id !== data.id);
      updated.unshift({
        id: data.id,
        title: data.title,
        length: data.length,
      });
      if (updated.length > 10) updated.pop();

      localStorage.setItem('recentSongs', JSON.stringify(updated));
    }
  }, [data]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentSongs') || '[]');
    const songs: Melody[] = stored;
    setRecentSongs(songs);
  }, [data]);

  return (
    <Container>
      <Main>
        <Logo>
          <img src={SongTangLogo} alt="Songtang" />
        </Logo>
        <StartButton onClick={() => navigate('/survey')}>
          Start Test
        </StartButton>
      </Main>

      <Sidebar>
        <Label htmlFor="searchSong">Find a song</Label>
        <Input
          placeholder="Enter song ID or title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && data?.id && (
          <SongCardList>
            <SongCard
              id={data.id}
              title={data.title}
              length={data.length}
            />
          </SongCardList>
        )}

        <SectionTitle>Recent Creations</SectionTitle>
        <SongCardList>
          {recentSongs.map((song) => (
            <SongCard
              key={song.id}
              id={song.id}
              title={song.title}
              length={song.length}
            />
          ))}
        </SongCardList>
      </Sidebar>
    </Container>
  );
};

const Logo = styled.div`
  display: flex;
  padding-bottom: 120px;
  img {
    width: 406px;
    height: 80px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 305px;
  height: 100vh;
  background-color: ${color.black};
  color: white;
  overflow-x: hidden;
  background: ${color.gradient.background};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  padding: 16px 120px;
  background: linear-gradient(90deg, #f72a7d 3%, #e53e3e 46%, #ff16bd 100%);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

const Sidebar = styled.aside`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-left: 1px solid ${color.gray20};
  overflow-y: auto;
  width: 100%;
  padding-left: 23px;
`;

const Input = styled.input`
  width: 237px;
  height: 20px;
  padding: 0.5rem;
  background: ${color.gray04};
  border: none;
  border-radius: 8px;
  color: ${color.white};
  margin-bottom: 1rem;
  align-items: flex-start;
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  gap: 10px;
  align-self: stretch;
`;

const Label = styled.label`
  font-size: 24px;
  margin-bottom: 0.5rem;
  display: block;
  color: ${color.white};
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-top: 2rem;
  text-align: left;
  margin-bottom: 0.5rem;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;

const SongCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default HomePage;
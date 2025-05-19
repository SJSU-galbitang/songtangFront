import styled from '@emotion/styled';
import color from '@/styles/color';
import SongCard from '@/components/SelectSong/SongCard';
import SongTangLogo from '../../assets/images/SongTangTextLogo.svg';
import { useNavigate } from 'react-router-dom';

type SelectSongProps = {
  title: string;
  id: string;
  length: string;
};

const HomePage = ({ title, id, length }: SelectSongProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Logo>
          <img src={SongTangLogo} alt="Songtang" />
        </Logo>
        <StartButton onClick={() => navigate('/')}>Start Test</StartButton>
      </Main>
      <Sidebar>
        <Label htmlFor="searchSong">Find a song</Label>
        <Input placeholder="Enter song ID" />
        <SectionTitle>Recent Creations</SectionTitle>
        <SongCardList>
          <SongCard title={title} id={id} length={length} />
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
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  background: linear-gradient(90deg, #f72a7d 3%, #e53e3e 46%, #ff16bd 100%);
  color: ${color.white};
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  height: 78px;
  width: 487px;
  text-align: center;
  font-size: 32px;
`;

const Sidebar = styled.aside`
  padding: 1rem;
  background-color: ${color.black};
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
  text-align:left;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-top: 2rem;
  text-align:left;
  margin-bottom: 0.5rem;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;

const SongCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export default HomePage;
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import AudioPlayer from '@/components/AudioPlayer';
import { useEffect } from 'react';

export default function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, id, total } = location.state as {
    title: string;
    id: string;
    total: string;
  };

  useEffect(() => {
    const recents = JSON.parse(localStorage.getItem('recentSongs') || '[]');
    if (!recents.includes(id)) {
      recents.unshift(id);
      if (recents.length > 10) recents.pop();
      localStorage.setItem('recentSongs', JSON.stringify(recents));
    }
  }, [id]);

  return (
    <Wrapper>
      <Header>Here is your result. 🔥</Header>
      <AudioPlayer title={title} id={id} total={total} />
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  color: #fff;
  width: 100vw;
  height: 100vh;
  background: #151515;
`;

const Header = styled.h1`
  margin-bottom: 24px;
  font-size: 1.8rem;
`;

const BackButton = styled.button`
  margin-top: 32px;
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
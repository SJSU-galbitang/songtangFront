import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import AudioPlayer from '@/components/AudioPlayer';
import DinosaurGame from '@/components/DinosaurGame';
import { useEffect, useState } from 'react';
import { useCreateSong } from '@/hooks/useSurvey.ts';

export default function ResultPage() {
  const navigate = useNavigate();
  const { melodies, lyrics } = useLocation().state as {
    melodies: string[];
    lyrics: string[];
  };

  const {
    mutate,
    data: songData,
    isLoading,
    isSuccess
  } = useCreateSong();

  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!melodies || !lyrics) {
      navigate('/');
      return;
    }
    mutate({ melodies, lyrics });
  }, [melodies, lyrics]);

  const handleRefresh = () => {
    if (!isLoading && !isSuccess) {
      mutate({ melodies, lyrics });
    } else if (isSuccess) {
      setShowResult(true);
      const { id, title, length: total } = songData!;
      const recents = JSON.parse(localStorage.getItem('recentSongs') || '[]');
      if (!recents.some((s: any) => s.id === id)) {
        recents.unshift({ id, title, total });
        if (recents.length > 10) recents.pop();
        localStorage.setItem('recentSongs', JSON.stringify(recents));
      }
    }
  };

  return (
    <Wrapper>
      {!showResult ? (
        <>
          <Header>
            {isLoading
              ? "Your song is still being generated. Click Refresh below to check if it's ready."
              : "Still processing? Click Refresh to retry."}
          </Header>

          <DinosaurGame />

          <RefreshButton onClick={handleRefresh}>
            {isLoading ? 'Generating song...' : 'Refresh'}
          </RefreshButton>
        </>
      ) : (
        <>
          <Header>Here is your result. 🔥</Header>
          <AudioPlayer
            title={songData!.title}
            id={songData!.id}
            total={songData!.length}
          />
          <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 100vw;
  height: 100%;
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

const RefreshButton = styled.button`
  margin-top: 10%;
  padding: 16px 80px;
  background: #fff;
  color: #000;
  border-radius: 6px;
  cursor: pointer;
`;
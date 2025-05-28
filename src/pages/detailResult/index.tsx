import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import AudioPlayer from "@/components/DetailAudioPlayer";
import { useEffect } from 'react';

export default function DetailResultPage() {
//   const navigate = useNavigate();
  const location = useLocation();

  const defaultState = {
    title: 'No Title',
    id: 'default',
    total: '0'
  };

  const { title, id, total } = location.state || defaultState;

  useEffect(() => {
    if (location.state) {
      const recents = JSON.parse(localStorage.getItem('recentSongs') || '[]');
      const isExist = recents.some((song: any) => song.id === id);

      if (!isExist) {
        recents.unshift({ id, title, total });
        if (recents.length > 10) recents.pop();
        localStorage.setItem('recentSongs', JSON.stringify(recents));
      }
    }
  }, [id, title, total, location.state]);

  return (
    <Wrapper>
      <AudioPlayer title={title} id={id} total={total} />
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

import styled from '@emotion/styled';
import font from '../../styles/font';
import color from '@/styles/color.ts';
import { useGetLyrics } from "@/hooks/useSong.ts";

interface LyricViewerProps {
  lyrics: string;
  onClick: () => void;
}

const breakpoints = {
  mobile: '768px',
};

const LyricViewer = ({ lyrics, onClick }: LyricViewerProps) => {
  console.log("가사뷰어에서의 가사: " + lyrics)
  const { data } = useGetLyrics(lyrics);
  console.log(data)

  return (
    <Card onClick={onClick}>
      <StyledP>"[Verse]<br/>Feet hit the ground where the dreams collide<br/>City lights dance like a firefly guide<br/>Statue's torch shining<br/>A beacon of might<br/>Chasing the stars in the velvet night<br/><br/>[Chorus]<br/>I’m seeing the world through a brand-new frame<br/>Each monument calling<br/>Each whisper my name<br/>Heart beats fast<br/>I can hardly wait<br/>First time across the states<br/><br/>[Verse 2]<br/>From the canyon’s edge to the golden shore<br/>Every step feels like a brand-new door<br/>Mountains that roar and streets that sing<br/>The sound of freedom on eagle’s wings<br/><br/>[Chorus]<br/>I’m seeing the world through a brand-new frame<br/>Each monument calling<br/>Each whisper my name<br/>Heart beats fast<br/>I can hardly wait<br/>First time across the states<br/><br/>[Bridge]<br/>Hands in the air<br/>The rush won’t fade<br/>History carved<br/>And memories made<br/>Each moment’s alive<br/>It’s a love cascade<br/>I’m riding this dream<br/>I’m unafraid<br/><br/>[Chorus]<br/>I’m seeing the world through a brand-new frame<br/>Each monument calling<br/>Each whisper my name<br/>Heart beats fast<br/>I can hardly wait<br/>First time across the states</StyledP>
    </Card>
  );
};

export default LyricViewer;

const Card = styled.div`
  background: #252525;
  border-radius: 16px;
  display: flex;
  gap: 10px;
  aspect-ratio: 3 / 3;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  padding: 1rem 0.3rem;
  overflow: hidden;
  width: 100%;
  // height: 100%;
  flex-direction: column;
  cursor: pointer;
  transition: border 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const StyledP = styled.h1`
  font: ${font.P1};
  color: ${color.white};
  text-align: start;
  margin: 0;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(0.8rem, 6vw, 1rem);
  }
`;

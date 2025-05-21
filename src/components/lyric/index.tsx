/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import font from '@/styles/font.ts';
import color from '@/styles/color.ts';
import { useEffect, useState } from 'react';
import { useGetLyrics } from '@/hooks/useSong';
import LyricViewer from '@/components/LyricViewer';
import Logo from "@/assets/images/SongTangTextLogo.svg";

interface SurveyLyricProps {
  lyrics: string[]; // uuid 리스트
  onComplete: (id: string) => void;
}

const breakpoints = { mobile: '768px' };

export default function SurveyLyric({ lyrics, onComplete }: SurveyLyricProps) {
  console.log(lyrics);
  const { data = [], isLoading } = useGetLyrics(lyrics.join(','));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  useEffect(() => {
    if (currentIndex >= lyrics.length) {
      onComplete(selectedCard!);
    }
  }, [currentIndex]);

  if (isLoading || data.length < currentIndex + 2) return null;

  const first = data[currentIndex];
  const second = data[currentIndex + 1];

  const handleSelect = (id: string) => {
    setSelectedCard(id);
    setTimeout(() => setCurrentIndex(prev => prev + 2), 2000);
  };

  return (
      <StyledLyric>
        <InnerSort>
          <LogoSort>
            <StyledLogo src={Logo} alt="SongTang logo" />
          </LogoSort>
          <StyledD1>Choose a Lyrics 📃</StyledD1>
          <LyricViewerSort>
            <LyricViewer
                lyrics={first.lyrics}
                isSelected={selectedCard === first.id}
                onClick={() => handleSelect(first.id)}
            />
            <LyricViewer
                lyrics={second.lyrics}
                isSelected={selectedCard === second.id}
                onClick={() => handleSelect(second.id)}
            />
          </LyricViewerSort>
        </InnerSort>
      </StyledLyric>
  );
}

const StyledLyric = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: ${color.gradient.background};
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem 0.5rem;
    align-items: flex-start;
    justify-content: center;
  }
`;

const InnerSort = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  gap: 4vh;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 3vh;
    width: 95%;
    display: flex;
  }
`;

const LogoSort = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledLogo = styled.img`
  display: block;
  width: 30%;
  max-width: 300px;
  height: auto;
  margin: 0;

  @media (max-width: ${breakpoints.mobile}) {
    width: 50%;
    max-width: 100px;
  }
`;

const StyledD1 = styled.h1`
  ${font.D1};
  font-size: clamp(2rem, 4vw + 1rem, 3rem);
  color: ${color.white};
  text-align: center;
  margin: 0;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`;

const LyricViewerSort = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    padding: 0;
  }
`;

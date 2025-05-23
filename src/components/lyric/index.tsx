/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import font from '@/styles/font.ts';
import color from '@/styles/color.ts';
import LyricViewer from '@/components/LyricViewer';

interface Lyric {
  id:string;
}
interface Props {
  lyrics: Lyric[];
  onLyricSelect: (id: string) => void;
}
const breakpoints = { mobile: '768px' };

export default function SurveyLyric({ lyrics, onLyricSelect }: Props ) {

  return (
      <>
        <StyledD1>Choose a Lyrics 📃</StyledD1>
        <LyricViewerSort>
          {lyrics.map((lyric) => (
              <LyricViewer
                  key={lyric.id}
                  lyrics={lyric.id}
                  onClick={() => onLyricSelect(lyric.id)}/>
          ))}
          {/*            <LyricViewer
                lyrics={first.lyrics}
                isSelected={selectedCard === first.id}
                onClick={() => handleSelect(first.id)}
            />
            <LyricViewer
                lyrics={second.lyrics}
                isSelected={selectedCard === second.id}
                onClick={() => handleSelect(second.id)}
            />*/}
        </LyricViewerSort>
      </>
  );
}


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

/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import color from '../../../styles/color';
import font from '../../../styles/font';
import Logo from '../../../assets/images/SongTangTextLogo.svg';
import LyricViewer from '../../../components/LyricViewer';

interface MelodyProps {
  title?: string;
  lyrics?: string;
}

const breakpoints = {
  mobile: '768px',
};

const SurveyLyric = ({ title = 'Cruel Summer', lyrics = '안녕 빡빡이 아저씨야' }: MelodyProps) => {
  return (
    <StyledLyric>
      <InnerSort>
        <LogoSort>
          <StyledLogo src={Logo} alt="SongTang logo" />
        </LogoSort>
        <StyledD1>Choose a Lyrics 📃</StyledD1>
        <LyricViewerSort>
          <LyricViewer title={title} lyrics={lyrics} />
          <LyricViewer title={title} lyrics={lyrics} />
        </LyricViewerSort>
      </InnerSort>
    </StyledLyric>
  );
};

export default SurveyLyric;

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

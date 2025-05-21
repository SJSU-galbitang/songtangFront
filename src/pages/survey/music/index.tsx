/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import color from '../../../styles/color';
import Logo from '../../../assets/images/SongTangTextLogo.svg';
import { useLocation } from "react-router-dom";
import SurveyMelody from "components/melody";
import SurveyLyric from "components/lyric";
import { useState } from "react";

const breakpoints = {
    mobile: '768px',
};

const SurveyMusic = () => {
    const location = useLocation();
    const { melodies = [], lyrics = [] } = location.state || {};
    const [step, setStep] = useState<'melody' | 'lyric'>('melody');
    const [selectedMelodyIds, setSelectedMelodyIds] = useState<number[]>([]);

    const handleMelodyComplete = (selected: number[]) => {
          setSelectedMelodyIds(selected);
        setStep('lyric');
    };

    return (
        <StyledTestSong>
            <InnerSort>
                <LogoSort>
                    <StyledLogo src={Logo} alt="SongTang logo" />
                </LogoSort>

                {step === 'melody' && melodies.length > 0 && (
                    <SurveyMelody melodies={melodies} onComplete={handleMelodyComplete} />
                )}

                {step === 'lyric' && lyrics.length > 0 && (
                    <SurveyLyric lyrics={lyrics} />
                )}
            </InnerSort>
        </StyledTestSong>
    );
};
export default SurveyMusic;

const StyledTestSong = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.gradient.background};
  padding: 2rem 1rem;
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
  height: 100vw;
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
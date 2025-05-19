/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import color from '../../../styles/color';
import font from '../../../styles/font';
import Logo from '../../../assets/images/SongTangTextLogo.svg';
import AudioPlayer from '../../../components/AudioPlayer';
import { useSurveyStore } from "../../../types/survey";
import { useState } from 'react';


interface MelodyProps {
  title?: string;
  id?: number;
  current?: number;
  total?: number;
}

const breakpoints = {
  mobile: '768px',
};

const SurveyMelody = ({
  title = 'Cruel Summer',
  id = 123123,
  current = 128,
  total = 328,
}: MelodyProps) => {
  const [selectedMelody, setSelectedMelody] = useState<string[]>([]);
  const { setMelodies } = useSurveyStore();

  const handleMelodySelect = (melodyId: string) => {
      const updated = selectedMelody.includes(melodyId)
          ? selectedMelody.filter((id) => id !== melodyId)
          : [...selectedMelody, melodyId];
      setSelectedMelody(updated);
      setMelodies(updated);
    };


    return (
    <StyledTestSong>
      <InnerSort>
        <LogoSort>
          <StyledLogo src={Logo} alt="SongTang logo" />
        </LogoSort>
        <StyledD1>Choose a Song 🎵</StyledD1>
        <AudioPlayerSort>
          <SmallPlayer title={title} id={id} current={current} total={total}
                       onClick={() => handleMelodySelect('song_id1')}/>
          <SmallPlayer title={title} id={id} current={current} total={total}
                       onClick={() => handleMelodySelect('song_id2')}/>
        </AudioPlayerSort>
      </InnerSort>
    </StyledTestSong>
  );
};

export default SurveyMelody;

const StyledTestSong = styled.div`
  width: 100%;
  height: 100vh;
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

const AudioPlayerSort = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    padding: 0;
  }
`;

const SmallPlayer = styled(AudioPlayer)`
  width: 45%;
  height: auto;
  transform: scale(0.95);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    transform: scale(1);
  }
`;

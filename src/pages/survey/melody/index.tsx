/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import color from '../../../styles/color';
import font from '../../../styles/font';
import Logo from '../../../assets/images/SongTangTextLogo.svg';
import AudioPlayer from '../../../components/AudioPlayer';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const breakpoints = {
  mobile: '768px',
};

const SurveyMelody = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMelodies, setSelectedMelodies] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;

  const handleSelect = (melodyId: string) => {
    const updated = [...selectedMelodies, melodyId];
    setSelectedMelodies(updated);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
  };

  const isFinished = currentIndex >= Math.ceil(data?.melodies.length / 2);

  useEffect(() => {
    if (isFinished && data.melodies.length > 0) {
      navigate('/survey/lyrics', {
        state: {
          lyricsList: selectedMelodies
        },
      });
    }
  }, [isFinished, data?.melodies, navigate]);

  const displayMelodies = data?.melodies.slice(currentIndex * 2, currentIndex * 2 + 2);

  return (
      <StyledTestSong>
        <InnerSort>
          <LogoSort>
            <StyledLogo src={Logo} alt="SongTang logo" />
          </LogoSort>
          <StyledD1>Choose a Song 🎵</StyledD1>
          <AudioPlayerSort>
            {displayMelodies?.map((melody: any) => (
                <SmallPlayer
                    key={melody.id}
                    title={melody.title}
                    id={melody.id}
                    total={melody.length}
                    onClick={() => handleSelect(melody.id)}
                />
            ))}
          </AudioPlayerSort>
        </InnerSort>
      </StyledTestSong>
  );
};

export default SurveyMelody;

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
  justify-content: flex-start;
  gap: 4vh;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 3vh;
    width: 95%;
  }
`;

const LogoSort = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledLogo = styled.img`
  display: block;
  width: 30%;
  max-width: 300px;
  height: auto;

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
  width: 100%;
  padding: 0 1rem;
  margin: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`;

const AudioPlayerSort = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 15px;
  }
`;

const SmallPlayer = styled(AudioPlayer)`
  width: 45%;
  cursor: pointer;
  transform: scale(0.95);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    transform: scale(1);
  }
`;
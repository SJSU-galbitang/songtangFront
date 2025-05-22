import styled from '@emotion/styled';
import Logo from '@/assets/images/SongTangTextLogo.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSurvey } from '@/hooks/useSurvey';

const breakpoints = {
  mobile: '768px',
};

export default function SurveyMelody() {
  const navigate = useNavigate();
  const [feeling, setFeeling] = useState<string>('');
  const { data: surveyData, refetch, isFetching } = useSurvey(feeling);

  const handleNext = () => {
    if (!feeling) return;
    refetch().then(({data}) => {
      navigate('/survey/music', {
        state: {
          melodies: data?.melodies,
          lyrics: data?.lyrics,
        },
      });
    });

  };

  return (
    <StyledTestSong>
      <LogoSort>
        <StyledLogo src={Logo} alt="SongTang logo" />
      </LogoSort>
      <InnerSort>
        <InputWrapper>
          <Subtitle>Describe how you've been feeling recently.</Subtitle>
          <StyledTextArea
            placeholder="How are you feeling?"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
          />
        </InputWrapper>

        <NextButton
          onClick={handleNext}
          disabled={!feeling || isFetching}
        >
          {isFetching ? 'Loading…' : 'Next'}
        </NextButton>
      </InnerSort>
    </StyledTestSong>
  );
};

const StyledTestSong = styled.div`
  width: 100%;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: radial-gradient(255.39% 142.65% at 13.83% 21.15%, #151515 13.76%, #6B2525 35.23%, #F03E3E 66.71%, #FF16BD 93.73%);
  padding: 2rem 1rem;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem 0.5rem;
    align-items: flex-start;
  }
`;

const InnerSort = styled.div`
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 3vh;
    width: 95%;
    padding: 1.5rem;
  }
`;

const LogoSort = styled.div`
  width: 90%;
  max-width: 800px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
`;

const StyledLogo = styled.img`
  display: block;
  width: 30%;
  max-width: 200px;
  height: auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 50%;
    max-width: 120px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Subtitle = styled.h2`
  color: #fff;
  margin: 0;
  padding: 0;
  text-align: left;
  font-weight: 600;
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  padding: 12px;
  resize: none;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const NextButton = styled.button`
  width: 100%;
  padding: 16px;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(90deg, #ff5f6d, #e91e63);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
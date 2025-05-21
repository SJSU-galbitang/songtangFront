/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import font from '@/styles/font.ts';
import color from '@/styles/color.ts';
import AudioPlayer from '@/components/AudioPlayer';

const breakpoints = { mobile: '768px' };

interface Melody {
  id: string;
  title: string;
  length: string;
}

interface Props {
  melodies: Melody[];
  onMelodySelect: (id: string) => void;
}

export default function SurveyMelody({ melodies, onMelodySelect }: Props) {
  return (
      <Container>
        <StyledD1>Choose one 🎵</StyledD1>

        <AudioPlayerSort>
          {melodies.map(melody => (
              <SmallPlayer
                  key={melody.id}
                  title={melody.title}
                  id={melody.id}
                  total={melody.length}
                  onClick={() => onMelodySelect(melody.id)}
              />
          ))}
        </AudioPlayerSort>
      </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const StyledD1 = styled.h1`
  ${font.D1};
  font-size: clamp(2rem, 4vw + 1rem, 3rem);
  color: ${color.white};
  margin: 0;
  text-align: center;
`;

const AudioPlayerSort = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SmallPlayer = styled(AudioPlayer)`
  width: 45%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
`;

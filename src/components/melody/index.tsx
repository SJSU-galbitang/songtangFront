/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import font from "@/styles/font.ts";
import color from "@/styles/color.ts";
import {useState} from "react";

const breakpoints = {
  mobile: '768px',
};

interface MelodyProps {
  melodies: MelodyData[];
  onComplete: (selectedMelodyIds: number[]) => void;
}

const SurveyMelody = ({ melodies, onComplete }: MelodyProps) => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelected((prev) => [...prev, id]);
    if (index + 2 < melodies.length) {
      setTimeout(() => setIndex(index + 2), 2000); // 2초 후 다음 쌍
    } else {
      setTimeout(() => onComplete(selected.concat(id)), 2000); // 마지막이면 완료 콜백
    }
  };

  const currentPair = melodies.slice(index, index + 2);

  return (
      <div>
        <StyledD1>Choose one 🎵</StyledD1>
        <AudioPlayerSort>
          {currentPair.map((melody) => (
              <SmallPlayer key={melody.id} onClick={() => handleSelect(melody.id)}>
                <p>{melody.title}</p>
              </SmallPlayer>
          ))}
        </AudioPlayerSort>
      </div>
  );
};

export default SurveyMelody;


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

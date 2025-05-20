import styled from '@emotion/styled';
import font from '../../styles/font';
import color from '@/styles/color.ts';

interface LyricViewerProps {
    lyrics: string;
    isSelected: boolean;
    onClick: () => void;
}

const breakpoints = {
    mobile: '768px',
};

const LyricViewer = ({ lyrics, isSelected, onClick }: LyricViewerProps) => {
    return (
        <Card isSelected={isSelected} onClick={onClick}>
            <StyledP>{lyrics}</StyledP>
        </Card>
    );
};

export default LyricViewer;

const Card = styled.div<{ isSelected: boolean }>`
  background: #252525;
  border-radius: 16px;
  display: flex;
  gap: 10px;
  aspect-ratio: 3 / 3;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  padding: 1rem 0.3rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
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
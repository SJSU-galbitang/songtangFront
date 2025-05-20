import { useState } from 'react';
import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg';

type AudioPlayerProps = {
  title: string;
  id: number;
  current: number;
  total: number;
  className?: string;
  onClick?: () => void;
};

export default function AudioPlayer({ title, id, current, total, className, onClick }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const percent = (current / total) * 100;

  const formatTime = (sec: number) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(Math.floor(sec % 60)).padStart(2, '0');
    return `${m}:${s}`;
  };

  const copyId = () => navigator.clipboard.writeText(String(id));

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <Card className={className} onClick={onClick}>
      <Cover />

      <Info>
        <SongInfoWrap>
          <Title>{title}</Title>
          <IDRow>
            <SubTitle>ID: {id}</SubTitle>
            <CopyButton onClick={copyId}>
              <img src={Copy} alt="copy icon" />
            </CopyButton>
          </IDRow>
        </SongInfoWrap>

        <ProgressBar>
          <Progress percent={percent} />
        </ProgressBar>

        <ControlRow>
          <TimeText>{formatTime(current)}</TimeText>

          <PlayButton onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? (
              <svg viewBox="0 0 24 24">
                <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </PlayButton>

          <TimeText>{formatTime(total)}</TimeText>
        </ControlRow>
      </Info>
    </Card>
  );
}

const Card = styled.div`
  background: #252525;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 360px;
`;

const Cover = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background: #1e1e1e;
`;

const Info = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SongInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
`;

const IDRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubTitle = styled.span`
  font-size: 0.875rem;
  color: #b0b0b0;
`;

const CopyButton = styled.button`
  background: transparent;
  border: none;
  padding: 2px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #333;
  }
  img {
    width: 16px;
    height: 16px;
  }
`;

const ProgressBar = styled.div`
  height: 6px;
  background: #333;
  border-radius: 3px;
  overflow: hidden;
`;

const Progress = styled.div<{ percent: number }>`
  width: ${props => props.percent}%;
  height: 100%;
  background: linear-gradient(90deg, #f72a7d 3%, #e53e3e 46%, #ff16bd 100%);
`;

const ControlRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

const TimeText = styled.span`
  font-size: 0.75rem;
  color: #aaa;
`;

const PlayButton = styled.button`
  background: rgba(0, 0, 0, 0.6);
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

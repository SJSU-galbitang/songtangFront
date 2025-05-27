import { useState, useRef, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';

type AudioPlayerProps = {
  title: string;
  id: string;
  total: string;
  className?: string;
};

export default function AudioPlayer({ title, id, total, className }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);

  const audioSrc = `https://cdn1.suno.ai/${id}.mp3`;
  const coverUrl = `https://cdn2.suno.ai/image_${id}.jpeg`;

  const durationSec = useMemo(() => {
    const [m, s] = total.split(':').map(Number);
    return m * 60 + s;
  }, [total]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const formatTime = (sec: number) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(Math.floor(sec % 60)).padStart(2, '0');
    return `${m}:${s}`;
  };

  useEffect(() => {
    const audio = audioRef.current!;
    const onTimeUpdate = () => setCurrent(audio.currentTime);
    audio.addEventListener('timeupdate', onTimeUpdate);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, []);

  const percent = durationSec ? (current / durationSec) * 100 : 0;

  return (
    <Wrapper className={className}>
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <Top>
        <Cover style={{ backgroundImage: `url(${coverUrl})` }} />
        <Info>
          <SongTitle>{title}</SongTitle>
          <SongId>ID: {id}</SongId>
          <LyricsBox>
            <p>
              그렇게 시간은 흘렀고 어느새<br />
              나도 모르게 너에게 빠져나~<br />
              혼자 서게 되었어<br />
              어쩌다보니<br />
              나아아아아아아아아앗 널<br />
              조금씩 잊어가고 있던거야<br />
              멈추지 않은 듯한<br />
              어둠속에서<br />
              그게 어쩌다보니<br />
              그게 어쩌다보니<br />
              그게 어쩌다보니<br />
              그게 어쩌다보니
            </p>
          </LyricsBox>
        </Info>
      </Top>

      <Controls>
        <Bar>
          <Progress percent={percent} />
        </Bar>
        <TimeWrapper>
          <Time>{formatTime(current)}</Time>
          <Time>{total}</Time>
        </TimeWrapper>
        <PlayBtn onClick={togglePlay}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          )}
        </PlayBtn>
      </Controls>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Top = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  width: 100%;
  margin-left: 60px;
`;

const Cover = styled.div`
  width: 326px;
  height: 319px;
  background: white;
  background-size: cover;
  background-position: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SongTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
  padding-right: 340px;
`;

const SongId = styled.span`
  color: #aaa;
  font-size: 14px;
  padding-right: 360px;
`;

const LyricsBox = styled.div`
  width: 275px;
  height: 230px;
  background: #000;
  padding: 12px;
  border-radius: 8px;
  font-size: 18px;
  color: white;
  margin-top: 12px;
  line-height: 1.6;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; 
  scrollbar-width: none;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 48px;
  gap: 8px;
`;

const Time = styled.span`
  color: #aaa;
  font-size: 12px;
`;

const Bar = styled.div`
  width: 471px;
  height: 4px;
  background: #333;
  border-radius: 2px;
  position: relative;
`;

const Progress = styled.div<{ percent: number }>`
  height: 100%;
  width: ${({ percent }) => percent}%;
  background: #f22;
  position: absolute;
  top: 0;
  left: 0;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 471px;
  margin-top: 4px;
`;

const PlayBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-top: 8px;
  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

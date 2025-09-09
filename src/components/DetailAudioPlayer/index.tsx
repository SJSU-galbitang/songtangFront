import { useState, useRef, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import Copy from '../../assets/copy.svg';

type AudioPlayerProps = {
  title: string;
  id: string;
  total: string;
  className?: string;
  lyrics?: string;
};

export default function AudioPlayer({ title, id, total, className }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  // const { data } = useGetLyricsBySongId(id);

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

  const copyId = () => navigator.clipboard.writeText(String(id));

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
          <IdContainer>
            <SongId>ID: {id}</SongId>
            <CopyButton onClick={copyId}>
              <img src={Copy} alt="copy icon" />
            </CopyButton>
          </IdContainer>
          <LyricsBox>
            <p>
              {
                "[Verse]\nHeart's a drum that's out of sync\nBreath's a whisper on the brink\nMirror laughs\nMy hair's a mess\nBut I swear I'll try my best\n\n[Chorus]\nButterflies\nThey twist and twirl\nIn my chest\nThey loop and swirl\nAnticipation’s sweet parade\nDancing wild before the date\n\n[Verse 2]\nShoes untied\nI trip\nI fall\nWonder if you'll like it all\nEvery word I plan to say\nMight just fly and float away\n\n[Chorus]\nButterflies\nThey twist and twirl\nIn my chest\nThey loop and swirl\nAnticipation’s sweet parade\nDancing wild before the date\n\n[Bridge]\nIt's chaos but it feels so right\nLike stars colliding in the night\nI hold my breath\nI check my phone\nNo way I'd face this world alone\n\n[Chorus]\nButterflies\nThey twist and twirl\nIn my chest\nThey loop and swirl\nAnticipation’s sweet parade\nDancing wild before the date"
              }
              {/* {data?.lyrics || '가사가 없습니다.'} */}
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
  width: 500px;
`;

const SongTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
  white-space: nowrap;
  margin-right: 310px;
`;

const IdContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SongId = styled.span`
  color: #aaa;
  font-size: 14px;
  white-space: nowrap;
`;

const LyricsBox = styled.div`
  width: 275px;
  height: 215px;
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

const CopyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  img {
    width: 16px;
    height: 16px;
  }
`;

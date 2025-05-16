import styled from '@emotion/styled';
import AudioPlayer from '@/components/AudioPlayer';

type ResultPageProps = {
  title?: string;
  id?: number;
  current?: number;
  total?: number;
};

export default function ResultPage({ title = "Million Dollor Baby", id = 123123, current = 128, total = 328 }: ResultPageProps) {
  
  return (
    <Wrapper>
      <Header>Here is your result. 🔥</Header>
      <AudioPlayer title={title} id={id} current={current} total={total} />
      <BackButton onClick={() => (window.location.href = "/")}>
        Back to Home
      </BackButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  color: #fff;
  width: 100vw;
  height: 100vh;
  background: #151515;
`;

const Header = styled.h1`
  margin-bottom: 24px;
  font-size: 1.8rem;
`;

const BackButton = styled.button`
  margin-top: 32px;
  padding: 16px 120px;
  background: linear-gradient(
    90deg,
    #f72a7d 3%,
    #e53e3e 46%,
    #ff16bd 100%
  );
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;
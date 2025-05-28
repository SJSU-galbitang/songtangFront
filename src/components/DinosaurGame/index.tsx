import DinoGame from 'react-chrome-dino-ts';
import 'react-chrome-dino-ts/index.css';
import styled from '@emotion/styled';

export default function CustomDino() {
  return (
    <Wrapper>
      <DinoGame />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 200px;
  margin: 0 auto;
  background: #222;
`;

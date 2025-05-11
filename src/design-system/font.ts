/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const fontGenerator = (
  weight: number,
  size: number,
) => css`
  font-family: 'Pretendard', sans-serif;
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: 100%;
`;

const font = {
  D1: fontGenerator(600, 3),

  H1: fontGenerator(500, 2.25,),
  H2: fontGenerator(500, 1.5),
  H3: fontGenerator(500, 1.25),
  H4: fontGenerator(600, 1),
  H5: fontGenerator(600, 1.25),

  P1: fontGenerator(400, 1),
  P2: fontGenerator(400, 0.75),

  btn1: fontGenerator(600, 1.5),
  btn2: fontGenerator(600, 0.75),
};

export default font;

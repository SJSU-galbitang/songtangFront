/** @jsxImportSource @emotion/react */
import { createGlobalStyle } from 'styled-components';
import color from './color';

const GlobalStyle = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

#root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
input{
  user-select: auto;
  border: none;
  outline: none;
    background: ${color.gray04};
}

input:focus {
  outline: 1px ${color.main};
}

button {
    background: ${color.gradient};
}
`;
export default GlobalStyle;

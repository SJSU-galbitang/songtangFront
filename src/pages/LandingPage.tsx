/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import font from '../styles/font';
import color from '../styles/color';
import Logo from '@/assets/images/SongTangTextLogo.svg';

const breakpoints = {
  mobile: '768px',
};

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <LayoutContainer>
        <SortTextLogo>
          <h1
            css={[
              font.D1,
              `   text-align: left;
                  color:${color.white}; 
                  font-size: clamp(2rem, 5vw, 2.5rem);
                  margin-bottom: 0.8rem;
              `,
            ]}
          >
            Craft your own
            <br />
            one-of-a-kind song.
          </h1>
          <LogoImg src={Logo} alt="SongTang Logo" />
        </SortTextLogo>
        <StartButton>
          <p css={font.btn1}> Get Started</p>
        </StartButton>
      </LayoutContainer>
    </StyledLandingPage>
  );
};

export default LandingPage;

const StyledLandingPage = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/SongTangLandingBackgound.svg');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
`;

const LayoutContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 70%;
  max-width: 1200px;
  height: fit-content;
  padding: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
  }
`;

const SortTextLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  width: 50%;
  justify-content: flex-start;

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    align-items: flex-start;
    margin-bottom: 2rem;
  }
`;

const StartButton = styled.div`
  padding: 2% 8%;
  background: ${color.gradient};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }

  p {
    margin: 0;
    color: ${color.white};
    font-size: clamp(1rem, 2vw, 1.2rem);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 60%;
    text-align: center;
    padding: 4% 20%;
    &:hover {
      transform: scale(1.05);
    }

    p {
      margin: 0;
      color: ${color.white};
      font-size: clamp(1rem, 2vw, 1.1rem);
    }
  }
`;

const LogoImg = styled.img`
  width: 140%;
  max-width: 800px;
  height: auto;
  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
    max-width: 700px;
    height: auto;
  }
`;

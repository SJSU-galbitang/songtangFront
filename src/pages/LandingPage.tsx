/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import font from "../styles/font";
import Logo from "@/assets/images/SongTangTextLogo.svg";
const LandingPage = () => {
    return (
        <StyledLandingPage>
            <SortTextLogo>
                <h1 css={[font.D1,`text-align: left;`]}>Craft your own<br/>
                    one-of-a-kind song.</h1>
                <Logo/>
            </SortTextLogo>
        </StyledLandingPage>
    )
};

export default LandingPage;

const StyledLandingPage = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("/SongTangLandingBackgound.svg");
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
`;

const SortTextLogo=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
const Logo = styled.image`
  width: 200px;
  height: auto;
`;


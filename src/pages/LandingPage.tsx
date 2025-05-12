/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
const LandingPage = () => {
    return (
        <StyledLandingPage>
            <h1> 테스트</h1>
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
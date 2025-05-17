/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import color from '../../../styles/color';
import Logo from '../../../assets/images/SongTangTextLogo.svg';

const SurveyMelody = () => {
    return (
        <StyledTestSong>
            <img src={Logo} alt="logo" />
        </StyledTestSong>
    );
};

export default SurveyMelody;

const StyledTestSong = styled.div`
    width: 100%;
    height: 100%;
    background: ${color.gradient.background};
`;

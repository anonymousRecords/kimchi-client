import Swiper from "../components/Swiper";
import styled from 'styled-components';

const StyledLanding = styled.div`
    width: 390px;
    height: 100vh;
    background-color: red;
`

const LandingPage = () => {
    return (
        <StyledLanding>
            <Swiper/>
        </StyledLanding>
    );
}

export default LandingPage;

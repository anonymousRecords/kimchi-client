import Swiper from "../components/Swiper";
import styled from 'styled-components';

const StyledOnboarding = styled.div`
    width: 390px;
    height: 100vh;
    background-color: red;
`

const OnboardingPage = () => {
    return (
        <StyledOnboarding>
            <Swiper/>
        </StyledOnboarding>
    );
}

export default OnboardingPage;

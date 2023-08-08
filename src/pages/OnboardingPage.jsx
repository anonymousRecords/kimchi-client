
import styled from 'styled-components';
import OnboardingSwiper from '../components/OnboardingSwiper';

const StyledOnboarding = styled.div`
    width: 390px;
    height: 100vh;
`

const OnboardingPage = () => {
    return (
        <StyledOnboarding>
            <OnboardingSwiper/>
        </StyledOnboarding>
    );
}

export default OnboardingPage;

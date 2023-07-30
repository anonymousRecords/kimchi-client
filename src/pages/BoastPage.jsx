import styled from 'styled-components';
import BoastHeader from '../components/BoastPage/BoastHeader';
import BoastCard from '../components/BoastPage/BoastCard';

const StyledBoast = styled.div`
    width: 390px;
    background-color: #F7F7F7;
`

const BoastPage = () => {
    return (
        <StyledBoast>
            <BoastHeader/>
            <BoastCard/>
        </StyledBoast>
    );
}

export default BoastPage;
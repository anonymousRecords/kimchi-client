import styled from 'styled-components';
import BoastCompeleteHeader from '../components/BoastCompeletePage/BoastComepleteHeader';

const StyledBoastComeplete = styled.div`
    width: 390px;
    background-color: #F7F7F7;
`

const BoastComepletePage = () => {
    return (
        <StyledBoastComeplete>
            <BoastCompeleteHeader/>

        </StyledBoastComeplete>
    );
}

export default BoastComepletePage;
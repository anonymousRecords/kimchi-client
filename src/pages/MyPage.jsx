import styled from 'styled-components';
import BottomNav from '../components/BottomNav.jsx';

const StyledMy = styled.div`
    width: 390px;
    background-color: #F7F7F7;
`

const MyPage = () => {
    return (
        <StyledMy>
            <div>MyPage</div>
            <BottomNav type="my"/>
        </StyledMy>
    );
}

export default MyPage;
import Header from "../components/PeoplePage/Header";
import InfiniteScroll from "../components/PeoplePage/InfiniteScroll";
import styled from 'styled-components';

const StyledPeople = styled.div`
    width: 390px;
    height: 100%;
    background-color: #F7F7F7;
`

const PeoplePage = () => {
    return (
        <StyledPeople>
            <Header/>
            <InfiniteScroll/>
        </StyledPeople>
    );
}

export default PeoplePage;
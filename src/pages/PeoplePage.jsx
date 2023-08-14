import Header from "../components/PeoplePage/Header";
// import InfiniteScroll from "../components/PeoplePage/InfiniteScroll";
import BottomNav from '../components/BottomNav.jsx';
import styled from 'styled-components';
import PeopleCardList from "../components/PeoplePage/PeopleCardList";

const StyledPeople = styled.div`
    width: 390px;
    height: 100%;
    background-color: #F7F7F7;
`

const PeoplePage = () => {
    return (
        <StyledPeople>
            <Header/>
            <PeopleCardList/>
            {/* <InfiniteScroll/> */}
            <BottomNav type="people"/>
        </StyledPeople>
    );
}

export default PeoplePage;
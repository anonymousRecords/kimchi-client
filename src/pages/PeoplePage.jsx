import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import Header from "../components/PeoplePage/Header";
// import InfiniteScroll from "../components/PeoplePage/InfiniteScroll";
import BottomNav from '../components/BottomNav.jsx';
import styled from 'styled-components';
import PeopleCardList from "../components/PeoplePage/PeopleCardList";
import PropTypes from 'prop-types';

const StyledPeople = styled.div`
    width: 390px;
    height: 100%;
    background-color: #F7F7F7;
`

const PeoplePage = ({isscrollingcardlist}) => {
    console.log("찍힘?")
    console.log("제대로 넘어왔나?", isscrollingcardlist)
    const bottomNavHeight = isscrollingcardlist ? "0px" : "46px"; 
    console.log("BottomNav 높이", bottomNavHeight)
    const bottomNavStyle = { height: bottomNavHeight };
    return (
        <StyledPeople>
            <Header/>
            <PeopleCardList isscrollingcardlist={isscrollingcardlist}/>
            {/* <InfiniteScroll/> */}
            {/* {isScrollingCardList === true ? <BottomNav type="people" style={{height: "0px"}}/> : <BottomNav type="people" />} */}
            <BottomNav type="people" style={bottomNavStyle}/>
        </StyledPeople>
    );
}

PeoplePage.propTypes = {
    isscrollingcardlist: PropTypes.bool.isRequired,
};

export default PeoplePage;
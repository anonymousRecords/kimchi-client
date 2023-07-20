import styled from 'styled-components';
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledBottomNav = styled.div`
    height: 5.188rem;
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: center;
    border-top-style: solid;
    border-top-width: 0.5px;
    background-color: #F7F7F7;

    button { 
        width: 8.125rem;
        height: 2.875rem;
        padding: 8.58px 0 6px 0;
        // background-color: red;
    }

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    /* 하단 네비바의 메뉴를 눌렀을 때 색상 변경*/
    .nav-item {
        color: grey;
    }

    /* 하단 네비바의 메뉴를 눌렀을 때 색상 변경*/
    .active {
        color: red;
    }
`

export default function BottomNav() {
    const [activeNav, setActiveNav] = useState(1);
    return (
        <StyledBottomNav>
            <nav>
                <Link to="/people" onClick={() => setActiveNav(1)}>
                    <button
                        className={activeNav === 1 ? "nav-item active" : "nav-item"}
                    >
                        <img src='/assets/icons/people.svg' alt='people'/>
                        <div>people</div>
                    </button>
                </Link>
                <Link to="/make" onClick={() => setActiveNav(2)}>
                    <button
                        className={activeNav === 2 ? "nav-item active" : "nav-item"}
                    >
                        <img src='/assets/icons/make.svg' alt='people'/>
                        <div>make</div>
                    </button>
                </Link>
                <Link to="/my" onClick={() => setActiveNav(3)}>
                    <button
                        className={activeNav === 3 ? "nav-item active" : "nav-item"}
                    >
                        <img src='/assets/icons/mypage.svg' alt='people'/>
                        <div>mypage</div>
                    </button>
                </Link>
            </nav>
        </StyledBottomNav>
    );
}
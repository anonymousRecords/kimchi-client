import styled from 'styled-components';
import React, { useState } from 'react';
import ModalOverlay from '../ModalOverlay';
import LanguageModal from './LanguageModal';
import AreaItem from './AreaItem';
import { AreaNames } from './AreaNames';

const StyledHeader = styled.div`
    height: 7.063rem;
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    // align-items: center;
    padding: 19px;
    background: pink;
    z-index: 10px;

    .header-first-row {
        display: flex;
        gap: 282px;
    }

    .header-first-row > div {
        font-size: 32px;
        font-weight: 600;
    }

    img {
        width: 36px;
        height: 36px;
    }
`

export default function Header() {
    // Area 토글 관리
    const [currentTitle, setCurrentTitle] = useState("Seoul");
    
    const handleContentClick = (clickedTitle) => {
        setCurrentTitle(clickedTitle);
    };

    // Language 모달창 관리
    const [showLanguage, setShowLanguage] = useState(false);

    const showLanguageHandler = () => {
        setShowLanguage(true);
      };
    
    const hideLanguageHandler = () => {
        setShowLanguage(false);
    };

    return (
        <StyledHeader>
            <div className='header-first-row'>
                <div>in</div>
                <button onClick={showLanguageHandler}>
                    <img src='/assets/icons/language.svg' alt='language'/>
                </button>
            </div>
            <AreaItem
                title={currentTitle}
                content={AreaNames}
                onContentClick={handleContentClick}
            />
            <ModalOverlay blur onHideModal={hideLanguageHandler} show={showLanguage}>
                <LanguageModal onHideModal={hideLanguageHandler}/>
            </ModalOverlay>
            
        </StyledHeader>
    );
}
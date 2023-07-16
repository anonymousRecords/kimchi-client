import styled from 'styled-components';
import React, { useState } from 'react';
import ModalOverlay from './ModalOverlay';
import LanguageModal from './LanguageModal';


const StyledHeader = styled.div`
    height: 7.063rem;
    padding: 19px;
    display: flex;
    justify-content: space-between;
    background: red;

    img {
        width: 36px;
        height: 36px;
    }
`

export default function Header() {
    // 모달창 관리
    const [showLanguage, setShowLanguage] = useState(false);

    const showLanguageHandler = () => {
        setShowLanguage(true);
      };
    
    const hideLanguageHandler = () => {
        setShowLanguage(false);
    };

    return (
        <StyledHeader>
            <div>
                <div>in</div>
                <div>Seoul</div>
            </div>
            <div>
                <button onClick={showLanguageHandler}>
                    <img src='/assets/icons/language.svg' alt='language'/>
                </button>
            </div>

            <ModalOverlay blur onHideModal={hideLanguageHandler} show={showLanguage}>
                <LanguageModal onHideModal={hideLanguageHandler}/>
            </ModalOverlay>
            
        </StyledHeader>
    );
}
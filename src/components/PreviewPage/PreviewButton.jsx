import styled from 'styled-components';
import ModalOverlay from '../ModalOverlay';
import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import GoogleModal from './GoogleModal';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';

const StyledPreviewButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 16px;
    gap: 8px;
    margin-top: 24px;

    .boast-btn {
        width: 358px;
        height: 52px;
        border-radius: 8px;
        border: 0;
        background-color: black;
        cursor: pointer;
        font-size: 18px;
        color: white;
        font-weight: 600;
    }

    .save-btn {
        width: 358px;
        height: 52px;
        border-radius: 8px;
        border: 0;
        background-color: white;
        border: 1px solid black;
        cursor: pointer;
        font-size: 18px;
        color: black;
        font-weight: 600;
    }
`

PreviewButton.propTypes = {
    cardRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  };

export default function PreviewButton ({cardRef}) {
    //구글 로그인
    const [showGoogle, setShowGoogle] = useState(false);

    const showGoogleHandler = () => {
        setShowGoogle(true);
      };
    
    const hideGoogleHandler = () => {
        setShowGoogle(false);
    };


    // 다운로드
    const onDownloadBtn = async () => {
        const card = cardRef.current;
        const filter = (card) => {
          return card.tagName !== 'BUTTON';
        };
    
        try {
          const blob = await domtoimage.toBlob(card, { filter: filter });
          saveAs(blob, 'card.png');
        } catch (error) {
          console.error('Error during download:', error);
        }
      };

    return(
        <StyledPreviewButton>
            <button className='boast-btn' onClick={showGoogleHandler}>자랑하기</button>
            <button className='save-btn' onClick={onDownloadBtn}>저장하기</button>

            <ModalOverlay blur onHideModal={hideGoogleHandler} show={showGoogle}>
                <GoogleModal hideGoogleHandler={hideGoogleHandler}/>
            </ModalOverlay>
        </StyledPreviewButton>
    )
}

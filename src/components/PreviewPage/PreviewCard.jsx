import styled from 'styled-components';
import React, { useState, useRef } from 'react'; // eslint-disable-line no-unused-vars
// import ModalOverlay from '../ModalOverlay';
// import GoogleModal from './GoogleModal';
// import domtoimage from 'dom-to-image';
// import { saveAs } from 'file-saver';

const StyledPreivewCard = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img-frame {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 358px;
        height: var(--image-frame-height);
        padding: 6px;
        padding-bottom: 57px;
        background: #E6E6E6;
        transform: translateY(45px);
        border: solid 1px #D8D8D8;
    }

    .img-row-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

    .img-select {
        position: relative;
        width: 164px;
        height: 164px;
        background: #fff;
        overflow: hidden;
        margin: 6px;
    }

    .preview-btn-container {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      padding: 16px;
      gap: 8px;
      margin-top: 24px;
    }

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

export default function PreivewCard () {
      // //구글 로그인
      // const [showGoogle, setShowGoogle] = useState(false);

      // const showGoogleHandler = () => {
      //     setShowGoogle(true);
      //   };
      
      // const hideGoogleHandler = () => {
      //     setShowGoogle(false);
      // };
  
  
      // // 다운로드
      // const onDownloadBtn = async () => {
      //     const card = cardRef.current;
      //     const filter = (card) => {
      //       return card.tagName !== 'BUTTON';
      //     };
      
      //     try {
      //       const blob = await domtoimage.toBlob(card, { filter: filter });
      //       saveAs(blob, 'card.png');
      //     } catch (error) {
      //       console.error('Error during download:', error);
      //     }
      //   };

  const cardRef = useRef();
    return (
      <StyledPreivewCard>
        <div className="image-page hidden">
          <div className="img-frame" ref={cardRef}> 
            <div className='img-row-container'>
              <div className="img-select empty"></div>
              <div className="img-select empty"></div>
            </div>
            <div className='img-row-container'>
              <div className="img-select empty"></div>
              <div className="img-select empty"></div>
            </div>
          </div>
          <input type="file" className="file-input hidden" accept=".jpeg, .png, .jpg" />
        </div>
        {/* <div className='preview-btn-container'>
            <button className='boast-btn' onClick={showGoogleHandler}>자랑하기</button>
            <button className='save-btn' onClick={onDownloadBtn}>저장하기</button>

            <ModalOverlay blur onHideModal={hideGoogleHandler} show={showGoogle}>
                <GoogleModal hideGoogleHandler={hideGoogleHandler}/>
            </ModalOverlay>
        </div> */}
      </StyledPreivewCard>
      );
    }
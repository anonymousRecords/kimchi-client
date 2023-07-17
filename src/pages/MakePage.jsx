import styled from 'styled-components';
import UploadPicture from '../components/MakePage/UploadPicture';
import ModalOverlay from '../components/ModalOverlay';
import PictureModal from '../components/MakePage/PictureModal';

import React, { useState } from 'react';

const StyledMake = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7F7;

    .picture-container {
        width: 358px;
        height: 409px;
        margin-top: 141px;
        background-color: #E6E6E6;
        padding: 3px;
    }

    .add-picture-btn {
        width: 164px;
        height: 164px;
        background-color: #F7F7F7;
        margin: 6px;
    }

    .add-picture-btn > img {
        width: 48px;
        height: 48px;
    }

    .next-btn {
        width: 358px;
        height: 52px;
        border-radius: 8px;
        border: 0;
        background-color: #D8D8D8;
        font-size: 18px;
        color: white;
        cursor: pointer;
        margin-top: 24px;
    }

    .next-btn:hover{
        background-color: black;
    }
`

const MakePage = () => {
    // MakePage 컴포넌트 내에서 onChange 함수를 정의합니다.
    const onChange = (e) => {
        // 파일 입력 변경에 대한 처리 로직을 여기에 추가합니다.
        console.log('파일 입력이 변경되었습니다:', e.target.files);
    };

    const [showPictureChoice, setShowPictureChoice] = useState(false);
    const showPictureChoiceHandler = () => {
        setShowPictureChoice(true);
      };
    
    const hidePictureChoiceHandler = () => {
        setShowPictureChoice(false);
    };

    return (
        <StyledMake>
            <div className='picture-container'>
                <tr>
                    <td>
                        <button className='add-picture-btn' onClick={showPictureChoiceHandler}>
                            <img src='/assets/icons/add-picture.svg' alt='add-picture'/>
                            <UploadPicture onChange={onChange} />
                        </button>
                        <button className='add-picture-btn' onClick={showPictureChoiceHandler}>
                            <img src='/assets/icons/add-picture.svg' alt='add-picture'/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='add-picture-btn' onClick={showPictureChoiceHandler}>
                            <img src='/assets/icons/add-picture.svg' alt='add-picture'/>
                        </button>
                        <button className='add-picture-btn' onClick={showPictureChoiceHandler}>
                            <img src='/assets/icons/add-picture.svg' alt='add-picture'/>
                        </button>
                    </td>
                </tr>
            </div>
            <button className='next-btn'>(서비스명) 만들기</button>

            <ModalOverlay blur onHideModal={hidePictureChoiceHandler} show={showPictureChoice}>
                <PictureModal onHideModal={hidePictureChoiceHandler}/>
            </ModalOverlay>
        </StyledMake>
    );
}

export default MakePage;
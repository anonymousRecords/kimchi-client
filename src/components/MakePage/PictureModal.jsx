import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.article`
  background-color: white;
  width: 320px;
  height: 200px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .choice-picture-btn {
    width: 288px;
    height: 44px;
    border-radius: 8px;
    border: 0;
    background-color: black;
    font-weight: bold;
    font-size: 18px;
    color: white;
    cursor: pointer;
    margin-bottom: 8px;
  }

  .cancel-btn {
    all: unset;
    margin-top: 8px;
    cursor: pointer;
  }
`;

export default function PictureModal(props) {
  return (
    <ModalWrapper>
        <div className='title'>사진을 선택해주세요.</div>
        <button className='choice-picture-btn'>카메라로 가져오기</button>
        <button className='choice-picture-btn'>앨범에서 가져오기</button>
        <button className='cancel-btn' onClick={props.onHideModal}>취소</button>
    </ModalWrapper>
  );
}

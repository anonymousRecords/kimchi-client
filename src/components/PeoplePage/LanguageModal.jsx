import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.article`
  background-color: white;
  margin: auto;
  width: 320px;
  height: 180px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;

  li {
    width: 320px;
    height: 42px;
    text-align: center;
    color: #A9A9A9 !important;
    cursor: pointer;
  }

  li:hover {
    color: black !important;
  }
`;

export default function LanguageModal() {
  return (
    <ModalWrapper>
        <ul>
            <li>한국어</li>
            <li>ENGLISH</li>
            <li>中國語</li>
            <li>日本語</li>
        </ul>
    </ModalWrapper>
  );
}

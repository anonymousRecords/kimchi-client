import React, { useState, useRef } from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import PreivewCard from "../components/PreviewPage/PreviewCard";
import PreviewHeader from "../components/PreviewPage/PreviewHeader";
import ModalOverlay from "../components/ModalOverlay";
import GoogleModal from "../components/PreviewPage/GoogleModal";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const PreviewPage = () => {
  // 다운로드
  const cardRef = useRef();
  const onDownloadButton = () => {
    const card = cardRef.current;
    const filter = (card) => {
      return card.tagName !== 'BUTTON';
    };
    domtoimage
      .toBlob(card, { filter: filter })
      .then((blob) => {
        saveAs(blob, 'card.png');
      });
  };

  // 구글 로그인
  const [showGoogle, setShowGoogle] = useState(false);

  const showGoogleHandler = () => {
    setShowGoogle(true);
  };

  const hideGoogleHandler = () => {
    setShowGoogle(false);
  };

  return (
    <StyledPreview>
      <PreviewHeader />
      <PageIntroduce>Show off your great photos!</PageIntroduce>
      <PreivewCard ref={cardRef} />
      <StyledPreviewButton>
      <BoastButton onClick={showGoogleHandler}>Show off</BoastButton>
      <DownLoadButton
        onClick={() => {
          onDownloadButton();
        }}
      >
        Download
      </DownLoadButton>

        <ModalOverlay blur onHideModal={hideGoogleHandler} show={showGoogle}>
          <GoogleModal hideGoogleHandler={hideGoogleHandler} />
        </ModalOverlay>
      </StyledPreviewButton>
    </StyledPreview>
  );
};

const StyledPreview = styled.div`
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`;

const PageIntroduce = styled.div`
  width: 100%;
  height: 80px;
  padding-left: 16px;
  padding-top: 18px;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledPreviewButton = styled.div`
  width: 100%;
  height: calc(100vh - 529px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 16px;
  gap: 8px;
`;

const BoastButton = styled.button`
  width: 358px;
  height: 52px;
  border-radius: 8px;
  border: 0;
  background-color: black;
  cursor: pointer;
  font-size: 18px;
  color: white;
  font-weight: 600;
`;

const DownLoadButton = styled.button`
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
`;

export default PreviewPage;

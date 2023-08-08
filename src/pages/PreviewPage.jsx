import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import PreivewCard from "../components/PreviewPage/PreviewCard";
import PreviewHeader from "../components/PreviewPage/PreviewHeader";
import PreviewButton from "../components/PreviewPage/PreviewButton";

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

const PreviewPage = () => {
  return (
    <StyledPreview>
      <PreviewHeader />
      <PageIntroduce>Show off your great photos!</PageIntroduce>
      <PreivewCard />
      <PreviewButton/>
    </StyledPreview>
  );
};

export default PreviewPage;

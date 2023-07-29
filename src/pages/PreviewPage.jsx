import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import PreivewCard from "../components/PreviewPage/PreviewCard";
import PreviewHeader from "../components/PreviewPage/PreviewHeader";
import PreviewButton from "../components/PreviewPage/PreviewButton";

const StyledPreview = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7F7;
`

const PreviewPage = () => {

  return (
      <StyledPreview>
        <PreviewHeader/>
        <PreivewCard/>
        <PreviewButton/>
      </StyledPreview>
    )
  };
  
  export default PreviewPage;

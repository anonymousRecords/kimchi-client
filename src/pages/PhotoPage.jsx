import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import PhotoHeader from "../components/PhotoPage/PhotoHeader";
import PhotoCard from "../components/PhotoPage/PhotoCard";
import { PhotoFeeling } from "../components/PhotoPage/PhotoFeeling";
import { useRecoilState } from "recoil";
import { PhotoFeelingAtom } from "../recoil/PhotoFeelingAtom";

const StyledFrame = styled.div`
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`;

const FrameTool = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

const FrameChoice = styled.div`
  width: 60px;
  height: 77px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .color-box {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-bottom: 2px;
    position: relative;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.10);

    &::before {
      content: url('/assets/icons/frame-check.svg'); 
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px; 
      height: 24px; 
      opacity: ${(props) => (props.isSelected ? 1 : 0)}; 
    }
  }
  .color-name {
    font-size: 12px;
  }
`
const FeelingImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-bottom: 2px;
  position: relative;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.10);

  &::before {
    content: url('/assets/icons/frame-check.svg'); 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px; 
    height: 24px; 
    opacity: ${(props) => (props.isSelected ? 1 : 0)}; 
    visibility: ${(props) => (props.isSelected ? 'visible' : 'hidden')};
  }
`

const PhotoPage = () => {
  const [selectedPhotoFeeling, setSelectedPhotoFeeling] = useState(PhotoFeeling[0]); // 선택한 프레임 색상을 상태로 관리합니다.
  const [photoFeelingChoice, setPhotoFeelingChoice] = useRecoilState(PhotoFeelingAtom);

  // Recoil atom인 FrameColorAtom의 상태를 설정하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    setPhotoFeelingChoice(PhotoFeeling);
  }, [setPhotoFeelingChoice]);

  const handleFrameSelect = (feeling) => {
    setSelectedPhotoFeeling(feeling.name);
    setPhotoFeelingChoice(feeling); 
  };

  console.log("선택된 감정:", photoFeelingChoice);

  return (
    <StyledFrame>
      <PhotoHeader/>
      <PhotoCard/>
      <FrameTool>
        {PhotoFeeling.map((feeling) => (
          <FrameChoice
            key={feeling.img}
            onClick={() => handleFrameSelect(feeling)}
            isSelected={feeling.name === selectedPhotoFeeling}
          >
            <FeelingImg 
              src={feeling.img}
            />
            <div className="feeling-name">{feeling.name}</div>
          </FrameChoice>
        ))}
      </FrameTool>
    </StyledFrame>
  );
};

export default PhotoPage;

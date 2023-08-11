import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import PhotoHeader from "../components/PhotoPage/PhotoHeader";
import PhotoCard from "../components/PhotoPage/PhotoCard";
import { PhotoFeeling } from "../components/PhotoPage/PhotoFeeling";
import { useRecoilState } from "recoil";
import { PhotoFeelingAtom } from "../recoil/PhotoFeelingAtom";
import FeelingModal from "../components/PhotoPage/FeelingModal";
import FeelingOverlay from "../components/PhotoPage/FeelingOverlay";

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
`;

const FrameChoice = styled.div`
  width: 60px;
  height: 77px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .color-box {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-bottom: 2px;
    position: relative;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);

    &::before {
      content: url("/assets/icons/frame-check.svg");
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
`;
const FeelingImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-bottom: 2px;
  // position: relative;
  // object-fit: fill;
  // box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);

  &::before {
    content: url("/assets/icons/frame-check.svg");
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    opacity: ${(props) => (props.isSelected ? 1 : 0)};
    visibility: ${(props) => (props.isSelected ? "visible" : "hidden")};
  }
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

const PhotoPage = () => {
  const [selectedPhotoFeeling, setSelectedPhotoFeeling] = useState(
    PhotoFeeling[0]
  );
  const [photoFeelingChoice, setPhotoFeelingChoice] =
    useRecoilState(PhotoFeelingAtom);

  useEffect(() => {
    setPhotoFeelingChoice(PhotoFeeling);
  }, [setPhotoFeelingChoice]);

  const handlePhotoSelect = (feeling) => {
    setSelectedPhotoFeeling(feeling);
    setPhotoFeelingChoice(feeling);
  };

  console.log("선택된 감정:", photoFeelingChoice);

  // Feeling 모달창 관리
  const [showFeeling, setShowFeeling] = useState(true);

  const showFeelingHandler = () => {
    setShowFeeling(true);
  };

  return (
    <StyledFrame>
      <PhotoHeader />
      <PageIntroduce>
        Choose your mood of the day
        <br />
        AI will be applied to your photos!
      </PageIntroduce>
      <PhotoCard showFeeling={showFeeling} />
      <FrameTool>
        {PhotoFeeling.map((feeling) => (
          <FrameChoice
            key={feeling.img}
            onClick={() => {
              handlePhotoSelect(feeling);
              showFeelingHandler();
            }}
            isSelected={feeling.name === selectedPhotoFeeling}
          >
            <FeelingImg
              src={
                feeling === selectedPhotoFeeling
                  ? feeling.afterImg
                  : feeling.beforeImg
              }
            />
            <div className="feeling-name">{feeling.name}</div>
          </FrameChoice>
        ))}
      </FrameTool>
      <FeelingOverlay blur show={showFeeling}>
        <FeelingModal />
      </FeelingOverlay>
    </StyledFrame>
  );
};

export default PhotoPage;

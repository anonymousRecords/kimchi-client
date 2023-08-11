import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import FrameCard from "../components/FramePage/FrameCard";
import FrameHeader from "../components/FramePage/FrameHeader";
import { useRecoilState } from "recoil";
import { FrameColorAtom } from "../recoil/FrameColorAtom";
import { FrameColor } from "../components/FramePage/FrameColor.js";

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

const FramePage = () => {
  const [frameColorChoice, setFrameColorChoice] = useRecoilState(FrameColorAtom);
  const [selectedFrameColor, setSelectedFrameColor] = useState(frameColorChoice);

  const handleFrameSelect = (frame) => {
    setFrameColorChoice(frame.color); 
    setSelectedFrameColor(frame.color); 
  };

  console.log("선택된 프레임:", frameColorChoice);

  return (
    <StyledFrame>
      <FrameHeader />
      <PageIntroduce>
        Choose your favorite color!
        <br />
        It will be applied to the frame.
      </PageIntroduce>
      <FrameCard frameColor={selectedFrameColor} />
      <FrameTool>
        {FrameColor.map((frame) => (
          <FrameChoice
            key={frame.color}
            onClick={() => handleFrameSelect(frame)}
            isSelected={frame.color === selectedFrameColor}
          >
            <div
              className="color-box"
              style={{ backgroundColor: frame.color }}
            ></div>
            <div className="color-name">{frame.name}</div>
          </FrameChoice>
        ))}
      </FrameTool>
    </StyledFrame>
  );
};

export default FramePage;

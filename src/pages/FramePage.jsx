import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import DecorateCard from "../components/DecoratePage/DecorateCard";
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

const FramePage = () => {
  const [selectedFrameColor, setSelectedFrameColor] = useState("black"); // 선택한 프레임 색상을 상태로 관리합니다.
  const [frameColorChoice, setFrameColorChoice] = useRecoilState(FrameColorAtom);

  // Recoil atom인 FrameColorAtom의 상태를 설정하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    setFrameColorChoice(FrameColor);
  }, [setFrameColorChoice]);

  const handleFrameSelect = (frame) => {
    setSelectedFrameColor(frame.color); // 클릭한 프레임의 색상을 상태로 설정합니다.
    setFrameColorChoice(frame); // 선택된 프레임 정보를 frameColorChoice에 저장합니다.
  };

  console.log("선택된 프레임:", frameColorChoice);

  return (
    <StyledFrame>
      <FrameHeader />
      <DecorateCard frameColor={selectedFrameColor} />
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

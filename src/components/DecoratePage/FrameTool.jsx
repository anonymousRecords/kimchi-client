import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { FrameColor } from './FrameColor';
import PropTypes from 'prop-types'; 

const StyledFrameTool = styled.div`
  width: 420px;
  height: 100px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-left: 16px;
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

    &::before {
      content: url('/assets/icons/frame-check.svg'); 
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px; /* Adjust the size of the SVG as needed */
      height: 24px; /* Adjust the size of the SVG as needed */
      opacity: ${(props) => (props.isSelected ? 1 : 0)}; 
    }
  }

  .color-name {
    font-size: 12px;
  }
`;

export default function FrameTool({ onFrameSelect }) {
    const [selectedFrame, setSelectedFrame] = useState(FrameColor[0]); // 초기 선택 프레임을 첫 번째 항목으로 설정합니다.

    const handleFrameClick = (frame) => {
      setSelectedFrame(frame);
      onFrameSelect(frame); // 프레임 선택 시, 선택한 프레임을 부모 컴포넌트로 전달합니다.
    };

    console.log("선택된 프레임:", selectedFrame);

    return (
        <StyledFrameTool>
        {FrameColor.map((frame) => (
          <FrameChoice
            key={frame.color}
            onClick={() => handleFrameClick(frame)} // 클릭 시 handleFrameClick 함수를 호출합니다.
            isSelected={frame.color === selectedFrame.color} 
          >
            <div className="color-box" style={{ backgroundColor: frame.color }}></div>
            <div className="color-name">{frame.name}</div>
          </FrameChoice>
        ))}
      </StyledFrameTool>
  );
}

FrameTool.propTypes = {
    onFrameSelect: PropTypes.func.isRequired,
  };
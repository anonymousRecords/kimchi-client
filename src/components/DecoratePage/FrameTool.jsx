import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { FrameColor } from './FrameColor';

const StyledFrameTool = styled.div`
  width: 420px;
  height: 100px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-left: 16px;

  .frame-choice {
    width: 60px;
    height: 77px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .color-box {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    margin-bottom: 2px;
  }

  .color-name {
    font-size: 12px;
  }
`;

export default function FrameTool() {
  return (
    <StyledFrameTool>
      {FrameColor.map((frame) => (
        <div className="frame-choice" key={frame.color}>
          <div className="color-box" style={{ backgroundColor: frame.color }}></div>
          <div className="color-name">{frame.name}</div>
        </div>
      ))}
    </StyledFrameTool>
  );
}

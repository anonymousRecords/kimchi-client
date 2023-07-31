import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { Link } from "react-router-dom";
import FrameTool from "../components/DecoratePage/FrameTool";
import PhotoTool from "../components/DecoratePage/PhotoTool";
import DecorateCard from "../components/DecoratePage/DecorateCard";

const StyledDecorate = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7F7;

    header {
        width: 390px;
        height: 73px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
    }

    .decorate-box {
        width: 358px;
        height: 48px;
        border-radius: 8px;
        background-color: #EEEEEE;
        padding: 4px;
        display: flex;
        gap: 8px;
    }

    .frame {
        width: 172px;
        height: 40px;
        border-radius: 8px;
        // background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .photo {
        width: 172px;
        height: 40px;
        border-radius: 8px;
        // background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-container{
        width: 118px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    .btn-container > p {
        color: white;
    }

    .selected {
        background-color: black;
        color: white; /* (Optional) Change text color when selected */
      }

    .tool-container {
        display: flex;
        justify-content: center;
        // align-items: center;
        width: 390px;
        height: 250px;
        overflow-x: scroll;
    }
`

const DecoratePage = () => {
  const [selectedButton, setSelectedButton] = useState("frame");
  const [selectedFrameColor, setSelectedFrameColor] = useState(null); // 선택한 프레임 색상을 상태로 관리합니다.

  const handleFrameSelect = (frame) => {
    setSelectedFrameColor(frame.color); // 클릭한 프레임의 색상을 상태로 설정합니다.
  };

  return (
      <StyledDecorate>
        <header>
          <button>
            <Link to="/make">
              <img src='/assets/icons/arrow-back.svg' alt='back-space'/>
            </Link>
          </button>
          <button>Done</button>
        </header>
        <div className='decorate-container'>
          <div className='decorate-box'>
            <button
              className={`frame ${selectedButton === "frame" ? "selected" : ""}`}
              onClick={() => setSelectedButton("frame")}
            >
              <div className='btn-container'>
                <img src='/assets/icons/palette.svg' alt='palette'/>
                <div>Frame Design</div>
              </div>
            </button>
            <button
              className={`photo ${selectedButton === "photo" ? "selected" : ""}`}
              onClick={() => setSelectedButton("photo")}
            >
              <div className='btn-container'>
                <img src='/assets/icons/ai-image.svg'alt='ai-img'/>
                <div>Photo AI</div>
              </div>
            </button>
          </div>
          <DecorateCard frameColor={selectedFrameColor} />
        </div>
        <div className="tool-container">
          {selectedButton === "frame" && <FrameTool onFrameSelect={handleFrameSelect} />}
          {selectedButton === "photo" && <PhotoTool/>}
        </div>
      </StyledDecorate>
    )
  };
  
  export default DecoratePage;

// import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
// import styled from 'styled-components';
// import PropTypes from 'prop-types'; 
// import { useRecoilState } from "recoil";
// import { FrameColorAtom } from '../../recoil/FrameColorAtom';

// const StyledFrameTool = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 12px;
// `

// const FrameChoice = styled.div`
//   width: 60px;
//   height: 77px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .color-box {
//     width: 60px;
//     height: 60px;
//     border-radius: 8px;
//     margin-bottom: 2px;
//     position: relative;
//     box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.10);
//     &::before {
//       /* content: url('${props => (props.isSelected && props.isWhite ? '/assets/icons/check_black.svg' : '/assets/icons/frame-check.svg')}'); */
//       /* content: url('${props => (props.isSelected && props.isWhite ? '/assets/icons/check_black.svg' : '/assets/icons/check_black.svg')}'); */
//       /* position: absolute; */
//       /* top: 50%;
//       left: 50%;
//       width: 24px; 
//       height: 24px;  */
//     }
//   }
//   .color-name {
//     font-size: 12px;
//   }
// `;

// export default function FrameTool({ onFrameSelect }) {
//     const [selectedFrame, setSelectedFrame] = useState(null);
//     const [frameColorList] = useRecoilState(FrameColorAtom);

//     const handleFrameClick = (frame) => {
//       setSelectedFrame(frame);
//       onFrameSelect(frame); 
//     };

//     console.log("선택된 프레임:", selectedFrame);

//     return (
//       <StyledFrameTool>
//         {frameColorList.map((frame) => (
//           <FrameChoice
//             key={frame.color}
//             onClick={() => handleFrameClick(frame)}
//             isSelected={frame === selectedFrame}
//             isWhite={frame.color === 'white'}
//           >
//             <div
//               className="color-box"
//               style={{ backgroundColor: frame.color }}
//             ></div>
//             <div className="color-name">{frame.name}</div>
//           </FrameChoice>
//         ))}
//       </StyledFrameTool>
//   );
// }

// FrameTool.propTypes = {
//     onFrameSelect: PropTypes.func.isRequired,
//   };
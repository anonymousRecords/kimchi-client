// import { useEffect } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { useRecoilState } from 'recoil';
// import { CardImageAtom } from '../../recoil/CardImageAtom';

// const StyledImageCard = styled.div`
//   margin-top: 140px;

//   .img-frame {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       // margin-top: 8.813rem;
//       width: 358px;
//       height: var(--image-frame-height);
//       padding: 6px;
//       padding-bottom: 57px;
//       background: #E6E6E6;
//       transform: translateY(45px);
//       border: solid 1px #D8D8D8;
//   }

//   .img-row-container{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .img-select {
//       position: relative;
//       width: 164px;
//       height: 164px;
//       background: #fff;
//       overflow: hidden;
//       margin: 6px;
//   }

//   .img-select.empty {
//       background-image: url("/assets/icons/add-picture.svg");
//       background-position: center;
//       background-repeat: no-repeat;
//   }

//   .img-select.empty:hover {
//       background-color: rgb(247, 247, 247);
//   }

//   .img {
//       position: absolute;
//       width: 236px;
//       height: auto;
//       -webkit-user-drag: none;
//       -khtml-user-drag: none;
//       -moz-user-drag: none;
//       -o-user-drag: none;
//       user-drag: none;
//       object-fit: cover;
//   }
// `
// const ImageRow = styled.div`
//   display: flex;
// `

// ImageCard.propTypes = {
//   data: PropTypes.func,
//   onImagesSelected: PropTypes.func,
// };

// export default function ImageCard ({data, onImagesSelected}) {
//   const [imageList, setImageList] = useRecoilState(CardImageAtom);

//   const AddImage = () => {
//     setImageList((prev) => [...prev, data]);
//   }

//   useEffect(() => {
//     setImageList([]);
//   }, []);

//   // 이미지 파일인지 확인
//   const fileExtentionCheck = (event) => {
//     const file = event.target;
//     const fileName = file.files[0].name.toLowerCase();

//     if (fileName.endsWith('jpg') || fileName.endsWith('png') || fileName.endsWith('jpeg')){
//       return true;
//     }

//     alert('png, jpg, jpeg 파일만 등록 가능합니다.');
//     file.value = '';
//     return false;
//   };

//   // 사진 업로드
//   const imageUpload = (e) => {
//     if (!e || !e.target) {
//       return;
//     }
  
//     if (e.target.className.includes('drag')) {
//       e.target.classList.remove('drag');
//       return;
//     }
  
//     let node = e.target;
//     const fileInput = document.querySelector('.file-input');
  
//     fileInput.click();
//     fileInput.onchange = (event) => {
//       if (!event || !event.target) {
//         return;
//       }
  
//       if (!fileExtentionCheck(event)) return;
  
//       if (node.nodeName === 'IMG') {
//         node = node.parentNode;
//       }
  
//       imagePreview(node, event, data);
//     };
//   };  

//   // 사진 제거
//   const imageRemove = (target) => {
//     target.innerHTML = '';
//     setImageList((prevImageList) =>
//     prevImageList.filter((img) => img !== target.firstChild.getAttribute('src'))
//   );
//   };

//   // 사진 미리보기
//   const imagePreview = (target, event) => {
//     const reader = new FileReader();

//     if (!event.target.files[0]) return;

//     imageRemove(target);

//     reader.onload = function (event) {
//       const img = document.createElement('img');
//       img.className = 'img';
//       img.setAttribute('src', event.target.result);
//       target.appendChild(img);
//       target.classList.remove('empty');
//       dragEvent(img);
//       if (typeof onImagesSelected === 'function') {
//         onImagesSelected(event.target.result);
//       }

//       // 이미지 목록 업데이트: 빈 요소에 대체하여 저장
//       setImageList((prevImageList) => {
//         const index = prevImageList.findIndex((item) => item === null);
//         if (index !== -1) {
//           const newImageList = [...prevImageList];
//           newImageList[index] = event.target.result;
//           return newImageList;
//         }
//           return prevImageList;
//         });
//     };

//     reader.readAsDataURL(event.target.files[0]);
//     const fileInput = document.querySelector('.file-input');
//     fileInput.value = '';
//   };

//   // 이미지 드래그
//   const dragEvent = (target) => {
//     let isPress = false;
//     let prevPosX = 0;
//     let prevPosY = 0;

//     const dragStart = (e) => {
//       isPress = true;
//       prevPosX = e.clientX;
//       prevPosY = e.clientY;
//     };

//     const dragEnd = () => {
//       isPress = false;
//     };

//     const moveImage = (e) => {
//       if (!isPress) return;

//       target.classList.add('drag');

//       const posX = prevPosX - e.clientX;
//       const posY = prevPosY - e.clientY;

//       prevPosX = e.clientX;
//       prevPosY = e.clientY;

//       target.style.left = target.offsetLeft - posX + 'px';
//       target.style.top = target.offsetTop - posY + 'px';
//     };

//     target.onmousedown = dragStart;
//     window.onmouseup = dragEnd;
//     window.onmousemove = moveImage;
//   };

//   useEffect(() => {
//     const $imageFrame = document.querySelector('.img-frame');
//     const $imageSelects = $imageFrame.querySelectorAll('.img-select');
//     const setImagePage = () => {
//       $imageSelects.forEach((item) => {
//         item.addEventListener('click', () => {
//           imageUpload();
//           AddImage();
//         });
//       });
//     };

//     setImagePage();
//     console.log('Image List:', imageList);
//   });

//   // Render two images per row
//   const renderImagesPerRow = () => {
//     const imageRows = [];

//     for (let i = 0; i < imageList.length; i += 2) {
//       const imageRow = (
//         <div className="img-row-container" key={i}>
//           <div className="img-select">
//             <img className="img" src={imageList[i]} alt={`Image ${i}`} />
//           </div>
//           {i + 1 < imageList.length && (
//             <div className="img-select">
//               <img className="img" src={imageList[i + 1]} alt={`Image ${i + 1}`} />
//             </div>
//           )}
//         </div>
//       );
//       imageRows.push(imageRow);
//     }

//     // Add empty image placeholders to fill the row if there are fewer than two images in the last row
//     const emptyImagePlaceholders = 4 - (imageList.length % 2 || 2);

//     for (let i = 0; i < emptyImagePlaceholders; i++) {
//       imageRows.push(
//         <div className="img-row-container" key={`empty-${i}`}>
//           <div className="img-select empty"></div>
//         </div>
//       );
//     }

//     return imageRows;
//   };

//   return (
//     <StyledImageCard>
//       <div className="image-page hidden">
//         <div className="img-frame">
//           {/* <div className='img-row-container'>
//             {imageList.map((imageUrl, index) => (
//                 <div className="img-select" key={index}>
//                   <img className="img" src={imageUrl} alt={`Image ${index}`} />
//                 </div>
//               ))} */}
//               {/* 빈 이미지 선택칸을 이미지 목록의 개수에 따라 렌더링 */}
//               {/* {Array.from({ length: 4 - imageList.length }, (_, index) => (
//                 <div className="img-select empty" key={index}></div>
//               ))}
//           </div> */}
//           <ImageRow>{renderImagesPerRow()}</ImageRow>
//           <ImageRow>{renderImagesPerRow()}</ImageRow>
//         </div>
//         <input type="file" className="file-input hidden" accept=".jpeg, .png, .jpg" />
//       </div>
//     </StyledImageCard>
//   );
// }
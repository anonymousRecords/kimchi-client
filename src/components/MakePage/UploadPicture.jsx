import { useState, useRef } from 'react';
import styled from 'styled-components';
import ModalOverlay from '../ModalOverlay';
import PictureModal from './PictureModal';

const StyledUploadPicture = styled.div`
    width: 164px;
    height: 164px;
    background-color: red;
    margin: 6px;

    #chooseFile {
      visibility: hidden;
    }

    .img-upload {
      background-color: blue;
      width: 0px;
      height: 0px;
    }

    .add-picture-btn {
      margin: 6px;
      width: 20px;
      height: 20px;
      position: relative;
      z-index: 2; 
    }

    .image-show {
      position: relative;
      z-index: 1; // Set the z-index for image-show
    }
`

export default function UploadPicture () {
    // 상태 및 함수 정의
    const [showPictureChoice, setShowPictureChoice] = useState(false);
    const showPictureChoiceHandler = () => {
      setShowPictureChoice(true);
    };
  
    const hidePictureChoiceHandler = () => {
      setShowPictureChoice(false);
    };
  
    const imageShowRef = useRef(null);
    const [fileName, setFileName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const imageUploadRef = useRef(null);
  
    function loadFile(event) {
      const file = event.target.files[0];
      setFileName(file.name);
      const newImage = URL.createObjectURL(file);
      setImageUrl(newImage);
    }
  
    function showImage() {
      const newImage = imageShowRef.current.lastElementChild;
      if (newImage) {
        newImage.style.visibility = 'visible';
        imageUploadRef.current.style.visibility = 'hidden';
        setFileName(''); // 기존 파일 이름 지우기
      }
    }
  
    return (
      <StyledUploadPicture>
        <div className='img-upload'>
          <form method="post" encType="multipart/form-data">
            <div className="button" onClick={showPictureChoiceHandler}>
              <label htmlFor="chooseFile">
                <img className="add-picture-btn" src='/assets/icons/add-picture.svg' alt='add-picture' />
              </label>
            </div>
            <input
              type="file"
              id="chooseFile"
              name="chooseFile"
              accept="image/*"
              onChange={loadFile}
            />
          </form>
        </div>
        <div className="image-show" ref={imageShowRef}>
          {imageUrl && (
            <img
              className="choice-img"
              src={imageUrl}
              alt="업로드된 이미지"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                visibility: 'hidden',
              }}
            />
          )}
        </div>
        <ModalOverlay blur onHideModal={hidePictureChoiceHandler} show={showPictureChoice}>
          <PictureModal
            fileName={fileName} 
            setFileName={setFileName}
            showImage={showImage}
            hidePictureChoiceHandler={hidePictureChoiceHandler}
          />
        </ModalOverlay>
      </StyledUploadPicture>
    );
}

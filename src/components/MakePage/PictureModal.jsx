import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalWrapper = styled.article`
  background-color: white;
  width: 320px;
  height: 200px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  .file-input {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .file-input > .title {
    font-size: 18px;
    font-weight: bold;
  }

  .file-input > .name {
    color: #A9A9A9;
    margin-bottom: 1rem;
  }

  .hidden-input {
    /* input 숨김 처리 */
    visibility: hidden;
  }

  .choice-picture-btn {
    width: 288px;
    height: 44px;
    border-radius: 8px;
    border: 0;
    background-color: black;
    font-weight: bold;
    font-size: 18px;
    color: white;
    cursor: pointer;
    margin-bottom: 8px;
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }

  .cancel-btn {
    all: unset;
    margin-top: 8px;
    cursor: pointer;
  }
`;

function PictureModal({
  fileName,
  setFileName,
  showImage,
  hidePictureChoiceHandler,
}) {
  const fileNameRef = useRef(null);

  function loadFile(event) {
    const file = event.target.files[0];
    setFileName(file.name);
    // const newImage = URL.createObjectURL(file);
    showImage();
  }

  // 제출 버튼을 클릭하여 모달창을 닫습니다.
  const handleSubmit = () => {
    hidePictureChoiceHandler();
  };

  return (
    <ModalWrapper>
      <div className="file-input">
        <p className='title'>파일 이름</p>
        <p className='name' ref={fileNameRef}>
          {fileName}
        </p>
      </div>
      <div className="button-container">
        <div className="choice-picture-btn" onClick={() => { handleSubmit(); showImage(); }} >
          선택하기
        </div>
        <input
          className='hidden-input'
          type="file"
          id="chooseFile"
          name="chooseFile"
          accept="image/*"
          onChange={loadFile}
          style={{ display: 'none' }}
        />
      </div>
      <div className="cancel-btn" onClick={hidePictureChoiceHandler}>
        취소
      </div>
    </ModalWrapper>
  );
}

PictureModal.propTypes = {
  fileName: PropTypes.string,
  setFileName: PropTypes.func.isRequired,
  showImage: PropTypes.func.isRequired,
  hidePictureChoiceHandler: PropTypes.func.isRequired,
};

export default PictureModal;
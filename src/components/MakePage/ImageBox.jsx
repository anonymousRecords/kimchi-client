import { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImageBox = styled.div`
  position: relative;
  width: 100%;
  background-color: #f7f7f7;
  &:before {
    display: block;
    content: "";
    padding-bottom: 100%;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  input {
    display: none;
  }
`;

const StyledPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledDeleteIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  z-index: 10;
`;

ImageBox.propTypes = {
  imageBlob: PropTypes.object,
  onUpload: PropTypes.func,
  onDelete: PropTypes.func,
};

export default function ImageBox({ imageBlob, onUpload, onDelete }) {
  const imageRef = useRef();

  const handleUploadClick = () => {
    imageRef.current.click();
  };

  const handleDeleteClick = () => {
    onDelete(imageBlob);
  };

  const handleChange = (event) => {
    const file = event.target.files[0];

    onUpload(file);
  };

  return (
    <StyledImageBox>
      <div className="content">
        {imageBlob ? (
          <>
            <StyledPicture src={URL.createObjectURL(imageBlob)} />
            <StyledDeleteIcon
              src="/assets/icons/delete-picture.svg"
              width="24"
              height="24"
              onClick={handleDeleteClick}
            />
          </>
        ) : (
          <img
            src="/assets/icons/add-picture.svg"
            width="48"
            height="48"
            onClick={handleUploadClick}
          />
        )}
        <input
          ref={imageRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </div>
    </StyledImageBox>
  );
}

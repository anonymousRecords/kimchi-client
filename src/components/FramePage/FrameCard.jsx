import styled from "styled-components";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { CardImageAtom } from "../../recoil/CardImageAtom";

const ImageFrame = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // margin-top: 8.813rem;
  display: grid;
  grid-gap: 6px;
  grid-template-columns: repeat(2, 1fr);
  width: 358px;
  height: 409px;
  padding: 6px;
  padding-bottom: 57px;
  background: #e6e6e6;
  border: solid 1px #d8d8d8;
  margin-top: 92px;
  margin-bottom: 28px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.20);
`

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  &:before {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

FrameCard.propTypes = {
  selectedImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  frameColor: PropTypes.string,
};

export default function FrameCard({frameColor}) {
  const imageList = useRecoilValue(CardImageAtom);

  return (
    <ImageFrame style={{ backgroundColor: frameColor}}>
    {imageList.map((imageBlob, index) => (
      <StyledImageWrapper key={index}>
        <StyledImage src={URL.createObjectURL(imageBlob)} />
      </StyledImageWrapper>
    ))}
  </ImageFrame>
  );
}

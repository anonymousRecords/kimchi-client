import styled from "styled-components";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { CardImageAtom } from "../../recoil/CardImageAtom";

const StyledDecorateCard = styled.div`
  .img-frame {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // margin-top: 8.813rem;
    display: grid;
    grid-gap: 6px;
    grid-template-columns: repeat(2, 1fr);
    width: 358px;
    height: var(--image-frame-height);
    padding: 6px;
    padding-bottom: 57px;
    background: #e6e6e6;
    transform: translateY(45px);
    border: solid 1px #d8d8d8;
  }

  .img-row-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .img-select {
    position: relative;
    width: 164px;
    height: 164px;
    background: #fff;
    overflow: hidden;
    margin: 6px;
  }
`;

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

DecorateCard.propTypes = {
  selectedImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  frameColor: PropTypes.string, // 프레임 색상 prop 추가
};

export default function DecorateCard({ frameColor }) {
  const imageList = useRecoilValue(CardImageAtom);

  return (
    <StyledDecorateCard>
      <div className="img-frame" style={{ backgroundColor: frameColor }}>
        {imageList.map((imageBlob, index) => (
          <StyledImageWrapper key={index}>
            <StyledImage src={URL.createObjectURL(imageBlob)} />
          </StyledImageWrapper>
        ))}
      </div>
    </StyledDecorateCard>
  );
}

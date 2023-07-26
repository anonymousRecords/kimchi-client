import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDecorateCard = styled.div`
    .img-frame {
        display: flex;
        flex-direction: column;
        align-items: center;
        // margin-top: 8.813rem;
        width: 358px;
        height: var(--image-frame-height);
        padding: 6px;
        padding-bottom: 57px;
        background: #E6E6E6;
        transform: translateY(45px);
        border: solid 1px #D8D8D8;
    }

    .img-row-container{
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
`

DecorateCard.propTypes = {
  selectedImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  frameColor: PropTypes.string, // 프레임 색상 prop 추가
};

export default function DecorateCard ({ frameColor }) {
    return (
      <StyledDecorateCard>
        <div className="image-page hidden">
          <div className="img-frame" style={{ backgroundColor: frameColor }}>
            <div className='img-row-container'>
              <div className="img-select empty"></div>
              <div className="img-select empty"></div>
            </div>
            <div className='img-row-container'>
              <div className="img-select empty"></div>
              <div className="img-select empty"></div>
            </div>
          </div>
          <input type="file" className="file-input hidden" accept=".jpeg, .png, .jpg" />
        </div>
      </StyledDecorateCard>
      );
    }
import styled from 'styled-components';

const StyledBoastCard = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img-frame {
        display: flex;
        flex-direction: column;
        align-items: center;
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

    .boast-btn-container {
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 16px;
      gap: 8px;
      margin-top: 24px;
    }

    .boast-btn {
      width: 176px;
      height: 52px;
      border-radius: 8px;
      border: 0;
      background-color: black;
      cursor: pointer;
      font-size: 18px;
      color: white;
      font-weight: 600;
  }

  .save-btn {
        width: 176px;
        height: 52px;
        border-radius: 8px;
        border: 0;
        background-color: white;
        border: 1px solid black;
        cursor: pointer;
        font-size: 18px;
        color: black;
        font-weight: 600;
  }
`

export default function BoastCard () {

    return (
      <StyledBoastCard>
        <div className="image-page hidden">
          <div className="img-frame"> 
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
      </StyledBoastCard>
      );
    }
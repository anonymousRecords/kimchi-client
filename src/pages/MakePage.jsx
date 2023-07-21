import styled from 'styled-components';
import ImageCard from '../components/MakePage/ImageCard';

const StyledMake = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7F7;

    .next-btn {
        width: 358px;
        height: 52px;
        border-radius: 8px;
        border: 0;
        background-color: #D8D8D8;
        font-size: 18px;
        color: white;
        cursor: pointer;
        margin-top: 50px;
    }

    .next-btn:hover{
        background-color: black;
    }
`

const MakePage = () => {

  const isValidate = () => {
    const $imageFrame = document.querySelector('.img-frame');
    const $imgEmpty = $imageFrame.querySelectorAll('.empty');

    if ($imgEmpty.length > 0) {
      alert('이미지를 추가해주세요.');
      return false;
    }

    return true;
  };

  const handleValidationClick = () => {
    isValidate();
  };

    return (
      <StyledMake>
        <ImageCard/>
        <button className='next-btn' onClick={handleValidationClick}>(서비스명) 만들기</button>
      </StyledMake>
    );
  }
  
  export default MakePage;

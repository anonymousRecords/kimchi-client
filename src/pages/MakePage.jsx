import styled from 'styled-components';
import ImageCard from '../components/MakePage/ImageCard';
import { useNavigate } from 'react-router-dom';

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
        background-color: ${(props) => (props.disabled ? '#D8D8D8' : 'black')};
        font-size: 18px;
        color: white;
        cursor: pointer;
        margin-top: 50px;
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

  const navigate = useNavigate();
  const handleValidationClick = () => {
    if (isValidate()) {
      console.log('All images are filled. You can proceed!');
      navigate('/decorate', { state: {} });
    }
  };

    return (
      <StyledMake>
        <ImageCard/>
        <button
          className='next-btn'
          onClick={handleValidationClick}
          disabled={false} 
        >
          (서비스명) 만들기
        </button>
      </StyledMake>
    );
  }
  
  export default MakePage;
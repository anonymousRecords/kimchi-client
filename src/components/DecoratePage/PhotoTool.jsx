import styled from 'styled-components';

const StyledPhotoTool = styled.div`
padding-top: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;

    .next-btn {
        width: 358px;
        height: 52px;
        border-radius: 8px;
        border: 0;
        background-color: ${(props) => (props.disabled ? '#D8D8D8' : 'black')};
        font-size: 18px;
        color: white;
        cursor: pointer;
    }
`

export default function PhotoTool () {

    return(
        <StyledPhotoTool>
            <button
            className='next-btn'
            >
            AI 적용하기
            </button>
            <div>AI를 적용할 사진을 선택해주세요.</div>
        </StyledPhotoTool>
    )
}

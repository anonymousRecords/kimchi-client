import styled from 'styled-components';
import UploadPicture from '../components/MakePage/UploadPicture';

const StyledMake = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7F7;

    .picture-container {
        width: 358px;
        height: 409px;
        margin-top: 141px;
        background-color: #E6E6E6;
        padding: 3px;
    }

    .next-btn {
        width: 358px;
        height: 52px;
        border-radius: 8px;
        border: 0;
        background-color: #D8D8D8;
        font-size: 18px;
        color: white;
        cursor: pointer;
        margin-top: 24px;
    }

    .next-btn:hover{
        background-color: black;
    }
`

const MakePage = () => {
    return (
      <StyledMake>
        <div className='picture-container'>
          <table>
            <tbody>
              <tr>
            <td>
              <UploadPicture/>
            </td>
            <td>
              <UploadPicture/>
            </td>
              </tr>
              <tr>
            <td>
              <UploadPicture/>
            </td>
            <td>
              <UploadPicture/>
            </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className='next-btn'>(서비스명) 만들기</button>
      </StyledMake>
    );
  }
  
  export default MakePage;

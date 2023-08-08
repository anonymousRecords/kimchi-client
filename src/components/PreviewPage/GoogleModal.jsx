import styled from 'styled-components';
import GoogleLoginButton from './GoogleLoginButton';
import PropTypes from 'prop-types';

const ModalWrapper = styled.article`
  background-color: white;
  margin: auto;
  width: 320px;
  height: 150px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .modal-guide{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .cancel-btn {
    margin-top: 16px;
  }
`;

GoogleModal.propTypes = {
  hideGoogleHandler: PropTypes.func.isRequired,
};

export default function GoogleModal({hideGoogleHandler}) {
  const handleCancelClick = () => {
    hideGoogleHandler();
  };

  return (
    <ModalWrapper>
        <div className='modal-guide'>It will be available after you log in.</div>
        <GoogleLoginButton/>
        <button className='cancel-btn' onClick={handleCancelClick}>Cancel</button>
    </ModalWrapper>
  );
}

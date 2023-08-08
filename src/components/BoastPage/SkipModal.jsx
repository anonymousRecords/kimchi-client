import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ModalWrapper = styled.article`
  background-color: white;
  margin: auto;
  width: 320px;
  height: 149px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .comment {
    font-size: 18px;
    font-weight: 600;
  }
`;

const ConfirmButton = styled.button`
  width: 288px;
  height: 44px;
  border-radius: 8px;
  background: #000;
  color: white;
  font-weight: 600;
  margin: 16px 0;
`;

const CancelButton = styled.button``;

export default function SkipModal({ hideSkipHandler }) {
  const navigate = useNavigate();

  return (
    <ModalWrapper>
      <div className="comment">Return to the main screen.</div>
      <ConfirmButton
        onClick={() => {
          navigate("/people");
        }}
      >
        Confirm
      </ConfirmButton>
      <CancelButton onClick={hideSkipHandler}>Cancel</CancelButton>
    </ModalWrapper>
  );
}

SkipModal.propTypes = {
  hideSkipHandler: PropTypes.func.isRequired,
};

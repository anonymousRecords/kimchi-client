import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoastHeader from "../components/BoastPage/BoastHeader";
import BoastCard from "../components/BoastPage/BoastCard";
import ModalOverlay from "../components/ModalOverlay";
import SkipModal from "../components/BoastPage/SkipModal";

const StyledBoast = styled.div`
  width: 390px;
  background-color: #f7f7f7;
`;

const BoastButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px;
  gap: 8px;
  margin-top: 24px;
`;
const AddLocationButton = styled.button`
  width: 176px;
  height: 52px;
  border-radius: 8px;
  border: 0;
  background-color: black;
  cursor: pointer;
  font-size: 18px;
  color: white;
  font-weight: 600;
`;

const SaveButton = styled.button`
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
`;

const BoastPage = () => {
  const navigate = useNavigate();
  const [showSkip, setShowSkip] = useState(false);

  const showSkipHandler = () => {
    setShowSkip(true);
  };

  const hideSkipHandler = () => {
    setShowSkip(false);
  };

  return (
    <StyledBoast>
      <BoastHeader />
      <BoastCard />
      <BoastButtonContainer>
        <AddLocationButton
          onClick={() => {
            navigate("/search");
          }}
        >
          위치 추가하기
        </AddLocationButton>
        <SaveButton onClick={showSkipHandler}>건너뛰기</SaveButton>
      </BoastButtonContainer>

      <ModalOverlay blur onHideModal={hideSkipHandler} show={showSkip}>
        <SkipModal hideSkipHandler={hideSkipHandler} />
      </ModalOverlay>
    </StyledBoast>
  );
};

export default BoastPage;

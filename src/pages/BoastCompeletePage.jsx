import styled from "styled-components";
import BoastCompeleteHeader from "../components/BoastCompeletePage/BoastComepleteHeader";
import BoastCompeleteCard from "../components/BoastCompeletePage/BoastCompeleteCard";
import { useNavigate } from "react-router-dom";

const StyledBoastComeplete = styled.div`
  width: 390px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px;
  gap: 8px;
  margin-top: 24px;
`;

const ResetLocationButton = styled.button`
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

const BoastButton = styled.button`
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

const BoastComepletePage = () => {
  const navigate = useNavigate();
  return (
    <StyledBoastComeplete>
      <BoastCompeleteHeader />
      <BoastCompeleteCard />
      <ButtonContainer>
        <ResetLocationButton
          onClick={() => {
            navigate("/search");
          }}
        >
          위치 재설정하기
        </ResetLocationButton>
        <BoastButton
          onClick={() => {
            navigate("/people");
          }}
        >
          자랑하기
        </BoastButton>
      </ButtonContainer>
    </StyledBoastComeplete>
  );
};

export default BoastComepletePage;

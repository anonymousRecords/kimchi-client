import styled from "styled-components";
import BoastCompeleteHeader from "../components/BoastCompeletePage/BoastComepleteHeader";
import BoastCompeleteCard from "../components/BoastCompeletePage/BoastCompeleteCard";
import { useNavigate } from "react-router-dom";

const StyledBoastComeplete = styled.div`
  width: 390px;
  height: calc(100vh - 71px);
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
    <>
      <BoastCompeleteHeader />
      <StyledBoastComeplete>
        <BoastCompeleteCard />
        <ButtonContainer>
          <ResetLocationButton
            onClick={() => {
              navigate("/search");
            }}
          >
            Location reset
          </ResetLocationButton>
          <BoastButton
            onClick={() => {
              navigate("/people");
            }}
          >
            Show off
          </BoastButton>
        </ButtonContainer>
      </StyledBoastComeplete>
    </>
  );
};

export default BoastComepletePage;

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledFrameHeader = styled.div`
  width: 362px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Pagination = styled.div`
  width: 116.67px;
  height: 4px;
  background-color: ${({ isBlack }) => (isBlack ? "black" : "#D9D9D9")};
  border-radius: 8px;
`;

export default function FrameHeader() {
  const navigate = useNavigate();
  return (
    <StyledFrameHeader>
      <PaginationBox>
        <Pagination isBlack={true} />
        <Pagination />
        <Pagination />
      </PaginationBox>
      <ArrowContainer>
        <img
          src="/assets/icons/arrow-left.svg"
          alt="left"
          onClick={() => {
            navigate("/make");
          }}
        />
        <img
          src="/assets/icons/arrow-right.svg"
          alt="right"
          onClick={() => {
            navigate("/photo");
          }}
        />
      </ArrowContainer>
    </StyledFrameHeader>
  );
}

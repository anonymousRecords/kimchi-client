import styled from "styled-components";
import BottomNav from "../components/BottomNav.jsx";
import { useNavigate } from "react-router-dom";
import ImageBox from "../components/MakePage/ImageBox.jsx";
import { useRecoilState } from "recoil";
import { CardImageAtom } from "../recoil/CardImageAtom.jsx";

const StyledMake = styled.div`
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`;

const ImageContainer = styled.div`
  margin-top: 160px;  
  display: grid;
  grid-gap: 6px;
  grid-template-columns: repeat(2, 1fr);
  width: 358px;
  padding: 6px;
  padding-bottom: 57px;
  background: #e6e6e6;
  border: solid 1px #d8d8d8;
`;

const StyledNextBtn = styled.button`
  width: 358px;
  height: 52px;
  border-radius: 8px;
  border: 0;
  background-color: ${(props) => (props.disabled ? "#D8D8D8" : "black")};
  font-size: 18px;
  color: white;
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 89px;
`;

const MakePage = () => {
  const [imageList, setImageList] = useRecoilState(CardImageAtom);

  const navigate = useNavigate();
  const handleValidationClick = () => {
    console.log("All images are filled. You can proceed!");
    navigate("/frame", { state: {} });
  };

  return (
    <StyledMake>
      <ImageContainer>
        {imageList.map((imageBlob, index) => (
          <ImageBox
            key={index}
            imageBlob={imageBlob}
            onUpload={(image) =>
              setImageList((prev) =>
                prev.map((item, i) => (index === i ? image : item))
              )
            }
            onDelete={(image) =>
              setImageList((prev) =>
                prev.map((item) => (image === item ? undefined : item))
              )
            }
          />
        ))}
      </ImageContainer>
      <StyledNextBtn
        onClick={handleValidationClick}
        disabled={imageList.some((image) => image === undefined)}
      >
        (서비스명) 만들기
      </StyledNextBtn>
      <BottomNav type="make" />
    </StyledMake>
  );
};

export default MakePage;

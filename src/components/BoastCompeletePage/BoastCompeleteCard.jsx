import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { CardImageAtom } from "../../recoil/CardImageAtom";
import { FrameColorAtom } from "../../recoil/FrameColorAtom";

const CompeleteCardContainer = styled.div`
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.10);
`
const CardHeader = styled.div`
  width: 358px;
  height: 30px;
  border-radius: 8px 8px 0 0;
  background-color: white;
  padding: 7px 12px; 0 12px;
  border: solid 1px #d8d8d8;
  border-bottom: none;
  display: flex;
  justify-content: space-between;
`
const UserID = styled.div`
  font-size: 12px;
  font-weight: 600;
`

const CreateDate = styled.div`
  color: #A9A9A9;
  font-size: 12px;
`

const ImageFrame = styled.div`
  background-color: ${(props) => props.frameColor};
  display: grid;
  grid-gap: 6px;
  grid-template-columns: repeat(2, 1fr);
  width: 358px;
  height: 409px;
  padding: 6px;
  border-left: solid 1px #d8d8d8;
  border-right: solid 1px #d8d8d8;
`

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  &:before {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CardFooter = styled.div`
    width: 358px;
    height: 51px;
    border-radius: 0 0 8px 8px;
    background-color: white;
    padding: 10px 0 0 12px;
    border: solid 1px #d8d8d8;
    border-top: none;
`

const LocationName = styled.div`
    font-size: 12px;
    font-weight: 600;
`

const LocationContent = styled.div`
    font-size: 12px;
`

export default function BoastCompeleteCard() {
  const imageList = useRecoilValue(CardImageAtom);
  const frameColorChoice = useRecoilValue(FrameColorAtom);

  return (
    <CompeleteCardContainer>
        <CardHeader>
            <UserID>@NEON</UserID>
            <CreateDate>23-07-01</CreateDate>
        </CardHeader>
        <ImageFrame frameColor={frameColorChoice}>
        {imageList.map((imageBlob, index) => (
            <StyledImageWrapper key={index}>
            <StyledImage src={URL.createObjectURL(imageBlob)} />
            </StyledImageWrapper>
        ))}
        </ImageFrame>
        <CardFooter>
            <LocationName>가천대학교 글로벌캠퍼스</LocationName>
            <LocationContent>경기도 성남시 수정구 성남대로 1342</LocationContent>
        </CardFooter>
    </CompeleteCardContainer>
  );
}

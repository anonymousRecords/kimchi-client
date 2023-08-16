import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { AreaUrlAtom } from "../../recoil/AreaUrlAtom";
import { useRecoilValue } from "recoil";

export default function PeopleCardList() {
  const [peopleCardData, setPeopleCardData] = useState([]);

  const SERVER_URL = "http://localhost:3001";
  const areaUrl = useRecoilValue(AreaUrlAtom);
  const completeUrl = SERVER_URL + areaUrl;
  console.log(completeUrl);

  const getPeopleCard = useCallback(async () => {
    const response = await axios.get(completeUrl);
    return response.data;
  }, [completeUrl]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPeopleCard();
        setPeopleCardData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [getPeopleCard]);

  console.log("데이터", peopleCardData);

  // 클립보드
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  return (
    <StyledPeopleCard>
      {peopleCardData.map((card, index) => (
        <CompeleteCardContainer key={index}>
          <CardHeader>
            <UserID>{card.googldId}</UserID>
            <CreateDate>{card.createDate}</CreateDate>
          </CardHeader>
          <ImageFrame framecolor={card.framecolor}>
            <StyledImageWrapper>
              <StyledImage src={card.photoFirst} />
            </StyledImageWrapper>
            <StyledImageWrapper>
              <StyledImage src={card.photoSecond} />
            </StyledImageWrapper>
            <StyledImageWrapper>
              <StyledImage src={card.photoThird} />
            </StyledImageWrapper>
            <StyledImageWrapper>
              <StyledImage src={card.photoFourth} />
            </StyledImageWrapper>
          </ImageFrame>
          <CardFooter>
            <LocationName>{card.placeName}</LocationName>
            <LocationContent
              onClick={() => handleCopyClipBoard(card.placeAddress)}
            >
              {card.placeAddress}
            </LocationContent>
          </CardFooter>
        </CompeleteCardContainer>
      ))}
    </StyledPeopleCard>
  );
}

const StyledPeopleCard = styled.div`
  height: calc(100vh - 167px);
  overflow-y: scroll;
  padding: 0 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const CompeleteCardContainer = styled.div`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  width: 358px;
  height: 30px;
  border-radius: 8px 8px 0 0;
  background-color: white;
  padding: 7px 12px 0 12px;
  border: solid 1px #d8d8d8;
  border-bottom: none;
  display: flex;
  justify-content: space-between;
`;
const UserID = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const CreateDate = styled.div`
  color: #a9a9a9;
  font-size: 12px;
`;

const ImageFrame = styled.div`
  background-color: ${(props) => props.framecolor};
  display: grid;
  grid-gap: 6px;
  grid-template-columns: repeat(2, 1fr);
  width: 358px;
  height: 358px;
  padding: 6px;
  border-left: solid 1px #d8d8d8;
  border-right: solid 1px #d8d8d8;
`;

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
`;

const LocationName = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const LocationContent = styled.div`
  font-size: 12px;
`;

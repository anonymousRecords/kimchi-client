import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { PhotoFeelingAtom } from "../../recoil/PhotoFeelingAtom";

const ModalWrapper = styled.article`
  background-color: transparent;
  margin: auto;
  width: 320px;
  height: 180px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeelingImg = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 22px;
`;

const AiComment = styled.div`
  color: #C9C9C9;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default function FeelingModal() {
  const feelingChoice = useRecoilValue(PhotoFeelingAtom);

  const imageSrc = feelingChoice === '/assets/icons/mad-w.svg'
  ? '/assets/icons/mad-w.svg'
  : feelingChoice.beforeImg;

  return (
    <ModalWrapper>
      <FeelingImg src = {imageSrc}/>
      <AiComment>AI is reflecting your mood.</AiComment>
    </ModalWrapper>
  );
}

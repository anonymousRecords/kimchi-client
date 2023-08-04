import styled from 'styled-components';

const ModalWrapper = styled.article`
  background-color: white;
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

const AbledButton = styled.button`
  width: 320px;
  height: 42px;
  text-align: center;
  color: black !important;
  cursor: pointer;
  &:hover {
    width: 308px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #000;
    color: white !important;
    font-weight: 600;
  }
`

const DisabledButton = styled.button`
  width: 320px;
  height: 42px;
  text-align: center;
  color: #D8D8D8;
  text-align: center;
  font-size: 16px;
  cursor: default;
`

export default function LanguageModal() {
  return (
    <ModalWrapper>
      <AbledButton>한국어</AbledButton>
      <AbledButton>ENGLISH</AbledButton>
      <DisabledButton>中國語</DisabledButton>
      <DisabledButton>日本語</DisabledButton>
    </ModalWrapper>
  );
}

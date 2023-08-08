import styled from "styled-components";
import GoogleLoginButton from "../components/PreviewPage/GoogleLoginButton";
import BottomNav from "../components/BottomNav.jsx";
import { useTranslation } from "react-i18next";

const StyledMy = styled.div`
  height: calc(100vh - 122px);
  background-color: #f7f7f7;
`;

const Header = styled.div`
  font-size: 32px;
  font-weight: 600;
  height: 76px;
  padding-left: 28px;
  padding-top: 14px;
  background-color: #f7f7f7;
`;

const MyPageContent = styled.div`
  height: 638px;
  display: flex;
  justify-content: center;
`;

function MyPage() {
  const { t } = useTranslation();
  return (
    <>
      <Header>mypage</Header>
      <StyledMy>
        <div>{t("testText")}</div>
        <MyPageContent>
          <GoogleLoginButton />
        </MyPageContent>
      </StyledMy>
      <BottomNav type="my" />
    </>
  );
}

export default MyPage;

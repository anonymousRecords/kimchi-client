import styled from "styled-components";
import GoogleLoginButton from "../components/PreviewPage/GoogleLoginButton";
import BottomNav from "../components/BottomNav.jsx";

const StyledMy = styled.div`
`

const Header = styled.div`
    font-size: 32px;
    font-weight: 600;
    height: 124px;
    padding-left: 24px;
    padding-top: 60px;
`

const MyPageContent = styled.div`
    height: 638px;
    display: flex;
    justify-content: center;
`

function MyPage() {
  return (
    <StyledMy>
        <Header>mypage</Header>
        <MyPageContent>
            <GoogleLoginButton/>
        </MyPageContent>
        <BottomNav type="my" />
    </StyledMy>
  );
}

export default MyPage;
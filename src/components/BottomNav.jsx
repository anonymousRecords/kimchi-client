import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import peopleImage from "/assets/icons/people.svg";
import peopleSelectImage from "/assets/icons/people-fill.svg";
import makeImage from "/assets/icons/make.svg";
import makeSelectImage from "/assets/icons/make-fill.svg";
import myImage from "/assets/icons/my.svg";
import mySelectImage from "/assets/icons/my-fill.svg";

const NavBarArticle = styled.article`
  width: 390px;
  height: 46px;
  background-color: #F7F7F7;
  border-top: 1px solid black;
  border-radius: 0px;
  padding-top: 6px;
  margin: 0px;
  // display: flex;
  // justify-content: space-between;
  // flex-direction: column;
  // align-items: center;
`;

const TabMenuUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const TabMenuLi = styled.li`
  margin: 0;
`;

const TabMenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  margin: 0;
`;

const NavImg = styled.img`
  width: 24px;
  height: 24px;
`

const P = styled.p`
  font-size: 10px;
  margin: 0;
`

const SelectP = styled.p`
  font-size: 10px;
  font-weight: 600;
  margin: 0;
`;

export default function NavBar({type}) {

  NavBar.propTypes = {
    type: PropTypes.oneOf(["people", "make", "my"]).isRequired,
  };

  const navigate = useNavigate();
  return (
    <NavBarArticle>
      <nav>
        <TabMenuUl>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/people");
              }}
            >
              {type === "people" ? (
                <NavImg src={peopleSelectImage} alt="people로 이동" />
              ) : (
                <NavImg src={peopleImage} alt="people로 이동" />
              )}
              {type === "people" ? <SelectP>people</SelectP> : <P>people</P>}
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/make");
              }}
            >
              {type === "make" ? (
                <NavImg src={makeSelectImage} alt="make으로 이동" />
              ) : (
                <NavImg src={makeImage} alt="make으로 이동" />
              )}
              {type === "make" ? <SelectP>make</SelectP> : <P>make</P>}
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/my");
              }}
            >
              {type === "my" ? (
                <NavImg src={mySelectImage} alt="my로 이동" />
              ) : (
                <NavImg src={myImage} alt="my로 이동" />
              )}
              {type === "my" ? <SelectP>mypage</SelectP> : <P>mypage</P>}
            </TabMenuLink>
          </TabMenuLi>
        </TabMenuUl>
      </nav>
    </NavBarArticle>
  );
}

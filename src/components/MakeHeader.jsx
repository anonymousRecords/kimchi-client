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
  position: fixed;
  bottom: 0;
  width: 390px;
  height: 96px;
  background-color: #F7F7F7;
  border-top: 1px solid black;
  border-radius: 0px;
  margin: 0px;
  z-index: 0;
`;

const TabMenuUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  // height: 6rem;
  width: 100%;
  // border-top: 1px solid ${(props) => props.black};
`;

const TabMenuLi = styled.li`
`;

const TabMenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
`;
const SelectP = styled.p`
  font-weight: 600;
`;

export default function MakeHeader({type}) {

  MakeHeader.propTypes = {
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
                <img src={peopleSelectImage} alt="people로 이동" />
              ) : (
                <img src={peopleImage} alt="people로 이동" />
              )}
              {type === "people" ? <SelectP>people</SelectP> : <p>people</p>}
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/make");
              }}
            >
              {type === "make" ? (
                <img src={makeSelectImage} alt="make으로 이동" />
              ) : (
                <img src={makeImage} alt="make으로 이동" />
              )}
              {type === "make" ? <SelectP>make</SelectP> : <p>make</p>}
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/my");
              }}
            >
              {type === "my" ? (
                <img src={mySelectImage} alt="my로 이동" />
              ) : (
                <img src={myImage} alt="my로 이동" />
              )}
              {type === "my" ? <SelectP>mypage</SelectP> : <p>mypage</p>}
            </TabMenuLink>
          </TabMenuLi>
        </TabMenuUl>
      </nav>
    </NavBarArticle>
  );
}

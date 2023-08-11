import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import styled from "styled-components";

export default function FeelingOverlay(props) {
  return (
    <Overlay show={props.show}>
      <Backdrop
        onClick={props.onHideModal}
        className={props.blur ? "blurEffect" : ""}
      />
      {props.children}
    </Overlay>
  );
}

FeelingOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
  onHideModal: PropTypes.func.isRequired,
  blur: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const Overlay = styled.div`
  width: 344px;
  height: 347px;
  fill: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 219px;
  display: ${(props) => (props.show ? "block" : "none")};
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);

  &.blurEffect {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
`;

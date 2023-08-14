import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function ModalOverlay(props) {
  return (
    <Overlay show={props.show}>
      <Backdrop
        onClick={props.onHideModal}
        className={props.blur ? 'blurEffect' : ''}
      />
      {props.children}
    </Overlay>
  );
}

ModalOverlay.propTypes = {
  show: PropTypes.bool.isRequired, 
  onHideModal: PropTypes.func.isRequired,
  blur: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const Overlay = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${props => (props.show ? 'block' : 'none')};
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(11, 19, 30, 0.37);

  &.blurEffect {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
`;

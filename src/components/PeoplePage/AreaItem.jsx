import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAreaItem = styled.div`
  font-size: 36px;
  font-weight: 800;
  z-index: 10;
`

const ToggleContainer = styled.div`
  position: fixed;
  width: 128px;
  height: 167px;
  background-color: white;
  overflow-y: scroll;
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.20);
`

const AreamName = styled.div`
  width: 120px;
  height: 30px;
  padding: 6px;
  font-size: 16px;
  font-weight: 400;
  color: #A9A9A9;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover{
    width: 120px;
    height: 30px;
    border-radius: 8px;
    background: #000;
    color: white;
    font-weight: 600;
  }
`

export default function AreaItem({ title, content, onContentClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleContentClick = (clickedTitle) => {
    onContentClick(clickedTitle);
    setIsExpanded(false);
  };

  return (
    <StyledAreaItem>
      <button onClick={handleToggle}>
        {isExpanded ? title : title}
        <img src='/assets/icons/toggle.svg' alt='toggle' />
      </button>
      {isExpanded && (
        <ToggleContainer>
          {content.map((item, index) => (
            <AreamName
              key={index}
              onClick={() => handleContentClick(item)}
            >
              {item}
            </AreamName>
          ))}
        </ToggleContainer>
      )}
    </StyledAreaItem>
  );
}

AreaItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  onContentClick: PropTypes.func.isRequired,
};

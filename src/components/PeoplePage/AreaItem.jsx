import { useState } from 'react';
import styled from 'styled-components';

const StyledAreaItem = styled.div`
font-size: 36px;
font-weight: 800;

.toggle-container {
  width: 128px;
  height: 340px;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #A9A9A9;
  background-color: white;
  cursor: pointer;
}
.toggle-container > div:hover {
  color: black;
  font-weight: 600;
}
`

export default function AreaItem ({ title, content, onContentClick }) {
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
          <img src='/assets/icons/toggle.svg' alt='toggle'/>
        </button>
        {isExpanded && (
          <div className='toggle-container'>
            {content.map((item, index) => (
              <div
                key={index}
                onClick={() => handleContentClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </StyledAreaItem>
    );
};
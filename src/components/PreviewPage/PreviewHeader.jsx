import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledPreviewHeader = styled.div`
width: 390px;
height: 71px;
margin-bottom: 28px;

display: flex;
justify-content: start;
align-items: center;
padding: 16px;
`

export default function PreviewHeader () {
    return(
        <StyledPreviewHeader>
            <Link to="/decorate">
                <img src="/assets/icons/arrow-back.svg"/>
            </Link>
        </StyledPreviewHeader>
    )
}

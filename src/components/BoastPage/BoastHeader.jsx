import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledBoastHeader = styled.div`
width: 390px;
height: 71px;
margin-bottom: 28px;

display: flex;
justify-content: start;
align-items: center;
padding: 16px;
`

export default function BoastHeader () {
    return(
        <StyledBoastHeader>
            <Link to="/preview">
                <img src="/assets/icons/arrow-back.svg"/>
            </Link>
        </StyledBoastHeader>
    )
}

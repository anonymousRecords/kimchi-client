import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledSearchHeader = styled.div`
width: 390px;
height: 71px;

display: flex;
justify-content: start;
align-items: center;
`

export default function SearchHeader () {
    return(
        <StyledSearchHeader>
            <Link to="/boast">
                <img src="/assets/icons/arrow-back.svg"/>
            </Link>
        </StyledSearchHeader>
    )
}

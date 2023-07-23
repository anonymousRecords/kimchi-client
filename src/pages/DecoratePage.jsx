import styled from 'styled-components';

const StyledDecorate = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7F7;
`

const DecoratePage = () => {
    return (
        <StyledDecorate>
            <div>Decorate Page</div>
        </StyledDecorate>
    )
};

export default DecoratePage;
import styled from "styled-components";

export const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.102);

}
@media screen and (max-width: 64em){
    font-size: ${props => props.theme.fontxxl};
}
`;


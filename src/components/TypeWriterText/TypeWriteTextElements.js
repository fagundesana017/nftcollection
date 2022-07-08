import styled from "styled-components";

export const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-items: flex-start;

span{
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
} 
.text-1{
    color: #153BC6;
}
.text-2{
    color: #E2970B;
}
.text-3{
    color: #C1141D;
}
@media screen and (max-width: 70em){
    font-size: ${(props) => props.theme.fontxl};
}
@media screen and (max-width: 48em){
   align-self: center;
   text-align: center;
}
@media screen and (max-width: 48em){
width: 90%;
}
`;

export const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-items: flex-start;

@media screen and (max-width: 40em){
    font-size: ${(props) => props.theme.fontmd};
}
@media screen and (max-width: 48em){
   align-self: center;
   text-align: center;
}

`;

export const ButtonContainer = styled.div`
width: 80%;
align-items: flex-start;

@media screen and (max-width: 48em){
   align-self: center;
   text-align: center;

   button{
    margin: 0 auto;
   }
}
`
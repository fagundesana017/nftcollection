import styled from "styled-components";

export const Section = styled.section`
min-height: 100vh;
height: auto;
background: ${props => props.theme.text};
position: relative;
color: ${(props)=> props.theme.body};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Title = styled.h1`
font-size: ${(props)=> props.theme.fontxxl};
text-transform: uppercase;
color: ${(props)=> props.theme.body};
width: fit-content;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;


@media screen and (max-width: 48em){
    font-size: ${(props)=> props.theme.fontxl};
}
`;

export const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;
@media screen and (max-width: 64em){
 width: 80%;
}
@media screen and (max-width: 48em){
 width: 90%;
 flex-direction: column;

 &>*:last-child{
    &>*:first-child{
    margin-top: 0;
}
 }
}
`
export const Box = styled.div`
width: 45%;

@media screen and (max-width: 64em){
 width: 90%;
 align-self: center;
}


`
import styled from "styled-components";

export const Section = styled.section`
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.text};

`;

export const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;

`;
export const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Title = styled.h2`
font-size: ${(props)=> props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${(props)=> props.theme.body};
align-self: flex-start;
margin: 0 auto;
`;

export const SubTitle = styled.p`
font-size: ${(props)=> props.theme.fontlg};
text-transform: capitalize;
width: 80%;
color: ${(props)=> props.theme.body}; 
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;
`

export const TextLight = styled.p`
font-size: ${(props)=> props.theme.fontmd};
text-transform: capitalize;
width: 80%;
color:${(props)=> `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;
`
export const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
align-self: flex-start;

`;
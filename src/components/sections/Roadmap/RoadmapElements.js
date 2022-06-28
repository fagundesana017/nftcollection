import styled from "styled-components";

export const Section = styled.section`
min-height: 100vh;
background: ${props => props.theme.body};
position: relative;
`;

export const Title = styled.h1`
font-size: ${(props)=> props.theme.fontxxl};
text-transform: capitalize;
color: ${(props)=> props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
`
export const Container = styled.div`
width: 70%;
height: 200vh;
background-color: ${(props) => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;

export const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
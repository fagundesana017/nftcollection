import styled, { keyframes } from "styled-components";

export const Section = styled.div`
min-height: 100vh;
width: 100%;
background: ${props => props.theme.text};
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&>*:first-child{
    animation-duration: 20s;
    @media screen and (max-width: 30em){
     animation-duration: 15s;
}
}
&>*:last-child{
    animation-duration: 15s;
    @media screen and (max-width: 30em){
     animation-duration: 10s;
}
}
`;

const move = keyframes`
0%{
 transform: translateX(100%);
}
100%{
 transform: translateX(-100%);
}
`

export const Row = styled.div`
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;
animation: ${move} 20s linear infinite ${props => props.direction};
`
export const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: ${props => props.theme.body};

border-radius: 20px;
cursor: pointer;
@media screen and (max-width: 48em){
     width: 12rem;
}

@media screen and (max-width: 30em){
     width: 10rem;
}
img{
    width: 100%;
    height: auto;
}
`;

export const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
    font-size: ${props => props.theme.fontsm};
    color:  ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
}
h1{
    font-size:  ${props => props.theme.fontmd};
    color: ${props => props.theme.body};
    font-weight: 600;
    @media screen and (max-width: 30em){
        font-size:  ${props => props.theme.fontsm};
    }
}
`;

export const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
    width: 1rem;
    height: auto;
}
`
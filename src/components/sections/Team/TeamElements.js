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

@media screen and (max-width: 48em){
    font-size: ${(props)=> props.theme.fontxl};
}
`;

export const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media screen and (max-width: 64em){
   width:80%;
}
@media screen and (max-width: 48em){
   width:90%;
   justify-content: center;
}
`;

export const Item = styled.section`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index: 5;

backdrop-filter: blur(4px);

border: 2px solid  ${props => props.theme.text};
border-radius: 20px;


&:hover{
    img{
        transform: translateY(-2rem) scale(1.2);
    }
}
@media screen and (max-width: 30em){
   width:70vw;
}
`;

export const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
border: 1px solid  ${props => props.theme.text}; ;
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
}

`
export const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`;

export const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
margin-top: 1rem;
font-weight: 400;
`;
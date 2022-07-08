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

@media screen and (max-width: 70em){
  width: 85%;
}

@media screen and (max-width: 64em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}
@media screen and (max-width: 40em){
 

  &>*:last-child{
    width: 90%;
  }
}
`;
export const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
min-height: 60vh;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 40em){
    min-height: 50vh;
}

`;

export const Title = styled.h2`
font-size: ${(props)=> props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${(props)=> props.theme.body};
align-self: flex-start;
margin: 0 auto;

@media screen and (max-width: 64em){
width: 100%;
text-align: center;
}
@media screen and (max-width: 40em){
font-size: ${(props)=> props.theme.fontxl};
}
@media screen and (max-width: 30em){
    font-size: ${(props)=> props.theme.fontlg};
}
`;

export const SubTitle = styled.p`
font-size: ${(props)=> props.theme.fontlg};
text-transform: capitalize;
width: 80%;
color: ${(props)=> props.theme.body}; 
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;

@media screen and (max-width: 64em){
width: 100%;
text-align: center;
font-size: ${(props)=> props.theme.fontmd};
}
@media screen and (max-width: 40em){
font-size: ${(props)=> props.theme.fontmd};
}
@media screen and (max-width: 30em){
    font-size: ${(props)=> props.theme.fontsm};
}
`

export const TextLight = styled.p`
font-size: ${(props)=> props.theme.fontmd};
text-transform: capitalize;
width: 80%;
color:${(props)=> `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;

@media screen and (max-width: 64em){
width: 100%;
text-align: center;
font-size: ${(props)=> props.theme.fontsm};
}
@media screen and (max-width: 40em){
font-size: ${(props)=> props.theme.fontsm};
}
@media screen and (max-width: 30em){
    font-size: ${(props)=> props.theme.fontxs};
}
`
export const ButtonContainer = styled.div`
width: 80%;
display: flex;
margin: 1rem auto;
align-self: flex-start;

@media screen and (max-width: 64em){
    width: 100%;

    button{
        margin: 0 auto;
    }
}
`;
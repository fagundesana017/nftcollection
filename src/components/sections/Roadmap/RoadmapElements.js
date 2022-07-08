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
@media screen and (max-width: 40em){
    font-size: ${(props)=> props.theme.fontxxl};
}
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

@media screen and (max-width: 64em){
width: 80%;
}
@media screen and (max-width: 48em){
width: 90%;
}
`;

export const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
export const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 48em){
width: 90%;
}

&>*:nth-of-type(2n + 1){
    justify-content: start;
    @media screen and (max-width: 48em){
    justify-content: center;
}
    
    div{
        border-radius: 50px 0 50px 0;
        text-align: right;
     
        @media screen and (max-width: 48em){
        border-radius: 0 50px 0 50px;
        text-align: left;
      p{
        border-radius: 0 40px 0 40px;
      }
}
    }
    p{
       border-radius: 40px 0 40px;
    }
}
&>*:nth-of-type(2n){
    justify-content:end;
    @media screen and (max-width: 48em){
    justify-content: center;
}

    div{
        border-radius: 0 50px 0 50px;
        text-align: left;


    }
    p{
        border-radius: 0 40px 0 40px;
    }
}
`;

export const Item = styled.li `
width: 100%;
height: 100%;
display: flex;
@media screen and (max-width: 48em){
    justify-content: flex-end !important;
}
`;

export const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};
@media screen and (max-width: 48em){
width: 70%;
}
`;

export const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid  ${props => props.theme.text};
`;

export const Subtitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color:  ${props => props.theme.text};

@media screen and (max-width: 40em){
    font-size: ${(props)=> props.theme.fontlg};
    font-weight: 600;
}
`;

export const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color:  ${props => props.theme.text};

font-weight: 400;
margin: 0.5rem 0;

@media screen and (max-width: 40em){
    font-size: ${(props)=> props.theme.fontxs};

}
`;
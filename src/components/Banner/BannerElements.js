import styled from "styled-components";

export const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top:2px solid ${props => props.theme.text};
border-top:2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;

@media screen and (max-width: 48em){
    height: 15rem;
    flex-direction: column;

    }
`;

export const ImgContainer = styled.div`
width: 80%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: space-between;
align-items: center;
opacity: 0.2;

img{
    width: 15rem;
    height: auto;
}
@media screen and (max-width: 48em){
    img{
    width: 10rem;
    height: auto;
}

    }
`;

export const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.body};
padding: 1rem 2rem;
z-index: 10;
width: 35%;
text-transform: capitalize;

text-shadow: 1px 1px 2px ${props => props.theme.text};

@media screen and (max-width: 64em){
    width: 40%;
    font-size: ${props => props.theme.fontxxl};
    text-align: center;
    }
    @media screen and (max-width: 48em){
    width: 100%;
    font-size: ${props => props.theme.fontxl};
    padding: 2rem 0;

    }
`;

export const BtnContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end;

@media screen and (max-width: 48em){
    width: 100%;
    justify-content: center;
}
`;

export const JoiNow = styled.button`
display: inline-block;
background: ${props => props.theme.body};
color:  ${props => props.theme.text};
outline: none;
border: none;
font-size: ${props => props.theme.fontlg};
font-weight: 600;
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.3s;
position: relative;

@media screen and (max-width: 48em){
    padding: 0.5rem 2rem;
}
@media screen and (max-width: 30em){
    padding: 1rem 2rem;
    font-size: ${props => props.theme.fontsm};
}


&:hover{
    transform: scale(0.9);
}
&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.body};   
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition:all .3s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: .23rem;
}
`
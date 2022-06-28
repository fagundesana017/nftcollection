import styled from "styled-components";

export const Btn = styled.button`
display: inline-block;
background: ${props => props.theme.text};
color:  ${props => props.theme.body};
outline: none;
border: none;
font-size: ${props => props.theme.fontsm};
padding: .8rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.3s;
position: relative;

&:hover{
    transform: scale(0.9);
}
&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
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
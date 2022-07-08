import styled from "styled-components";

export const Up = styled.div`
width: 3rem;
height: 3rem;

box-sizing: border-box;
margin: 0;
padding: 0;
color: ${props => props.theme.text};
background-color: #fff;

font-size: ${props => props.theme.fontlg};
position: fixed;
right: 2rem;
bottom: 1rem;

cursor: pointer;

display: none;
justify-content: center;
align-items: center;
border-radius: 50%;
transition: all 0.2s ease;

&:hover{
transform: scale(1.2);
}
&:active{
    transform: scale(0.9);
}
`
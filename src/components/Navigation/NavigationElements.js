import styled from "styled-components";

export const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body};
`;

export const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

.mobile{
    display: none;
}
@media screen and (max-width: 64em){
.desktop{
display: none;
}  
.mobile{
    display: inline-block;
}
}

`;

export const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-self: center;
list-style: none;

@media (max-width: 64em){
    position: fixed;
    top: ${props => props.theme.navHeight};
    align-items: center;
    left: 0;
    right: 0;
    bottom:0;
    width: 100vw;
    height: ${props =>`calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);

    transform: ${props => props.click ? 'translateY(1000%)' : 'translatey(0)'};
    transition: all 0.3s ease;

   justify-content:center ;
   flex-direction: column;
  

}

`

export const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;


&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: 0.4s ease;
}
&:hover::after{
    width: 100%;
    /* background: ${props => props.theme.text}; */
}
@media (max-width: 64em){
    margin: 1rem 0;

    &::after{
        display: none;
    }
}
`;

export const HamburgerMenu = styled.span`
width: ${props => props.click ? '1.5rem' : '2rem'};
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(0deg)' : 'translateX(-50%) rotate(90deg)'};

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all .3s ease;

@media screen and (max-width: 64em){
    /** 1024px */
    display: flex;

}

&::after, &::before{
    content: '  ';
    width: ${props => props.click ? '1.5rem' : '1rem'};
    height: 2px;
    right: ${props => props.click ? '0' : '-2px'};
    background: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;

}
&::after{
 top: ${props => props.click ? '0.5rem' : '0.3rem'};
 transform: ${props => props.click ? 'rotate(0)' : 'rotate(-40deg)'};
}
&::before{
    bottom: ${props => props.click ? '0.5rem' : '0.3rem'};
    transform: ${props => props.click ? 'rotate(0)' : 'rotate(40deg)'};
}
`
import styled from "styled-components";

export const Section = styled.section`
min-height: 100vh;
background: ${props => props.theme.body};
position: relative;
color: ${(props)=> props.theme.text};

display: flex;
/* justify-content: center;
align-items: center; */
flex-direction: column;
`;

export const Title = styled.h1`
font-size: ${(props)=> props.theme.fontxxl};
text-transform: uppercase;
color: ${(props)=> props.theme.text};
width: fit-content;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
`;

export const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props)=> props.theme.text};

@media screen and (max-width: 48em){
    width: 90%;
    h1{
        font-size: ${props => props.theme.fontxxxl};
    }
}
`;

export const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 48em){
    width: 100%;
}
`
export const IconsList = styled.div`
display: flex;
align-items: center;
margin: 0 auto;

&>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover{
        transform: scale(1.2);
    }
}
`;

export const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media screen and (max-width: 48em){
    display: none;
}
`;

export const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
}
&:hover::after{
    width: 100%;
}
`;

export const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
    text-decoration: underline;
}
@media screen and (max-width: 48em){
  flex-direction: column;
  width: 100%;

  span{
    margin-bottom: 1rem;
  }
}
`
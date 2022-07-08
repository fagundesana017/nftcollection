import styled from "styled-components";

import Arrow from "../../assets/Arrow.svg";

export const Container = styled.div` 
width: 25vw;
height: 70vh;

.swiper{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    background: ${props => props.theme.carouselColor};
    border-radius:20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
    display: none;
}
@media screen and (max-width: 64em){
    width: 3rem;
}
@media screen and (max-width: 30em){
    width: 2rem;
}
}
.swiper-button-prev{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
    display: none;
}
@media screen and (max-width: 64em){
    width: 3rem;
}
@media screen and (max-width: 30em){
    width: 2rem;
}
}

@media screen and (max-width: 70em){
    height: 60vh;
 
}

@media screen and (max-width: 64em){
    height: 50vh;
  width: 30vw;
 
}
@media screen and (max-width: 48em){
    height: 50vh;
  width: 40vw;
 
}
@media screen and (max-width: 30em){
    height: 45vh;
  width: 60vw;
 
}
`
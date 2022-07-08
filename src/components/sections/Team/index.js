import React from 'react';
import { Section, Title, Container, Item, ImageContainer, Name, Position } from './TeamElements';

import img1 from '../../../assets/Nfts/bighead.svg';
import img2 from '../../../assets/Nfts/bighead-1.svg';
import img3 from '../../../assets/Nfts/bighead-2.svg';
import img4 from '../../../assets/Nfts/bighead-3.svg';
import img5 from '../../../assets/Nfts/bighead-4.svg';
import img6 from '../../../assets/Nfts/bighead-5.svg';
import img7 from '../../../assets/Nfts/bighead-6.svg';
import img8 from '../../../assets/Nfts/bighead-7.svg';
import img9 from '../../../assets/Nfts/bighead-8.svg';
import Confetti from '../../Confetti';

export default function Team() {
  
  function MemberComponet({img, name =' ', position=' '}) {
   return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
   )
  }
 return (
    <Section id='team'>
      <Confetti/>
      <Title>Team</Title>
      <Container>
         <MemberComponet img={img1} name='Skyblaze' position='founder'/>
         <MemberComponet img={img2} name='Megnum' position='Co-founder'/>
         <MemberComponet img={img3} name='Monkey King' position='Director'/>
         <MemberComponet img={img4} name='Black panther' position='Manager'/>
         <MemberComponet img={img5} name='Deathstroke' position='Artist'/>
         <MemberComponet img={img6} name='Lazy kong' position='social media manager'/>
         <MemberComponet img={img7} name='Cyber punk' position='blockchain Specialist'/>
         <MemberComponet img={img8} name='monk' position='Web3 developer'/>
         <MemberComponet img={img9} name='Banana' position='Graphic designer'/>

      </Container>
    </Section>
 );
}
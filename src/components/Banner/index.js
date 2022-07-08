import React from 'react';
import { Section, ImgContainer, Title,BtnContainer, JoiNow } from './BannerElements';

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';

import Button from '../Button';

export default function Banner() {
 return (
   <Section>
    <ImgContainer>
     <img src={img1} alt='The Weirdos'/>
     <img src={img2} alt='The Weirdos'/>
     <img src={img3} alt='The Weirdos'/>
     <img src={img4} alt='The Weirdos'/>
     <img src={img5} alt='The Weirdos'/>
     <img src={img6} alt='The Weirdos'/>
    </ImgContainer>
    <Title>Join the <br/> weirdos club</Title>
    <BtnContainer>
     <JoiNow>
      Join Now
     </JoiNow>
    </BtnContainer>
   </Section>
 );
}
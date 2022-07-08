import React, { useRef } from 'react';
import { Section, Row, ImgContainer, Details, Price } from './ShowcaseElements';

import img1 from '../../../assets/Nfts/bighead.svg';
import img2 from '../../../assets/Nfts/bighead-1.svg';
import img3 from '../../../assets/Nfts/bighead-2.svg';
import img4 from '../../../assets/Nfts/bighead-3.svg';
import img5 from '../../../assets/Nfts/bighead-4.svg';
import img6 from '../../../assets/Nfts/bighead-5.svg';
import img7 from '../../../assets/Nfts/bighead-6.svg';
import img8 from '../../../assets/Nfts/bighead-7.svg';
import img9 from '../../../assets/Nfts/bighead-8.svg';
import img10 from '../../../assets/Nfts/bighead-9.svg';
import ETH from '../../../assets/icons8.png';
export default function Showcase() {

function NftItem({img, number=0, price=0, passRef}){

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }


  return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
     <img src={img} alt='The Weirdos' />
     <Details>
      <div>
        <span>Weirdos</span><br/>
        <h1>#{number}</h1>
      </div>
      <div>
        <span>Prince</span>
        <Price>
          <img src={ETH} alt='ETH'/>
          <h1>{Number(price).toFixed(1)}</h1>
        </Price>
        
      </div>
     </Details>
    </ImgContainer>
  )
}
const Row1Ref = useRef(null);
const Row2Ref = useRef(null);

 return (
   <Section id='showcase'>
     <Row direction='none' ref={Row1Ref}>
        <NftItem img={img1} number={852} price={1}  passRef = {Row1Ref} />
        <NftItem img={img2} number={123} price={1.2}  passRef = {Row1Ref} />
        <NftItem img={img3} number={456} price={2.5}  passRef = {Row1Ref} />
        <NftItem img={img4} number={666} price={3.5}  passRef = {Row1Ref} />
        <NftItem img={img5} number={452} price={4.7}  passRef = {Row1Ref} />
     </Row> 
     <Row  direction='reverse' ref={Row2Ref}>
        <NftItem img={img6} number={888} price={1.2}  passRef = {Row2Ref} />
        <NftItem img={img7} number={211} price={3.2}  passRef = {Row2Ref} />
        <NftItem img={img8} number={455} price={1.8}  passRef = {Row2Ref} />
        <NftItem img={img9} number={456} price={5.1}  passRef = {Row2Ref} />
        <NftItem img={img10} number={865} price={3.7}  passRef = {Row2Ref} />
     </Row>
   </Section>
 );
}
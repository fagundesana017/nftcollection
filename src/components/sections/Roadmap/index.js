import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import DrawSvg from '../../DrawSvg';

import {Box, Section, Title, Text, Subtitle, Container, SvgContainer, Items, Item, ItemContainer} from './RoadmapElements';


const RoadMapItem = ({title, subtext, addToRefs}) =>{
  return(
      <Item ref={addToRefs}>
          <ItemContainer>
            <Box>
              <Subtitle>
                {title}
              </Subtitle>
              <Text>
                {subtext}
              </Text>
            </Box>
          </ItemContainer>
      </Item>
  )
}


export default function Roadmap() {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  function addToRefs(el){
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(()=>{
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) =>{
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0',
        },
        {
          y: '-30%',

          scrollTrigger:{
            id:`section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: 'bottom center',
            scrub:true,
           

          }
        }
      )
    })
    return () =>{

    }
  },[])
 return (
  <Section id='roadmap'>
    <Title>Roadmap</Title>
    <Container>
        <SvgContainer>
          <DrawSvg/>
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem addToRefs={addToRefs} title='Grand Opening'  subtext=" Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."/> 
          <RoadMapItem addToRefs={addToRefs} title='Great Benefits'  subtext=" Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."/> 
          <RoadMapItem addToRefs={addToRefs} title='Early Access'  subtext=" Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."/> 
          <RoadMapItem addToRefs={addToRefs} title='New march'  subtext=" Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."/> 
          <RoadMapItem addToRefs={addToRefs} title='Holders ranking'  subtext=" Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."/> 

        </Items>
    </Container>
  </Section>
 );
}

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { VectorContainer, Ball } from './DrawSvgElements';

import Vector from '../../icons/Vector';

export default function DrawSvg() {

  const ref = useRef(null);
  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() =>{
    let element = ref.current;
    let svg = document.getElementsByClassName("svg-path")[0];

    const length = svg.getTotalLength();

    //start positioning of svg drawing
    //
    svg.style.strokeDasharray = length;

    //Hide svg before scrolling start
    //
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
        scrollTrigger:{
          trigger:element,
          start:"top center",
          end:"bottom bottom",
          onUpdate: (self) =>{
            const draw = length * self.progress;

            //also reserve the drawing when scroll goes up
            //
            svg.style.strokeDashoffset = length - draw;
          },
          onToggle: self =>{
            if (self.isActive) {
              // console.log("Scrolling is active");
              ballRef.current.style.display = 'none';
            }else{
              // console.log('Scrolling is not active');
              ballRef.current.style.display = 'inline-block';
            }
          }
        }
    })
  return () =>{
      if (t1) t1.kill();
  } 
  },[])
  
  return (
    <>
    <Ball ref={ballRef}/>
    <VectorContainer ref={ref}>
        <Vector/>
    </VectorContainer>
    </>

  );
  }
import React, {useRef,useLayoutEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { VectorContainer } from './DrawSvgElements';

import Vector from '../../icons/Vector';

export default function DrawSvg() {
const ref = useRef(null);

gsap.registerPlugin(ScrollTrigger);

useLayoutEffect(() => {
    let element = ref.current;

    let svg = document.getElementsByClassName("svg-path")[0];

    const lenght = svg.getTotalLength();

    console.log(lenght);

    svg.style.strokeDasharray = lenght;

    svg.style.strokeDashoffset = lenght;
     
    let t1 = gsap.timeline({
        scrollTrigger:{
            trigger:element,
            start:'top center',
            end:'bottom bottom',
            onUpdate: (self) =>{
                const draw = lenght * self.progress;

                svg.style.strokeDashoffset = lenght - draw;
            }

        }
    })
  return () => {
  };
},[]);
 
 return (
   <VectorContainer>
    <Vector/>
   </VectorContainer>
   
 );
}
import React, { useRef , useLayoutEffect} from 'react';
import { useWindowScroll } from 'react-use';
import { Up } from './ScrollToTop';

export default function ScrollToTop() {


  const ref = useRef(null);
  const {y} = useWindowScroll();


  function scrollToTop() {
    let element = document.getElementById('navigation');
    
    element.scrollIntoView({
      behavior: 'smooth',
      block:'start',
      inline: 'nearest'
    })
  }

  useLayoutEffect(() => {
    if(y > 200){
      ref.current.style.display = 'flex'
    }else{
      ref.current.style.display = 'none'

    }
  }, [y])

 return (
   <Up ref={ref} onClick={() => scrollToTop()}>
      &#x2191;
   </Up>
 );
}
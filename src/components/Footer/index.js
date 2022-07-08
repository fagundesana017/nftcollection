import React from 'react';

import Banner from '../Banner';
import Facebook from  '../../icons/Facebook';
import Instagram from '../../icons/Instagram';
import Twitter from '../../icons/Twitter';
import LinkedIn from '../../icons/LinkedIn';
import Logo from '../Logo';
import { Section,Container, Left, IconsList, MenuItems, Item, Bottom } from './FooterElements';

export default function Footer() {
  function scrollTo(id) {
    let element = document.getElementById(id);
    
    element.scrollIntoView({
      behavior: 'smooth',
      block:'start',
      inline: 'nearest'
    })
  }

 return (
   <Section>
    <Banner/>
    <Container>
      <Left>
        <Logo/>
        <IconsList>
          <a href='http://facebook.com' target={'_blank'} rel='noopener'>
           <Facebook/>
          </a>
          <a href='http://instagram.com' target={'_blank'} rel='noopener'>
           <Instagram/>
          </a>
          <a href='http://twitter.com' target={'_blank'} rel='noopener'>
           <Twitter/>
          </a>
          <a href='http://linkedin.com' target={'_blank'} rel='noopener'>
           <LinkedIn/>
          </a>
        </IconsList>
      </Left>
      <MenuItems>
        <Item onClick={() => scrollTo('home')}>Home</Item>
        <Item onClick={() => scrollTo('about')}>About</Item>    
        <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item> 

        <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
        <Item onClick={() => scrollTo('team')}>Team</Item>    
        <Item onClick={() => scrollTo('faq')}>Faq</Item> 
      </MenuItems>
    </Container>
    <Bottom>
      <span>
        &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
      </span>
      <span>
        Made with &#10084; by <a href='http://youtube.com' target='_blank'>YouTube</a>
      </span>
    </Bottom>
   </Section>
 );
}
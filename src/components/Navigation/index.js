import React from 'react';
import {Section, NavBar, Menu,MenuItem} from './Navigation';

import Logo  from '../Logo';
import Button from '../Button';


export default function Navigation() {
 return (
   <Section>
    <NavBar>
     <Logo/>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Roadmap</MenuItem>
        <MenuItem>Showcase</MenuItem>
        <MenuItem>Team</MenuItem>
        <MenuItem>Faq</MenuItem>
        </Menu>
      
        <Button text='Connect Wallet' link='https://google.com'/>
       
    </NavBar>
   </Section>
 );
}
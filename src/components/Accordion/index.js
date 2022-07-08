import React, {useState} from 'react';
import { Minus } from '../../icons/Minus';
import { Plus } from '../../icons/Plus';

import { Container, Title, Reveal, Name, Indicador} from './AccordionElements';
export default function Accordion({title, children}) {
 
    const [collapse, setCollapse] = useState(false);
 
    return (
   <Container>
     <Title onClick={() => setCollapse(!collapse)}>
       <Name>
         <span>{title}</span>
       </Name>
       {
         collapse ?
         <Indicador>
            <Minus/>
         </Indicador> : 
         <Indicador>
            <Plus/>
         </Indicador>
       }
     </Title>
     <Reveal clicked={collapse}>
        {children}
     </Reveal>
   </Container>
 );     
}
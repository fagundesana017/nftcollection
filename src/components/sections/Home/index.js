import React from 'react';

import {Box, Container, Section,Round,Circle} from './HomeElements'
import TypeWriteText from '../../TypeWriterText'
import CoverVideo from '../../CoverVideo';

import round from '../../../assets/Rounded-Text-Black.png';

export default function Home() {
 return (
     <Section>
      <Container>
        <Box>
         <TypeWriteText/>
        </Box>
        <Box>
          <CoverVideo/>
        </Box>  
        <Round>
          <Circle>
            &#x2193;
          </Circle>
          <img src={round} alt='NFT'/>
        </Round>
      </Container>
     </Section>
 
 );
}
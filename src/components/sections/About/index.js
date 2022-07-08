import React from 'react';
import Carousel from '../../Carousel';

import Button from '../../Button';
import { Box, Container, Section, Title, SubTitle, TextLight,ButtonContainer} from './AboutElements';
import {dark} from '../../../styles/Themes';
import { ThemeProvider } from 'styled-components';

export default function About() {
 return (
   <Section id='about'>
    <Container>
      <Box>
        <Carousel/>
      </Box>
      <Box>
        <Title>
          Welcome to The <br/> weirdos club
        </Title>
        <SubTitle>The WEIRDOS CLUB is a privatee collection of NFTs-unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS</SubTitle>
        <TextLight>
          With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitiuos ever-growing community with multiple benefits and utilities.
        </TextLight>
        <ButtonContainer>
        <ThemeProvider theme={dark}>
        <Button text='JOIN OUR DISCORD' link="#"></Button>
        </ThemeProvider>
        </ButtonContainer>
      </Box>
    </Container>
   </Section>
 );
}
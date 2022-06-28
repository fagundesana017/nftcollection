import React from 'react';
import Typewriter from 'typewriter-effect';

import { Title, SubTitle,ButtonContainer } from './TypeWriteTextElements';
import Button from '../Button'


export default function TypeWriterText() {
 return (
      <>
      <Title>
        Discover a new era of cool
        <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter.typeString('<span class="text-1">NFTs.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">Collectible Items.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-3">Ape Killers!</span>')
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
      </Title>
      <SubTitle>Bored Of Apes? Try Something New</SubTitle>
      <ButtonContainer>
      <Button text='Explore' link='#about'/>
      </ButtonContainer>
      </>
 );
}
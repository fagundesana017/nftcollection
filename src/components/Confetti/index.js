import React from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function Confetti() {
    const {width, height} = useWindowSize();
 return (
   <ReactConfetti
    numberOfPieces={150}   
    gravity={0.01}
    width={width}
    height={height * 1.0}
 
    />
 );        
}
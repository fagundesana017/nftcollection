import React from 'react';

import {VideoContainer} from './CoverVideoElements';
import GIF from '../../assets/HomeGIF.gif';

export default function CoverVideo() {
 return (
   <VideoContainer>
        <img src={GIF}/>
   </VideoContainer>
 );
}
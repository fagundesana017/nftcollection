import React from 'react';

import { Btn } from './ButtonElements';

export default function Button({text, link}) {
 return (
   <Btn>
 <a href={link} aria-label={text} target="_blank" rel='noreferrer'>
    {text}
 </a>
   </Btn>
 );
}
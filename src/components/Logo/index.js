import React from 'react';
import {Link} from 'react-router-dom';

import {LogoText} from './LogoElements';

export default function Logo() {
 return (
   <LogoText>
    <Link to='/'>
    W.
    </Link>
   </LogoText>
 );
}
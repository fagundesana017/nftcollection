import React from 'react';
import DrawSvg from '../../DrawSvg';

import {Section, Title, Container, SvgContainer} from './RoadmapElements';
export default function Roadmap() {
 return (
  <Section>
    <Title>Roadmap</Title>
    <Container>
        <SvgContainer>
          <DrawSvg/>
        </SvgContainer>
    </Container>
  </Section>
 );
}

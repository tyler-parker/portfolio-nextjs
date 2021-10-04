import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Browse projects, learn more about me, get in touch.
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1t2JPKuSkqIbCez7mnIHSJdYMMhRv0a_g/view?usp=sharing'}>See Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
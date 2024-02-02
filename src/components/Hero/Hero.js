import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ResumeLink } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding id="/">
    <LeftSection>
      <SectionTitle main center>
        Hey, I'm Brandon
      </SectionTitle>
      <SectionText>
        Welcome to my website! 
      </SectionText>
      <SectionText>
        I'm a software engineer passionate about creating applications with great user experiences in mind.
      </SectionText>
      <Button><ResumeLink href='Brandon_Tieu_Resume.pdf' target="_blank">Resume</ResumeLink></Button>
    </LeftSection>
  </Section>
);

export default Hero;
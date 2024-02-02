import {  GridContainer } from './AboutStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'; 
import Profile from './Profile';
import Description from './Description';
const About = () => {
  return (
  <Section id="about">
    <SectionDivider/>
    <SectionTitle main> About Me </SectionTitle>
    <GridContainer>
      <Profile source='/images/pfp.jpg'/>
      <Description/>
    </GridContainer>

  </Section>)
}

export default About;
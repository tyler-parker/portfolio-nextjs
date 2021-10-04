import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked on a range of technologies I've used to build on the web!
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br /> ReactJS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br /> NodeJS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with <br /> React.js</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

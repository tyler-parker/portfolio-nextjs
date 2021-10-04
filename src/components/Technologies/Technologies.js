import React from 'react';
import { DiFirebase, DiReact, DiHtml5 } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies to build on the web!
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>ReactJS <br /> NextJS <br /> Ruby on Rails</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Chakra UI <br /> Material UI <br /> Bootstrap</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Expresss <br /> Mongo DB <br /> Microsoft SQL Server <br /> PostgreSQL</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;

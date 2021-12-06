import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <CompanyContainer>
          <Slogan>I look forward to meeting you!</Slogan>
        </CompanyContainer>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:801-505-2960'>(801)-505-2960</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:tparker42d2@gmail.com'>tparker42d2@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
      <SocialIconsContainer >
        <SocialContainer>
          <SocialIcons href="https://github.com/tyler-parker">
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/tylerparkerdev/">
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;

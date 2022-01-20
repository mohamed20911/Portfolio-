import React from 'react';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMediumCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mohamed9919698@gmail.com">
            mohamed9919698@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Programing-School">
            <AiFillGithub size="3rem" target="_blank" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/mohamed-ehab-164193208/">
            <AiFillLinkedin size="3rem" target="_blank" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/mohamedehab2463/">
            <AiFillInstagram size="3rem" target="_blank" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/groups/programingchannel">
            <AiFillFacebook size="3rem" target="_blank" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/groups/programingchannel">
            <AiFillTwitterCircle size="3rem" target="_blank" />
          </SocialIcons>
          <SocialIcons href="https://medium.com/@mohamed9919698">
            <AiFillMediumCircle size="3rem" target="_blank" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="https://www.youtube.com/channel/UC1YTVmV31RZV2oie1kKpJkw">
        <a
          style={{ display: "flex", alignItems: "center", color: "white" }}
          target="_blank"
        >
          <DiCssdeck size="3rem" /> <span>Programing-School</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;

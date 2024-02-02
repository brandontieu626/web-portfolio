import Link from 'next/link';
import React from 'react';
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';
import { DiCompass } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';


const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems:"center",color:'white',marginBottom:'20px'}}>
          <DiCompass size="3rem"/>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink> About </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink> Projects </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink> Technologies </NavLink>
        </Link>
      </li>
      <li>
        <Link href='#favorites'>
          <NavLink>Favorites</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/brandontieu626">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/brandon-tieu-68b133184/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

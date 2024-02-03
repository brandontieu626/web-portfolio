import React from "react";
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

// import { SocialIcons } from '../Header/HeaderStyles';
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:brandontieu626@gmail.com">
            brandontieu626@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;

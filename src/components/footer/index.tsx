import React from "react";
import { Link } from "gatsby";
import Logo from "../logo";

import { FooterLinks, StyledFooter, UserInfo } from "./styled";

import {
  FacebookFilled,
  LinkedinFilled,
  GithubFilled,
  MailOutlined,
  EnvironmentOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { links } from "../navbar";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <FooterLinks>
        {links.map(({ path, label, id }) => {
          return (
            <Link key={id} to={path}>
              {label}
            </Link>
          );
        })}
      </FooterLinks>
      <section>
        <a target="_blank" href="https://www.facebook.com/keifer.ramos.146">
          <FacebookFilled />
        </a>
        <a target="_blank" href="https://github.com/KeiferRamos">
          <GithubFilled />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/keifer-ramos-409962244/"
        >
          <LinkedinFilled />
        </a>
      </section>
      <UserInfo>
        <div>
          <EnvironmentOutlined />
          Metro Manila, Philippines
        </div>
        <div>
          <MailOutlined />
          keiferramos2001@gmail.com
        </div>
        <div>
          <MessageOutlined />
          0912-3456-789
        </div>
      </UserInfo>
    </StyledFooter>
  );
}

export default Footer;

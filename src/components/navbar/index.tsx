import { StyledLinks, StyledNav, StyledSide } from "./styled";
import { Link } from "gatsby";
import {
  MenuOutlined,
  FileOutlined,
  ExperimentOutlined,
  MessageOutlined,
  BranchesOutlined,
  ProfileOutlined,
  ApartmentOutlined,
  AppstoreOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Logo from "../logo";

type LinkType = {
  path: string;
  label: string;
  id: number;
  icon: React.ReactNode;
};

export const links: LinkType[] = [
  { path: "/docs/introduction", label: "Docs", id: 3, icon: <FileOutlined /> },
];

function NavBar() {
  const [hide, setHide] = useState(true);

  return (
    <StyledNav>
      <Logo />
      <MenuOutlined className="menu-bar" onClick={() => setHide(false)} />
      <StyledSide style={{ right: hide ? "100%" : 0 }}>
        <header>
          <Logo />
          <MenuOutlined className="menu-bar" onClick={() => setHide(true)} />
        </header>
        <ul>
          {links.map(({ path, label, id, icon }) => (
            <li key={id}>
              <div>
                <span>{icon}</span>
                <Link to={path} activeClassName="active">
                  {label}
                </Link>
              </div>
              {label === "Docs" ? (
                <StyledLinks>
                  <Link to="/docs/introduction" activeClassName="active">
                    <CodeOutlined />
                    <p>Intro</p>
                  </Link>
                  <Link to="/docs/request" activeClassName="active">
                    <BranchesOutlined />
                    <p>Requesting</p>
                  </Link>
                  <Link to="/docs/parameters" activeClassName="active">
                    <ProfileOutlined />
                    <p>Parameters</p>
                  </Link>
                  <Link to="/docs/using-axios" activeClassName="active">
                    <ApartmentOutlined />
                    <p>Using Axios</p>
                  </Link>
                  <Link to="/docs/schema" activeClassName="active">
                    <AppstoreOutlined />
                    <p>Schema</p>
                  </Link>
                </StyledLinks>
              ) : null}
            </li>
          ))}
        </ul>
      </StyledSide>
    </StyledNav>
  );
}

export default NavBar;

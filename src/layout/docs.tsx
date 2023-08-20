import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import {
  FolderOpenOutlined,
  BranchesOutlined,
  ProfileOutlined,
  ApartmentOutlined,
  AppstoreOutlined,
  CodeOutlined,
} from "@ant-design/icons";

import Layout from "./index";

export const StyledContainer = styled.div`
  position: relative;
  padding-top: 8em;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 5em;

  aside {
    ul {
      position: sticky;
      top: 8em;

      .active {
        color: #258ce7;
      }

      a,
      div {
        display: flex;
        align-items: center;
        color: #747272;
        margin-bottom: 2em;
        gap: 15px;

        p {
          width: 100px;
        }

        svg {
          font-size: 25px;
        }
      }

      a {
        cursor: pointer;
        margin-left: 2em;
      }
    }
  }

  @media (max-width: 700px) {
    padding-top: 6em;
    display: grid;
    grid-template-columns: 1fr;
    aside {
      display: none;
    }
  }
`;

function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <StyledContainer>
        <aside>
          <ul>
            <div>
              <FolderOpenOutlined />
              <p>Documentation</p>
            </div>
            <Link to="/docs" activeClassName="active">
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
          </ul>
          <div></div>
        </aside>
        {children}
      </StyledContainer>
    </Layout>
  );
}

export default DocsLayout;

import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import styled from "styled-components";

const StyledLayout = styled.div`
  .main-content {
    padding: 0 10em;

    @media (max-width: 950px) {
      padding: 10px 2em;
    }

    @media (max-width: 700px) {
      padding: 10px;
    }
  }
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledLayout>
      <NavBar />
      <div className="main-content">{children}</div>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;

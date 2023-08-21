import React, { useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import styled from "styled-components";
import ContactMe from "../components/contact";

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
  const [close, setClose] = useState(true);

  const handleClick = () => setClose(!close);

  return (
    <StyledLayout>
      <NavBar handleClick={handleClick} />
      <div className="main-content">{children}</div>
      <Footer />
      <ContactMe close={close} handleClick={handleClick} />
    </StyledLayout>
  );
}

export default Layout;

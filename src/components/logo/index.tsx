import React from "react";
import { Link } from "gatsby";
import { ApiOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  h1 {
    font-size: 25px;

    span {
      margin-right: 5px;
      color: #e94d61;
    }
  }

  svg {
    color: #258ce7;
  }
`;

function Logo() {
  return (
    <StyledLogo to="/">
      <h1>
        <ApiOutlined />
        Code & <span>Deploy</span>
      </h1>
    </StyledLogo>
  );
}

export default Logo;

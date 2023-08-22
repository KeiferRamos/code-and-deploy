import styled from "styled-components";

export const StyledContent = styled.div`
  position: fixed;
  width: 360px;
  height: 100vh;
  top: 0;
  transition: all 0.7s;
  background-color: #fff;
  z-index: 10000;
  padding: 20px;

  .close-btn {
    position: absolute;
    top: 20px;
    width: 30px;
    right: 20px;
  }

  .banner-image {
    width: 100%;
  }

  input {
    height: 30px;
    border: 1px solid #bebebe;
  }

  button {
    background: #258ce7;
    color: #fff;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10em;
  z-index: 10000;
  background-color: #fff;

  svg {
    font-size: 25px;
  }

  .menu-bar,
  header {
    display: none;
  }

  @media (max-width: 950px) {
    padding: 10px 2em;
  }

  @media (max-width: 700px) {
    .menu-bar {
      display: block;
    }

    padding: 10px;
  }
`;

export const StyledLinks = styled.section`
  margin-top: 2em;
  padding-left: 2em;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 2em;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

export const StyledSide = styled.div`
  list-style: none;
  transition: all 0.7s;

  .active {
    color: #e94d61;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1em;

    button {
      background: #258ce7;
      color: #fff;
      display: flex;
      justify-content: center;
    }

    li {
      a {
        font-weight: 600;
        font-size: 13px;
        text-transform: uppercase;
      }
      span {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background: #fff;
    transition: all 0.7s;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100px;
      padding: 0 20px;
    }

    ul {
      display: grid;
      gap: 2em;
      padding: 0 1em;

      div {
        display: flex;
        align-items: center;
        gap: 1em;
      }

      li {
        a {
          font-weight: 600;
          font-size: 13px;
          text-transform: uppercase;
        }

        span {
          display: block;
          color: #258ce7;
        }
      }
    }
  }
`;

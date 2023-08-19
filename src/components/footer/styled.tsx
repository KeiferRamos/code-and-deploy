import styled from "styled-components";

export const StyledFooter = styled.div`
  display: grid;
  place-items: center;
  gap: 1em;
  background: #fff;
  margin-top: 3em;
  padding: 2em 10em;

  svg {
    font-size: 25px;
    color: #258ce7;
    margin-right: 5px;
  }

  @media (max-width: 700px) {
    padding: 20px 10px;
    margin-top: 2em;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  div {
    display: flex;
  }

  @media (max-width: 500px) {
    gap: 5px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 0.5em;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;

  .active {
    background: #fff;
    color: #e94d61;
  }

  a {
    width: 90px;
    background: #e94d61;
    color: #fff;
    text-align: center;
    padding: 6px;
    border-radius: 3px;

    &:hover {
      background: #fff;
      color: #e94d61;
    }
  }
`;

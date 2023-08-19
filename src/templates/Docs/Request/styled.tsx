import styled from "styled-components";

export const StyledContainer = styled.div`
  font-family: "Preahvihear", sans-serif;

  div {
    width: 100%;
  }

  .data {
    &-key {
      color: #4ea3df;
    }

    &-boolean {
      color: #f7e987;
    }

    &-string {
      color: #5b9a8b;
    }

    &-number {
      color: #e65d5d;
    }
  }

  header {
    p {
      margin: 5px 0;
    }
  }

  kbd {
    background: #e94d61;
    color: #fff;
    padding: 2px 4px;
    border-radius: 2px;
  }

  b {
    background: #9dcbec;
    padding: 0 4px;
    color: #0b77c5;
    border-radius: 3px;
  }

  p {
    margin: 20px 0;
  }

  .response,
  .request-body {
    background: #272727;
    color: #bebebe;
    padding: 20px;
    border-radius: 3px;

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;

import styled from 'styled-components';

export const StyledContainer = styled.div`
  header {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }

  p {
    a {
      color: #e94d61;
    }
  }

  .links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 1em;
    border-top: 1px solid #bebebe;
    margin-top: 2em;
    padding-top: 1em;

    a {
      display: flex;
      justify-content: center;
      gap: 2em;
      align-items: center;
      border-radius: 5px;
      margin-top: 1em;
      color: #fff;
      padding: 2em;

      button {
        background: #f38e07;
        color: #fff;
        margin-top: 5px;
      }

      img {
        width: 80px;
      }
    }
  }
`;

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  gap: 0.5em;
  margin-top: 1em;

  div {
    padding: 25px 0;
    border-radius: 5px;
    background: #fff;
    display: grid;
    gap: 5px;
    justify-content: center;
    text-align: center;

    h4 {
      font-weight: bold;
    }

    span {
      color: #e94d61;
      font-weight: bold;
    }

    ul {
      li {
        font-size: 15px;
        font-family: 'Nunito', sans-serif;
        color: #8b8a8a;
      }
    }

    img {
      width: 70px;
      margin-bottom: 10px;
    }
  }
`;

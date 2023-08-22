import { Carousel } from "antd";
import styled from "styled-components";

export const HerroBanner = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  gap: 1em;

  header {
    margin-right: auto;
  }

  button {
    background-color: #e94d61;
    color: #ffff;
    margin-top: 5px;
  }

  div {
    display: grid;
    color: #258ce7;
    font-size: 32px;
    gap: 2px;

    p {
      color: #e94d61;
      font-size: 11px;
      margin-bottom: 3px;
      font-weight: bold;
      text-transform: uppercase;
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
  }

  img {
    height: 60%;
  }

  @media (max-width: 1200px) {
    img {
      height: 50%;
    }
  }

  @media (max-width: 1100px) {
    img {
      height: 40%;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 10px;
    height: auto;
    margin-bottom: 2em;
    margin-top: 8em;

    header {
      width: 100%;
      display: grid;
      text-align: center;
      place-items: center;
    }

    img {
      width: 100%;
      height: auto;
      order: 3;
    }

    div {
      display: flex;

      p {
        display: none;
      }
    }
  }
`;

export const StyledDiv = styled.section`
  position: relative;
  width: 100%;
  height: 450px;
  margin-bottom: 3em;
  background: rgba(0, 0, 0, 0.6);

  .bg-1 {
    position: absolute;
    height: 100%;
    width: 75%;
    top: 0;
    right: 0;
    object-fit: cover;
    z-index: -1;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  .bg-2 {
    position: absolute;
    height: 100%;
    width: 25%;
    left: 0;
    z-index: -2;
    object-fit: cover;
  }

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 2em;
    right: 0;
    bottom: 0;
    background: #fff;
    height: 45%;

    width: 75%;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  button {
    background-color: #258ce7;
    color: #ffff;
    margin-top: 10px;
    width: max-content;
  }
`;

export const StyledCarousel = styled(Carousel)`
  position: relative;
  margin-bottom: 2em;

  .arrow {
    position: absolute;
    bottom: 101%;
    background: #323131;
    color: #fff;
    width: 30px;
    height: 30px;
    font-size: 15px;
    display: grid;
    place-items: center;

    &-next {
      right: 0;
    }

    &-prev {
      right: 32px;
    }
  }

  .movie {
    position: relative;
    height: 300px;

    .movie-info,
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    img {
      object-fit: cover;
      z-index: -1;
    }

    .movie-info {
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      justify-content: end;

      h3 {
        margin-bottom: 10px;
      }

      span {
        background: #e94d61;
        padding: 5px 10px;
        margin-right: 5px;
        border-radius: 2px;
      }
    }

    .year-published {
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px;
      z-index: 2;
      padding: 5px 10px;
      background-color: #f38e07;
      color: #fff;
      border-radius: 3px;
    }
  }
`;

export const StyledHeading = styled.div`
  text-align: center;
  margin: 2em 10px;
  text-transform: capitalize;

  h2 {
    margin-bottom: 0.5em;
    padding: 0 20px;
    position: relative;
    display: inline-block;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background: #e94d61;
      top: 100%;
      left: 0;
    }
  }
`;

export const StyledEditor = styled.div`
  position: relative;

  .copy-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    z-index: 1000;
    color: #258ce7;
    font-size: 25px;
    cursor: pointer;
  }
`;

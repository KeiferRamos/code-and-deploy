import { Carousel } from "antd";
import styled from "styled-components";

export const StyledMovieSample = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  justify-content: center;
  gap: 5em;
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;

  button {
    background: #e94d61;
    color: #fff;
    padding: 10px 20px;
    max-width: max-content;
  }

  @media (max-width: 850px) {
    grid-template-columns: 100%;
    gap: 0;
  }
`;

export const Tools = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  font-family: "Space Mono", monospace;
  font-size: 13px;

  span {
    background: #258ce7;
    color: #fff;
    padding: 5px 10px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  background: #1b1a1a;
  border-radius: 5px;
`;

export const StyledCarousel = styled(Carousel)`
  position: relative;

  .arrow {
    position: absolute;
    color: #258ce7;
    top: 50%;
    font-size: 30px;
    display: grid;
    place-items: center;
    z-index: 100000;

    &-next {
      right: 0;
    }

    &-prev {
      left: 0;
    }
  }
`;

export const StyledDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  padding-bottom: 10px;

  p:last-child {
    margin-top: auto;
    font-family: "Montserrat", sans-serif;
  }
`;

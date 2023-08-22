import React from "react";
import Layout from "../../layout";

import MovieMobile1 from "../../assets/images/movie-1-mobile.webp";
import MovieDesktop1 from "../../assets/images/movie-1-desktop.webp";
import MovieDesktop2 from "../../assets/images/movie-2-desktop.webp";
import MovieDesktop3 from "../../assets/images/movie-3-desktop.webp";
import MovieDesktop4 from "../../assets/images/movie-4-desktop.webp";
import MovieDesktop5 from "../../assets/images/movie-5-desktop.webp";
import {
  StyledCarousel,
  StyledDetails,
  StyledImage,
  StyledMovieSample,
  Tools,
} from "./styled";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import Logo from "../../components/logo";

const NextArrow = (props: any) => {
  return (
    <CaretRightOutlined className="arrow arrow-next" onClick={props.onClick} />
  );
};

const PrevArrow = (props: any) => {
  return (
    <CaretLeftOutlined className="arrow arrow-prev" onClick={props.onClick} />
  );
};

function Apps() {
  const images = [
    MovieDesktop1,
    MovieDesktop2,
    MovieDesktop3,
    MovieDesktop4,
    MovieDesktop5,
  ];

  const settings = {
    slidesToShow: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Layout>
      <div style={{ paddingTop: "8em" }}>
        <h2>
          <span>Applications build with</span> <Logo />
        </h2>
        <br />
        <StyledMovieSample>
          <div>
            <StyledCarousel {...settings}>
              {images.map((image, i) => {
                return <StyledImage src={image} key={i} />;
              })}
            </StyledCarousel>
          </div>
          <StyledDetails>
            <h2>Chill & Play</h2>
            <Tools>
              <span>Styled Components</span>
              <span>NextJs</span>
              <span>Antd</span>
              <span>Axios</span>
            </Tools>
            <p>
              Come and try to visit Chill & Play. You'll get a lot of idea on
              how to work on with this api.
            </p>
            <button>
              <a
                href="https://charming-hamster-02a6ed.netlify.app/"
                target="_blank"
              >
                Visit Site
              </a>
            </button>
            <p>Created by: Keifer Ramos</p>
          </StyledDetails>
        </StyledMovieSample>
        <br />
        <StyledMovieSample>
          <div>
            <StyledCarousel {...settings}>
              {images.map((image, i) => {
                return <StyledImage src={image} key={i} />;
              })}
            </StyledCarousel>
          </div>
          <StyledDetails>
            <h2>Chill & Play</h2>
            <Tools>
              <span>Styled Components</span>
              <span>NextJs</span>
              <span>Antd</span>
              <span>Axios</span>
            </Tools>
            <p>
              Come and try to visit Chill & Play. You'll get a lot of idea on
              how to work on with this api.
            </p>
            <button>
              <a
                href="https://charming-hamster-02a6ed.netlify.app/"
                target="_blank"
              >
                Visit Site
              </a>
            </button>
            <p>Created by: Keifer Ramos</p>
          </StyledDetails>
        </StyledMovieSample>
      </div>
    </Layout>
  );
}

export default Apps;

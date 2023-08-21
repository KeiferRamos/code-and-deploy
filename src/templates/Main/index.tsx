import React from "react";

import { useEffect, useState, memo } from "react";

import { navigate } from "gatsby";

import {
  ExclamationCircleOutlined,
  CodeOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
  CopyOutlined,
} from "@ant-design/icons";

import Layout from "../../layout";

import {
  HerroBanner,
  StyledCarousel,
  StyledDiv,
  StyledHeading,
} from "./styled";

import Banner from "../../assets/images/banner.webp";
import Bg2 from "../../assets/images/bg2.webp";
import Bg from "../../assets/images/bg.webp";

import Accounts from "../../components/accounts";
import { StyledCodeEditor } from "../Docs/Axios/styled";
import {
  SampleCodeForHomepage,
  SampleGetResponse,
} from "../Docs/Axios/constant";
import { KeyPairContent } from "../Docs/Axios";
import { FeaturedData, SampleCode, dataResponse } from "./constant";

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

function Main() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function getScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", getScreenWidth);

    return () => window.removeEventListener("resize", getScreenWidth);
  }, []);

  const settings = {
    slidesToShow: screenWidth >= 1100 ? 3 : screenWidth >= 700 ? 2 : 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Layout>
      <HerroBanner>
        <header>
          <h1>
            Free & Simple Api
            <br />
            For You.
          </h1>
          <p>Easy to use. Easy to Understand.</p>
          <button onClick={() => navigate("/docs")}>
            <ExclamationCircleOutlined />
            Read Docs
          </button>
        </header>
        <img className="bg-1" src={Banner} alt="" />
        <Accounts />
      </HerroBanner>
      <StyledDiv>
        <img className="bg-1" src={Bg} alt="" />
        <img className="bg-2" src={Bg2} alt="" />
        <div>
          <h2>Build Your App Now.</h2>
          <p>Having a hard time looking for an API. I Got You.</p>
          <button onClick={() => navigate("/docs")}>
            <CodeOutlined />
            Read Docs
          </button>
        </div>
      </StyledDiv>
      <section>
        <StyledHeading>
          <h2>What Can You Build?</h2>
          <p>
            Here are a few examples of the data that was fetched through the
            API.
          </p>
        </StyledHeading>
        <h3>Featured Movies</h3>
        <StyledCarousel {...settings}>
          {FeaturedData.map(({ title, genres, year, image, _id }) => {
            return (
              <div className="movie" key={_id}>
                <span className="year-published">{year}</span>
                <img src={image} alt="" />
                <div className="movie-info">
                  <h3>{title}</h3>
                  <div>
                    {genres?.map((genre, i) => {
                      return <span key={i}>{genre}</span>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </StyledCarousel>
      </section>
      <section>
        <StyledHeading>
          <h2>Want A Sample Code?</h2>
          <p>
            Simply copy this line of code and run it in your code editor. Super
            easy.
          </p>
        </StyledHeading>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,auto))",
            gap: ".25em",
          }}
        >
          <StyledCodeEditor style={{ borderRadius: 0 }}>
            <CopyOutlined
              onClick={() => navigator.clipboard.writeText(SampleCode)}
            />
            <p className="comment-text">// Sample Request</p>
            <br />
            <p>
              <span className="function-text">axios</span>&#40;&#123;
            </p>
            <div>
              {SampleCodeForHomepage.map((item, i) => {
                return <KeyPairContent {...item} key={i} />;
              })}
            </div>
            <p>
              <span>&#125;&#41;</span>.
              <span className="function-text">then</span>
              ((<span className="param-text">res</span>){" "}
              <span> &#61;&#62; </span>{" "}
              <span className="module-text">console</span>.
              <span className="function-text">log</span>(
              <span className="param-text">res</span>))
            </p>
          </StyledCodeEditor>
          <StyledCodeEditor style={{ borderRadius: 0 }}>
            <CopyOutlined
              className="copy-clipboard"
              onClick={() => navigator.clipboard.writeText(dataResponse)}
            />
            <p className="comment-text">// Sample Response</p>
            <br />
            <p>&#123;</p>
            <div>
              {SampleGetResponse.map((item, i) => {
                return <KeyPairContent {...item} key={i} />;
              })}
            </div>
            <p>&#125;</p>
          </StyledCodeEditor>
        </div>
      </section>
    </Layout>
  );
}

export default memo(Main);

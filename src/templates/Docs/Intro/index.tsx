import React from "react";

import { useEffect, memo } from "react";

import {
  SmileOutlined,
  ExclamationCircleOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Link } from "gatsby";

import ApiIcon from "../../../assets/images/icons/api.png";
import RocketIcon from "../../../assets/images/icons/rocket.png";
import FilmIcon from "../../../assets/images/icons/film-reel.png";
import UserIcon from "../../../assets/images/icons/user.png";
import GenresIcon from "../../../assets/images/icons/comedy.png";
import BlogsIcon from "../../../assets/images/icons/blogs.png";
import BgIcon from "../../../assets/images/bg3.png";

import DocsLayout from "../../../layout/docs";
import Logo from "../../../components/logo";
import { StyledContainer, StyledDiv } from "./styled";

function Introduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DocsLayout>
      <StyledContainer>
        <header>
          <h2>Welcome to</h2>
          <Logo />
        </header>
        <br />
        <p>
          Code & Deploy is a free API source for those who want to have some
          fun. constructing their own web application, as well as those that
          desire to discover any free api source for their upcoming project that
          they will incorporate Their portfolio.
        </p>
        <br />
        <p>
          All of the information I used was collected legally online. The
          details are just arbitrary dummy language that I acquire from{" "}
          <a href="https://hipsum.co/" target="_blank">
            hipsum.co
          </a>
          , and I get all the images from{" "}
          <a href="https://unsplash.com/" target="_blank">
            unsplash.com
          </a>{" "}
          and{" "}
          <a href="https://www.flaticon.com/" target="_blank">
            flaticon.com
          </a>
        </p>
        <br />
        <p>
          This API provides plenty of self-created movie data contains numerous
          elements such as casts, reviews, and many more. So you have a lot of
          options here. So why don't you give it a shot <SmileOutlined />.
        </p>
        <br />
        <h3>Data Overview</h3>
        <StyledDiv>
          <div>
            <img src={FilmIcon} alt="" />
            <h4>Movie</h4>
            <span>50+</span>
            <ul>
              <li>Genres</li>
              <li>Reviews</li>
              <li>Cast</li>
              <li>Etc.</li>
            </ul>
          </div>
          <div>
            <img src={GenresIcon} alt="" />
            <h4>Genre</h4>
            <span>10+</span>
            <ul>
              <li>Name</li>
              <li>Icon</li>
              <li>Description</li>
              <li>Image</li>
            </ul>
          </div>
          <div>
            <img src={UserIcon} alt="" />
            <h4>User</h4>
            <span>3</span>
            <ul>
              <li>Username</li>
              <li>Image</li>
              <li>Bookmarks</li>
              <li>Etc.</li>
            </ul>
          </div>
          <div>
            <img src={BlogsIcon} alt="" />
            <h4>Blogs</h4>
            <span>20+</span>
            <ul>
              <li>Title</li>
              <li>contents</li>
              <li>Author</li>
              <li>image</li>
            </ul>
          </div>
        </StyledDiv>
        <div className="links">
          <Link to="/docs/how-to-request" style={{ background: "#e94d61" }}>
            <div>
              <h2>Ready To Dive In?</h2>
              <p>Start Your journey now</p>
              <button>
                <PoweroffOutlined />
                Get Started
              </button>
            </div>
            <img src={RocketIcon} alt="" />
          </Link>
          <a
            href="https://aws.amazon.com/what-is/api/"
            target="_blank"
            style={{ background: "#258ce7" }}
          >
            <div>
              <h2>No Idea What's API?</h2>
              <p>Understand What is an API first</p>
              <button>
                <ExclamationCircleOutlined />
                Know More
              </button>
            </div>
            <img src={ApiIcon} alt="" />
          </a>
        </div>
      </StyledContainer>
    </DocsLayout>
  );
}

export default memo(Introduction);

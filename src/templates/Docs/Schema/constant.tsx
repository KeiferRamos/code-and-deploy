import React from "react";

const navigate = (url) => {
  const element = document.getElementById(url)?.offsetTop;
  window.scrollTo({
    left: 0,
    top: element,
  });
};

export const singleMovie = [
  {
    label: "_id",
    type: "string",
    description: <p>unique id generated by the server</p>,
  },
  {
    label: "title",
    type: "string",
    description: <p>basically the title of the movie</p>,
  },
  {
    label: "image",
    type: "string",
    description: (
      <p>
        landscape image collected from{" "}
        <a href="https://unsplash.com/" target="_blank">
          unsplash.com
        </a>
      </p>
    ),
  },
  {
    label: "genres",
    type: "string[]",
    description: <p>collection of movie genre</p>,
  },
  {
    label: "reviews",
    type: "review[]",
    description: (
      <p>
        A collection of movie&nbsp;
        <span onClick={() => navigate("movie-review")}>review</span>.
      </p>
    ),
  },
  {
    label: "featured",
    type: "boolean",
    description: <p>feature or highlights the movie</p>,
  },
  {
    label: "rank",
    type: "number",
    description: <p>rank of the movie.</p>,
  },
  {
    label: "likes",
    type: "string[]",
    description: <p>collection of user id who likes the movie.</p>,
  },
  {
    label: "cast",
    type: "cast[]",
    description: (
      <p>
        A collection of movie&nbsp;
        <span onClick={() => navigate("movie-cast")}>cast</span>.
      </p>
    ),
  },
  {
    label: "trailer",
    type: "string",
    description: <p>some random youtube videos.</p>,
  },
  {
    label: "year",
    type: "number",
    description: <p>year when the movie was published.</p>,
  },
  {
    label: "mobileImage",
    type: "string",
    description: (
      <p>
        portrait image collected from&nbsp;
        <a href="https://unsplash.com/" target="_blank">
          unsplash.com
        </a>
        .
      </p>
    ),
  },
  {
    label: "plot",
    type: "string",
    description: (
      <p>
        dummy text collected from.&nbsp;
        <a href="https://hipsum.co/" target="_blank">
          hipsum.co
        </a>
      </p>
    ),
  },
  {
    label: "similar",
    type: "similar[]",
    description: (
      <p>
        A collection of movie&nbsp;
        <span onClick={() => navigate("movie-similar")}>similar</span>.
      </p>
    ),
  },
];

export const reviews = [
  {
    label: "_id",
    type: "string",
    description: <p>unique id generated by the server</p>,
  },
  {
    label: "username",
    type: "string",
    description: <p>automatically added when adding review to a movie.</p>,
  },
  {
    label: "review",
    type: "string",
    description: <p>a user review to a specific movie.</p>,
  },
  {
    label: "userImage",
    type: "string",
    description: <p>automatically added when adding review to a movie.</p>,
  },
  {
    label: "createdAt",
    type: "string",
    description: (
      <p>date when the review created. Server will generate this field.</p>
    ),
  },
  {
    label: "updatedAt",
    type: "string",
    description: (
      <p>date when the review updated. Server will generate this field.</p>
    ),
  },
  {
    label: "userId",
    type: "string",
    description: <p>automatically added when adding review to a movie.</p>,
  },
];

export const Cast = [
  {
    label: "name",
    type: "string",
    description: <p>the name of the actor</p>,
  },
  {
    label: "asCharacter",
    type: "string",
    description: <p>the role name of the actor</p>,
  },
  {
    label: "image",
    type: "string",
    description: <p>the image of the actor</p>,
  },
  {
    label: "_id",
    type: "string",
    description: <p>unique id generated by the server</p>,
  },
];

export const Similar = [
  {
    label: "title",
    type: "string",
    description: <p>basically the title of the movie</p>,
  },
  {
    label: "image",
    type: "string",
    description: (
      <p>
        landscape image collected from{" "}
        <a href="https://unsplash.com/" target="_blank">
          unsplash.com
        </a>
      </p>
    ),
  },
  {
    label: "_id",
    type: "string",
    description: <p>unique id generated by the server</p>,
  },
  {
    label: "movieId",
    type: "string",
    description: <p>id of the movie</p>,
  },
  {
    label: "genres",
    type: "string[]",
    description: <p>collection of movie genre</p>,
  },
  {
    label: "featured",
    type: "boolean",
    description: <p>feature or highlights the movie</p>,
  },
  {
    label: "year",
    type: "number",
    description: <p>year when the movie was published.</p>,
  },
  {
    label: "mobileImage",
    type: "string",
    description: (
      <p>
        portrait image collected from&nbsp;
        <a href="https://unsplash.com/" target="_blank">
          unsplash.com
        </a>
        .
      </p>
    ),
  },
  {
    label: "likes",
    type: "string[]",
    description: <p>collection of user id who likes the movie.</p>,
  },
];

export const Genre = [
  {
    label: "_id",
    type: "string",
    description: <p>unique id generated by the server</p>,
  },
  {
    label: "image",
    type: "string",
    description: (
      <p>
        landscape image collected from{" "}
        <a href="https://unsplash.com/" target="_blank">
          unsplash.com
        </a>
      </p>
    ),
  },
  {
    label: "mobileImage",
    type: "string",
    description: (
      <p>
        portrait image collected from&nbsp;
        <a href="https://unsplash.com/" target="_blank">
          unsplash.com
        </a>
        .
      </p>
    ),
  },
  {
    label: "name",
    type: "string",
    description: <p>the type of genre</p>,
  },
  {
    label: "description",
    type: "string",
    description: (
      <p>
        dummy text collected from.&nbsp;
        <a href="https://hipsum.co/" target="_blank">
          hipsum.co
        </a>
      </p>
    ),
  },
];

export const User = [
  {
    label: "_id",
    type: "string",
    description: <p>unique id generated by the server</p>,
  },
  {
    label: "username",
    type: "string",
    description: <p>unique username of the user.</p>,
  },
  {
    label: "bookmark",
    type: "bookmark[]",
    description: (
      <p>
        A collection of movie&nbsp;
        <span onClick={() => navigate("bookmark")}>bookmark</span>.
      </p>
    ),
  },
  {
    label: "password",
    type: "string",
    description: <p>encrypted password of the user.</p>,
  },
  {
    label: "email",
    type: "string",
    description: <p>unique email of the user.</p>,
  },
  {
    label: "likes",
    type: "string[]",
    description: <p>collection of genres the user likes. Optional.</p>,
  },
  {
    label: "userImage",
    type: "string",
    description: <p>profile image of the user. default to </p>,
  },
];

export const Bookmark = [
  {
    label: "_id",
    type: "string",
    description: <p>unique id generated by the server</p>,
  },
  {
    label: "title",
    type: "string",
    description: <p>basically the title of the movie</p>,
  },
  {
    label: "image",
    type: "string",
    description: (
      <p>
        landscape image collected from{" "}
        <a href="https://unsplash.com/" target="_blank">
          unsplash.com
        </a>
      </p>
    ),
  },
  {
    label: "genres",
    type: "string[]",
    description: <p>collection of movie genre</p>,
  },
  {
    label: "movieId",
    type: "string",
    description: <p>id of the movie</p>,
  },
  {
    label: "year",
    type: "number",
    description: <p>year when the movie was published.</p>,
  },
];

export const Blog = [
  {
    label: "author",
    type: "string",
    description: <p>the author of the blog. Just some random name</p>,
  },
  {
    label: "title",
    type: "string",
    description: <p>basically the title of the blog</p>,
  },
  {
    label: "bannerImage",
    type: "string",
    description: (
      <p>
        random image collected from{" "}
        <a href="https://unsplash.com/" target="_blank">
          unsplash.com
        </a>
      </p>
    ),
  },
  {
    label: "contents",
    type: "content[]",
    description: (
      <p>
        A collection of blog&nbsp;
        <span onClick={() => navigate("content")}>content</span>.
      </p>
    ),
  },
];

export const Content = [
  {
    label: "htmlElement",
    type: "string",
    description: <p>type of content. Image or richtext.</p>,
  },
  {
    label: "value",
    type: "string",
    description: <p>value of content</p>,
  },
];

export const data = [
  { header: "Movie", src: singleMovie, id: "movie" },
  { header: "Review", src: reviews, id: "movie-review" },
  { header: "Cast", src: Cast, id: "movie-cast" },
  { header: "Similar", src: Similar, id: "movie-similar" },
  { header: "Genre", src: Genre, id: "genre" },
  { header: "User", src: User, id: "user" },
  { header: "Bookmark", src: Bookmark, id: "bookmark" },
  { header: "Blog", src: Blog, id: "blog" },
  { header: "Content", src: Content, id: "content" },
];

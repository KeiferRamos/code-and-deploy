import React, { memo } from "react";

import DocsLayout from "../../../layout/docs";

import { StyledContainer } from "./styled";
import { requestBody, response } from "./constant";

import Content from "../../../components/content";

function Request() {
  return (
    <DocsLayout>
      <StyledContainer>
        <div>
          <h1>How To Request?</h1>
          <br />
          <Content
            hasNote={true}
            data={response[0]}
            url={`${process.env.GATSBY_BASE_URL}/movies`}
            method="GET"
            note="Note: The list was too long, therefore I only showed 5 movies."
          >
            <header>
              <h2>Movies</h2>
              <p>
                Get A list of Movies using <kbd>/movies</kbd> endpoint.
              </p>
            </header>
          </Content>
          <Content
            hasNote={false}
            data={response[1]}
            url={`${process.env.GATSBY_BASE_URL}/movies/id_here`}
            method="GET"
          >
            <header>
              <h2>Single Movie</h2>
              <p>
                Get A Single Movies using <kbd>/movies/:id</kbd> endpoint
                wherein id is movie _id
              </p>
            </header>
          </Content>
          <Content
            hasNote={true}
            data={response[2]}
            url={`${process.env.GATSBY_BASE_URL}/genres`}
            method="GET"
            note="Note: The list was too long, therefore I only showed 5 genres."
          >
            <header>
              <h2>Genres</h2>
              <p>
                Get All Genres using <kbd>/genres</kbd> endpoint.
              </p>
            </header>
          </Content>
          <Content
            hasNote={false}
            data={response[3]}
            url={`${process.env.GATSBY_BASE_URL}/genres/id_here`}
            method="GET"
          >
            <header>
              <h2>Single Genre</h2>
              <p>
                Get single Genre using <kbd>/genres/:id</kbd> endpoint. Wherein
                id is genre _id
              </p>
            </header>
          </Content>
          <Content
            body={requestBody[0]}
            hasNote={false}
            data={response[4]}
            url={`${process.env.GATSBY_BASE_URL}/cinephile/sign-up`}
            method="POST"
          >
            <header>
              <h2>Creating Account for user.</h2>
              <p>
                User account used for adding reviews, likes and adding bookmark
                to a movie.
              </p>
            </header>
          </Content>
          <Content
            body={requestBody[1]}
            hasNote={false}
            data={response[5]}
            url={`${process.env.GATSBY_BASE_URL}/cinephile/sign-in`}
            method="POST"
          >
            <header>
              <h2>Signing in a created user.</h2>
              <p>
                You will get an access token after signing in. You can use that
                for some request that are requiring access token, such as adding
                likes to a movie, adding bookmark to a movie, and adding reviews
                in a movie. Add the token to the header of the request.
              </p>
            </header>
          </Content>
          <Content
            body={requestBody[2]}
            note="Note: Access token contains user details and it will automatically add that the request."
            hasNote={true}
            data={response[6]}
            url={`${process.env.GATSBY_BASE_URL}/movies/reviews/id_here`}
            method="POST"
          >
            <header>
              <h2>Adding Review To a Movie.</h2>
              <p>
                <b>Access token is required when adding review to a movie.</b>{" "}
                Use the&nbsp;<kbd>/movies/reviews/:_id</kbd> endpoint to create
                a review, wherein&nbsp;<kbd>:_id</kbd> is the movie id.
              </p>
            </header>
          </Content>
          <Content
            hasNote={true}
            note="Note: If user id is already included in likes property of the movie, query will remove the id from the likes property. And if not it will add the user id to the property."
            data={{ likes: ["user_id"] }}
            url={`${process.env.GATSBY_BASE_URL}/movies/likes/id_here`}
            method="PUT"
          >
            <header>
              <h2>Like And Dislike a Movie.</h2>
              <p>
                Add or remove like to a movie using{" "}
                <kbd>/movies/likes/:_id</kbd> wherein the&nbsp;
                <kbd>:id</kbd> is the movie id.{" "}
                <b>
                  Access token is also required when adding or removing likes.
                </b>
              </p>
            </header>
          </Content>
          <Content
            hasNote={false}
            data={response[7]}
            url={`${process.env.GATSBY_BASE_URL}/cinephile/bookmark/id_here`}
            method="POST"
          >
            <header>
              <h2>Adding Movie to a user bookmark.</h2>
              <p>
                You can add a movie to a user bookmark by accessing the API
                &nbsp;<kbd>/cinephile/bookmark/:id</kbd>&nbsp;, wherein
                the&nbsp; <kbd>:id</kbd>&nbsp; is the movie id.{" "}
                <b>Here, an access token is also required.</b>
              </p>
            </header>
          </Content>
          <Content
            hasNote={true}
            note="Note: The response is the updated bookmark of the user."
            data={{
              bookmark: [],
            }}
            url={`${process.env.GATSBY_BASE_URL}/cinephile/bookmark/id_here`}
            method="DELETE"
          >
            <header>
              <h2>Removing Movie to a user bookmark.</h2>
              <p>
                You can remove a movie to a user bookmark by accessing the API
                &nbsp;<kbd>/cinephile/bookmark/:id</kbd>&nbsp;, wherein
                the&nbsp; <kbd>:id</kbd>&nbsp; is the movie id.{" "}
                <b>Here, an access token is also required.</b>
              </p>
            </header>
          </Content>
          <Content
            hasNote={true}
            note="Note: Make sure that the :id is the id of an existing review. And also the response is the updated value of reviews of the movie where you delete yours."
            data={{
              reviews: [],
            }}
            url={`${process.env.GATSBY_BASE_URL}/movies/reviews/id_here`}
            method="DELETE"
          >
            <header>
              <h2>Deleting a Movie review.</h2>
              <p>
                You can remove a review by using the endpoint&nbsp;
                <kbd>/movies/reviews/:id</kbd> , wherein <kbd>:id</kbd> is the
                id of the review you want to remove.
              </p>
            </header>
          </Content>
          <Content
            hasNote={true}
            body={requestBody[3]}
            note="Note: Make sure that the :id is the id of an existing review. And also the response is the updated value of reviews of the movie where you edited yours."
            data={response[8]}
            url={`${process.env.GATSBY_BASE_URL}/movies/reviews/id_here`}
            method="PUT"
          >
            <header>
              <h2>Editing a Movie review.</h2>
              <p>
                You can edit a review by using the endpoint&nbsp;
                <kbd>/movies/reviews/:id</kbd> , wherein <kbd>:id</kbd> is the
                id of the review you want to edit.
              </p>
            </header>
          </Content>
        </div>
      </StyledContainer>
    </DocsLayout>
  );
}

export default memo(Request);

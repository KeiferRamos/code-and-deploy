import React from "react";

import { memo } from "react";

import DocsLayout from "../../../layout/docs";
import { StyledContainer } from "../Request/styled";
import { response } from "./constant";
import Content from "../../../components/content";

import { MehOutlined } from "@ant-design/icons";

function Parameters() {
  return (
    <DocsLayout>
      <StyledContainer>
        <h1>Using Parameters</h1>
        <br />
        <Content
          data={response[0]}
          hasNote={true}
          note=" Note: If you want to sort the list by rank number, you use rank.rankNumber."
          url={`${process.env.GATSBY_BASE_URL}/movies?sort=year`}
          method="GET"
        >
          <header>
            <h2>Sort List of Movies</h2>
            <p>
              You can sort the movie list by using <kbd>sort</kbd> & &nbsp;
              <kbd>ord</kbd>
              &nbsp;query parameter. You can choose from movie key to use it as
              sorter. <kbd>ord</kbd> query parameter is default to asc but you
              can choose desc too.
            </p>
          </header>
        </Content>
        <Content
          data={response[1]}
          hasNote={false}
          url={`${process.env.GATSBY_BASE_URL}/movies?limit=3&skip=3`}
          method="GET"
        >
          <header>
            <h2>Using Pagination</h2>
            <p>
              You can use <kbd>limit</kbd> & <kbd>skip</kbd> for
              pagination.&nbsp;<kbd>skip</kbd> query parameter will skip the
              first few data depending on the value and <kbd>limit</kbd> query
              parameters will limit the response number of list depending also
              on the value. So together they are perfect just like you...
              <MehOutlined />
            </p>
          </header>
        </Content>
        <Content
          data={response[2]}
          hasNote={false}
          url={`${process.env.GATSBY_BASE_URL}/movies?genres=food&year=2016`}
          method="GET"
        >
          <header>
            <h2>Filter List of Movies By Key as Parameters</h2>
            <p>
              You can also filter the movie list by using <kbd>object key</kbd>
              &nbsp; as query parameter.
            </p>
          </header>
        </Content>
        <Content
          hasNote={true}
          note="Note: values for featured params is either 1 or 0 only. Wherein 1
            indicates that the parameter is true and 0 indicates that it is
            false."
          url={`${process.env.GATSBY_BASE_URL}/movies?featured=1`}
          method="GET"
          data={response[3]}
        >
          <header>
            <h2>Get All Featured Movies</h2>
            <p>
              You can get all the featured movie list by using{" "}
              <kbd>featured</kbd>
              &nbsp;query parameter.
            </p>
          </header>
        </Content>
        <Content
          data={response[4]}
          hasNote={false}
          url={`${process.env.GATSBY_BASE_URL}/movies?rank=1`}
          method="GET"
        >
          <header>
            <h2>Get All Ranked Movies</h2>
            <p>
              You can get all the Ranked movie list by using <kbd>rank</kbd>{" "}
              query parameter set to 1.
            </p>
          </header>
        </Content>
        <Content
          data={response[5]}
          hasNote={true}
          url={`${process.env.GATSBY_BASE_URL}/movies?includes[year]=1&includes[plot]=1`}
          method="GET"
          note="Note: Again! The list is too long so I only showed 3 movies."
        >
          <header>
            <h2>Query like Graphql</h2>
            <p>
              I suggest you use axios here or fetch. If you add&nbsp;
              <kbd>includes</kbd> in your query parameters the response will
              exclude all the property of the movie that's not in{" "}
              <kbd>includes</kbd> except the _id
            </p>
          </header>
        </Content>
      </StyledContainer>
    </DocsLayout>
  );
}

export default memo(Parameters);

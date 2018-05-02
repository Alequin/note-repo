import React from "react";
import styled from "styled-components"
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Tag from "./tag"

const TagSearch = (tags) => {
  return (
    <Query
      query={gql`
        {
          tags{
            id
            name
          }
        }
      `}
    >
      {handleQuery}
    </Query>

  )
}

const handleQuery = ({ loading, error, data: {tags}}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <TagContainer>
      {tags.map(Tag)}
    </TagContainer>
  )
}

const TagContainer = styled.section`
  margin: 1em;
  padding: 0 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export default TagSearch

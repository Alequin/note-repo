import React from "react";
import styled from "styled-components"
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
  return tags.map(tag)
}

const tag = (tag) => {
  return <li key={tag.id}>{tag.name}</li>
}

export default TagSearch

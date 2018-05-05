import React from "react";
import styled from "styled-components"
import { Query } from "react-apollo";
import gql from "graphql-tag";

const NOTE_QUERY = gql`
  {
    notes{
      id
      title
      summary
      tags{
        id
        name
      }
    }
  }
`

const SearchContainer = () => {
  return (
    <Query query={NOTE_QUERY}>
      {({ loading, error, data: {notes}}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;
        return (
          <NotesContainer>
          </NotesContainer>
        )
      }}
    </Query>
  )
}

const NotesContainer = styled.section`
  display: flex;
  padding: 20px 5% 0 5%;
`

export default SearchContainer

import React from "react";
import styled from "styled-components"
import { Query } from "react-apollo";
import gql from "graphql-tag";

import queryVariablesFromLocation from "./../util/query-variables-from-location"
import NoteCard from "./note-card/index"

const NOTE_QUERY = gql`
  query note_list($title: String $tags: [String]){
    notes(title: $title tags: $tags){
      id
      title
      summary
    }
  }
`

const SearchContainer = () => {
  return (
    <Query query={NOTE_QUERY} variables={queryVariablesFromLocation(window.location)}>
      {({ loading, error, data: {notes}}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;
        console.log(notes);
        return (
          <NotesContainer>
            {notes.map((note) => <NoteCard key={note.id} note={note}/>)}
          </NotesContainer>
        )
      }}
    </Query>
  )
}

const NotesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 5% 0 5%;
  justify-content: center;
`

export default SearchContainer

import React from "react"
import styled from "styled-components"
import Markdown from 'react-markdown';
import {mobileScreen} from "common/style/screen-size"
import {H1} from "common/components/header"
import Paragraph from "common/components/paragraph"
import { Query } from "react-apollo";
import gql from "graphql-tag";

const NOTE_QUERY = gql`
  query note_query($id: Int!) {
    notes(id: $id) {
      id
      title
      summary
      content
      creation_date
      tags {
        name
      }
      sources {
        name
        islink
        location
      }
    }
  }
`

const markdown = `# .Net MVC Render View

* Razor syntax allows html and c# to be combined in one file

* C# code may be written in cshtml files by prefixing any code with an "@" symbol

* Razor also allows the use of HTML helpers
* In the following example index is the controller method and blog is the controller
`

export default () => {
  return (
    <Query query={NOTE_QUERY} variables={{id: 1}}>
      {({ loading, error, data: {notes}}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;
        const {title, summary, content, tags, sources} = notes[0]
        return (
          <section>
            <Tile>
              <H1>{title}</H1>
            </Tile>
            <Tile>
              <CenteredParagraph>{summary}</CenteredParagraph>
            </Tile>
            <Tile>
              <Markdown source={markdown}/>
            </Tile>
            <Tile>
              <hr/>
              {sources.map(({name, islink, location}, index) => (
                <article key={index}>
                  <p>{name}</p>
                  {islink ?
                    <a href={location}><Paragraph>{location}</Paragraph></a> :
                    <Paragraph>location</Paragraph>
                  }
                  <hr/>
                </article>
              ))}
            </Tile>
            <Tile>
              {tags.map(({name}, index) => <span key={index}>{name}</span>)}
            </Tile>
          </section>
        )
      }}
    </Query>
  )
}

const Tile = styled.section`
  background-color: white;
  padding: 1em;
  margin: 1em 10%;
  border-radius: 10px;

  @media (max-width: ${mobileScreen}) {
    margin: 1em;
  }
`

const CenteredParagraph = Paragraph.extend`
  text-align: center;
`

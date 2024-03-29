import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components"
import {H3} from "common/components/header"
import Paragraph from "common/components/paragraph"

const WrapperLink = styled(Link)`
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: black;
`

const NoteCardContainer = styled.section`
  width: 300px;
  margin: 1.5em;
  padding: 0.4em;
  border: 1px solid transparent;
  border-radius: 20px;

  &:hover{
    border: 1px solid white;
  }
`

const Body = styled.article`
  padding: 0 0.5em;
  text-align: center;
`

export default ({note: {id, title, summary, tags}}) => {
  return (
    <WrapperLink to={`/note?id=${id}`}>
      <NoteCardContainer>
        <H3>{title}</H3>
        <hr/>
        <Body>
          <Paragraph>{summary}</Paragraph>
        </Body>
      </NoteCardContainer>
    </WrapperButton>
  )
}

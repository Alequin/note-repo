import React from "react";
import styled from "styled-components"
import {withProps} from "recompose"

const Tag = styled.button`
  width: 100px;
  margin: 0.2em;
  padding: 0.3em;
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  font-size: inherit;
  color: white;
`

export default ({id, name}) => {
  return <Tag key={id}>{name}</Tag>
}

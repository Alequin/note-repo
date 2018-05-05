
import styled from "styled-components"

const TRANSPARENT_TAG = {
  background: "transparent",
  border: "1px solid black"
}
const HIGHLIGHTED_TAG = {
  background: "rgba(100, 100, 100, 0.5)",
  border: "1px solid white"
}

const Tag = styled.button`
  width: 100px;
  min-width: 100px;
  min-height: 30px;
  margin: 0.2em;
  padding: 0.3em;
  border-radius: 10px;
  font-size: inherit;
  color: ${({color}) => color || "white"};

  background-color: ${({highlighted}) =>
    highlighted ? HIGHLIGHTED_TAG.background : TRANSPARENT_TAG.background};

  border: ${({highlighted}) =>
    highlighted ? HIGHLIGHTED_TAG.border : TRANSPARENT_TAG.border};
`

export default Tag

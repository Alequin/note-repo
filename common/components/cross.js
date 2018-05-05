import React from "react"
import styled from "styled-components"

const BASE_MARGIN = "10px"

const Cross = styled.i`
  margin: ${({margin}) => margin || BASE_MARGIN};
  font-size: 25px;
`

export default ({margin, onClick}) => {
  return (
    <Cross
      className="far fa-times-circle"
      margin={margin}
      onClick={onClick}/>
  )
}

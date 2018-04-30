import React from "react";
import styled from "styled-components"
import TagSearch from "./tag-search"

const Container = styled.nav`
  width: 100%;
`

const Input = styled.input`
  margin: auto;
  border-radius: 1em;
  font-size: 1em;
  text-align: center;
  display: block;
`

const SearchSubmit = Input.extend`
  width: 150px;
`

const NavBar = ({searchTerm, onEditSearch}) => {
  return (
    <Container>
      <form>
          <Input
            id="search"
            type="text"
            placeholder="Search By Title"
            value={searchTerm}
            onChange={onEditSearch}
          />
          <TagSearch/>
          <SearchSubmit type="submit" value="Search"/>
      </form>
    </Container>
  )
}

export default NavBar

import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components"
import TagSearch from "./tag-search"

import BaseInput from "common/components/base-input"
import Button from "common/components/button"
import buildQueryStringFrom from "common/util/build-query-string-from" 

const Container = styled.nav`
  width: 100%;
  font-size: 1em;
`

const SearchSubmit = BaseInput.extend`
  width: 150px;
`

const NavBar = ({
  searchTerm,
  selectedTags,
  showTagModal,
  onEditSearch,
  onClickTags,
  toggleTagModal,
  query
}) => {
  return (
    <Container>
      <form>
          <BaseInput
            id="search"
            type="text"
            placeholder="Search By Title"
            value={searchTerm}
            onChange={onEditSearch}
          />
          <TagSearch
            selectedTags={selectedTags}
            onClickTags={onClickTags}
            showTagModal={showTagModal}
            toggleTagModal={toggleTagModal}
          />
          <Link to={`/${buildQueryStringFrom(query)}`}>
            <Button type="submit" value="Search"/>
          </Link>
      </form>
    </Container>
  )
}

export default NavBar

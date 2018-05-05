import React from "react";
import styled from "styled-components"
import TagSearch from "./tag-search"

import BaseInput from "common/components/base-input"
import Button from "common/components/button"

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
  toggleTagModal
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
          <Button type="submit" value="Search"/>
      </form>
    </Container>
  )
}

export default NavBar

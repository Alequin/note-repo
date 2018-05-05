import React from "react";
import styled from "styled-components"
import id from "als-id-generator"
import { Query } from "react-apollo";
import gql from "graphql-tag";
import times from "lodash/times"
import sizes from "./../../../common/style/screen-size"

import Tag from "./tag/index"

const {medium} = sizes
const TAGS_DISPLAY_COUNT = 5

const TagSearch = ({onClickTags, selectedTags}) => {
  return (
    <Query
      query={gql`
        {
          tags{
            id
            name
          }
        }
      `}
    >
      {({ loading, error, data: {tags}}) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;
        return (
          <div>
            <TagContainer>
              {tagsToDisplay(tags, selectedTags, onClickTags)}
              <Tag name="More Tags" onClickTags={onClickTags}/>
            </TagContainer>
          </div>
        )
      }}
    </Query>

  )
}

const TagContainer = styled.section`
  margin: 1em auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${medium}) {
    max-width: 350px;
  }
`

function tagsToDisplay(allTags, selectedTags, onClickTags){
  const tags = topTags(allTags)

  return tags.map(({name}) => {
      const highlighted = selectedTags.includes(name)
      return (
        <Tag
          key={id()}
          name={name}
          onClick={onClickTags}
          highlighted={highlighted}
        />
      )
    }
  )
}

function topTags(allTags){
  const tagCount = allTags.length < TAGS_DISPLAY_COUNT ?
    allTags.length : TAGS_DISPLAY_COUNT
  return times(tagCount, (index) => allTags[index])
}

export default TagSearch

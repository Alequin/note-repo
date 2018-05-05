import React from "react";
import styled from "styled-components"
import id from "als-id-generator"

import Tag from "./../index"
import Cross from "common/components/cross"
import BaseInput from "common/components/base-input"

import Modal from "./modal"

class TagModal extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      tagSearchTerm: "",
      allTags: this.props.tags,
      tagsToShow: this.props.tags
    }

    this.onSearchForTags = this.onSearchForTags.bind(this)
  }

  onSearchForTags({target: {value}}){
    const searchRegex = new RegExp(value)
    const matchingTags = this.state.allTags.filter(({name}) => {
      return searchRegex.test(name)
    })
    this.setState({
      tagsToShow: matchingTags
    })
  }

  render(){
    const {tagSearchTerm, tagsToShow} = this.state
    const {visible, tags, onClickTags, selectedTags, toggleModal} = this.props

    return (
      <Modal
        visible={visible}
        header={() => (
          <div>
            <CrossContainer>
              <Cross onClick={toggleModal}/>
            </CrossContainer>
            <BaseInput type="text" placeholder="Search for Tags" onChange={this.onSearchForTags}/>
          </div>
        )}
        body={() => (
          <div>
            <TagContainer>
              {displayTags(tagsToShow, onClickTags, selectedTags)}
            </TagContainer>
          </div>
        )}
      />
    )
  }
}

const CrossContainer = styled.section`
  width: 100%;
  text-align: right;
`

const TagContainer = styled.section`
  text-align: center;
  padding: 10px;
  overflow-x: hidden;
`

const displayTags = (allTags, onClickTags, selectedTags) => {
  return allTags.map(({name}) => {
    const highlighted = selectedTags.includes(name)
    return (
      <Tag
        key={id()}
        name={name}
        color={"black"}
        onClick={onClickTags}
        highlighted={highlighted}
      />
    )
  })
}

export default TagModal

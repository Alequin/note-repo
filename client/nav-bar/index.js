import React from "react";
import NavBar from "./nav-bar"

class NavBarState extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      searchTerm: "",
      selectedTags: [],
      showTagModal: false
    }

    this.onEditSearch = this.onEditSearch.bind(this)
    this.onClickTags = this.onClickTags.bind(this)
    this.toggleTagModal = this.toggleTagModal.bind(this)
    this.performSearch = this.performSearch.bind(this)
  }

  onEditSearch({target}){
    this.setState({
      searchTerm: target.value
    })
  }

  onClickTags(event){
    event.preventDefault()
    const {selectedTags} = this.state
    const {target: {value}} = event

    const newTags = selectedTags.includes(value) ?
      selectedTags.filter((tag) => {return tag != value}) :
      [...selectedTags, value]

    this.setState({
      selectedTags: newTags
    })
  }

  toggleTagModal(event){
    event.preventDefault()
    this.setState({
      showTagModal: !this.state.showTagModal
    })
  }

  performSearch(event){
    event.preventDefault()
    console.log("search");
  }

  render(){
    const {searchTerm, selectedTags, showTagModal} = this.state
    return <NavBar
      searchTerm={searchTerm}
      selectedTags={selectedTags}
      showTagModal={showTagModal}
      onEditSearch={this.onEditSearch}
      onClickTags={this.onClickTags}
      toggleTagModal={this.toggleTagModal}
      performSearch={this.performSearch}
    />
  }
}

export default NavBarState

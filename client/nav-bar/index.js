import React from "react";
import NavBar from "./nav-bar"

class NavBarState extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      searchTerm: "",
      selectedTags: []
    }

    this.onEditSearch = ({target}) => {
      this.setState({
        searchTerm: target.value
      })
    }

    this.onClickTags = (event) => {
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
  }

  render(){
    const {searchTerm, selectedTags} = this.state
    return <NavBar
      searchTerm={searchTerm}
      selectedTags={selectedTags}
      onEditSearch={this.onEditSearch}
      onClickTags={this.onClickTags}
    />
  }
}

export default NavBarState

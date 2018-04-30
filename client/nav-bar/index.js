import React from "react";
import NavBar from "./nav-bar"

class NavBarState extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      searchTerm: ""
    }

    this.onEditSearch = ({target}) => {
      this.setState({
        searchTerm: target.value
      })
    }
  }

  render(){
    const {searchTerm} = this.state
    return <NavBar
      searchTerm={searchTerm}
      onEditSearch={this.onEditSearch}
    />
  }
}

export default NavBarState

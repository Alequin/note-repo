import React from "react";
import ReactQueryParams from 'react-query-params';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Background from "./background"
import NavBar from "./nav-bar"
import NotesList from "./notes-list"
import NotePage from "./note-page"
import {url} from "common/config"

import searchQuery from "./util/search-query"
import queryVariablesFromLocation from "./util/query-variables-from-location"

const client = new ApolloClient({
  uri: `${url.local}/graphql`
});

class App extends ReactQueryParams{


  constructor(props){
    super(props)

    const {title, tags} = queryVariablesFromLocation(window.location)

    this.state = {
      searchTerm: title || "",
      selectedTags: tags || [],
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
    this.setQueryParams(searchQuery(this.state));
  }

  render(){
    const {searchTerm, selectedTags, showTagModal} = this.state
    return (
      <ApolloProvider client={client}>
        <Router>
          <Background>
            <NavBar
              searchTerm={searchTerm}
              selectedTags={selectedTags}
              showTagModal={showTagModal}
              onEditSearch={this.onEditSearch}
              onClickTags={this.onClickTags}
              toggleTagModal={this.toggleTagModal}
              performSearch={this.performSearch}
            />
            <Route exact path="/" component={NotesList} />
            <Route exact path="/note" component={NotePage} />
          </Background>
        </Router>
      </ApolloProvider>
    )

  }
}

function searchTerm({searchTerm}){
  if(!searchTerm || searchTerm === "") return undefined
  return searchTerm
}

export default App

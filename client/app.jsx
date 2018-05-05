import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Background from "./background"
import NavBar from "./nav-bar"
import NotesList from "./notes-list"
import {url} from "common/config"

const client = new ApolloClient({
  uri: `${url.local}/graphql`
});

console.log(`${url.local}/graphql`);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Background>
          <Container/>
          <Route exact path="/" component={NotesList} />
        </Background>
      </Router>
    </ApolloProvider>
  )
}

const Container = () => {
  return (
    <section>
      <NavBar/>
    </section>
  )
}

export default App

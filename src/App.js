import React, { Component } from "react";
import Layout from "./components/layout/layout";
import Search from "./components/search/search";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Search />
      </Layout>
    );
  }
}

export default App;

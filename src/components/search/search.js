import React, { Component } from "react";

import DisplayCards from "./displayCards";

import Axios from "axios";
const APIURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKey = "&key=AIzaSyB_3_1JbWwQBC9-zGqxoWVjIt3HHab73q4";
class Search extends Component {
  state = {
    data: {
      searchParameter: "",
      history: [],
      bookDetails: []
    }
  };

  getURL = (search, totalCount) => {
    return APIURL.concat(search, "&maxResults=", totalCount, APIKey);
  };

  handleChange = e => {
    console.log("handle change fn event :=> ", e);
    const data = { ...this.state };
    data.searchParameter = e.target.value;
    this.setState({ data });
    console.log("handle change data", this.state, "----", e.target.value);
  };

  handleSubmit = e => {
    this.handleSearch("test");
    e.preventDefault();
  };

  handleSearch = async input => {
    // "https://www.googleapis.com/books/v1/volumes?q=test&maxResults=10&key=AIzaSyB_3_1JbWwQBC9-zGqxoWVjIt3HHab73q4"
    const res = await Axios.get(this.getURL("test", 20));
    console.log("response", res);
    this.populateBookDetails(res.data.items);
  };

  populateBookDetails = res => {
    let data = { ...this.state.data };
    const bookDetails = [];
    res.forEach((e, i) => {
      res[i].id = e.id;
      res[i].thumbnail = e.volumeInfo.imageLinks.smallThumbnail;
      res[i].title = e.volumeInfo.title;
      res[i].author = e.volumeInfo.authors;
      res[i].publishedBy = e.volumeInfo.publisher;
    });

    for (var i in res) {
      const bookdetail = {
        id: res[i].id,
        thumbnail: res[i].thumbnail,
        title: res[i].title,
        author: res[i].author,
        publishedBy: res[i].author
      };
      bookDetails.push(bookdetail);
    }

    data.bookDetails = bookDetails;
    this.setState({ data });
  };

  render() {
    return (
      <div>
        <div
          style={{
            marginTop: "1%",
            display: "grid",
            gridTemplateColumns: "1fr 2.5fr 1fr"
          }}
        >
          <form
            onSubmit={this.handleSubmit}
            style={{
              gridColumn: "2/3",
              alignSelf: "center",
              display: "grid",
              gridTemplateColumns: "40% 20% 40%"
            }}
          >
            <label className="sr-only" htmlFor="inlineFormInputName2" />
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              id="inlineFormInputName2"
              value={this.state.data.searchParameter}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              style={{
                justifySelf: "start",
                marginLeft: "5px",
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: "3px",
                border: "0px solid #4CAF50",
                padding: "5px"
              }}
            >
              Search
            </button>
          </form>
        </div>
        <div />
        <DisplayCards booksdetails={this.state.data.bookDetails}>
          {" "}
        </DisplayCards>
      </div>
    );
  }
}

export default Search;

import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Movie from "../Movie/Movie";
import axios from "axios";

import "../SearchBar/_search-bar.scss";

class SearchBar extends Component {
  state = {
    userSearchTerm: "",
    movies: []
  };

  // When user types, match the value to state
  onInputChange = e => {
    this.setState({ userSearchTerm: e.target.value });
    console.log(e.target.value);
  };

  // On submitting the input, grab the API
  onInputSubmit = e => {
    e.preventDefault();

    const movieName = this.state.userSearchTerm;
    const KEY = "88624e6e491511ee20cb8e817d5671a1";

    const searchQuery = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${movieName}&page=10"`;

    axios.get(searchQuery).then(res => {
      this.setState({ movies: res.data.results });
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onInputSubmit}>
          <TextField
            label="Search for a movie and hit enter..."
            margin="normal"
            className="search-bar"
            onChange={this.onInputChange}
          />
        </form>
        <Movie movies={this.state.movies} />
      </div>
    );
  }
}

export default SearchBar;

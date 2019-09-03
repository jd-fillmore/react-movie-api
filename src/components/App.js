import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Nav from "../components/Nav/Nav";
import SearchBar from "../components/SearchBar/SearchBar";
import Fade from "react-reveal/Fade";

import "../../src/_general.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Fade up>
                <Nav
                  heading="Movie Database"
                  description="Built with React, Axios and MaterialUI"
                />
                <SearchBar />
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;

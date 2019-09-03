import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

import "../Movie/_movie.scss";

const Movie = props => {
  return (
    <div className="results">
      <ul>
        <Grid container spacing={3}>
          {props.movies.map(movie => (
            <Grid item sm={12} md={4}>
              <Fade>
                <Card>
                  <li key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${
                        movie.poster_path
                      }`}
                    />
                    <div className="details">
                      <h3>{movie.original_title}</h3>
                      <p>Date: {movie.release_date}</p>{" "}
                      <p>Rating: {movie.vote_average}/10</p>
                      <p>{movie.overview}</p>
                    </div>
                  </li>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </ul>
    </div>
  );
};

export default Movie;

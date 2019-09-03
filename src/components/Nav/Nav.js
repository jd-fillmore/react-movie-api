import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";

import "../Nav/_nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <AppBar position="static">
          <h2>{this.props.heading}</h2>
          <p>{this.props.description}</p>
        </AppBar>
      </div>
    );
  }
}

export default Nav;

import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import HeaderMenu from "../components/HeaderMenu.js";
import GameContainer from "../containers/GameContainer.js";
import SideBar from "../components/SideBar.js";

class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div>{this.props.user.userName}</div>
      </div>
    );
  }
}

export default DashBoard;
